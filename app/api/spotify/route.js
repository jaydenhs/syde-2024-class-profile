export const runtime = "nodejs";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const playlistId = searchParams.get("playlistId");

    if (!playlistId) {
      return new Response(JSON.stringify({ error: "Missing playlistId" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const clientId = (process.env.SPOTIFY_CLIENT_ID || "").trim();
    const clientSecret = (process.env.SPOTIFY_CLIENT_SECRET || "").trim();

    if (!clientId || !clientSecret) {
      return new Response(
        JSON.stringify({ error: "Spotify credentials not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Get access token
    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }).toString(),
    });
    if (!tokenRes.ok) {
      const txt = await tokenRes.text();
      console.error("Spotify token error", {
        status: tokenRes.status,
        clientIdLen: clientId.length,
        clientSecretLen: clientSecret.length,
        clientIdPreview: clientId
          ? `${clientId.slice(0, 3)}...${clientId.slice(-3)}`
          : "",
      });
      throw new Error(`Token request failed: ${tokenRes.status} ${txt}`);
    }
    const tokenJson = await tokenRes.json();
    const accessToken = tokenJson.access_token;

    // Fetch playlist data
    const playlistRes = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}?market=CA`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    if (!playlistRes.ok) {
      const txt = await playlistRes.text();
      throw new Error(`Playlist request failed: ${playlistRes.status} ${txt}`);
    }
    const playlistJson = await playlistRes.json();

    const items = (playlistJson.tracks?.items || []).filter(
      (item) => !!item?.track
    );

    return new Response(
      JSON.stringify({
        name: playlistJson.name,
        uri: playlistJson.uri,
        items,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Spotify API error", error?.message);
    return new Response(JSON.stringify({ error: "Failed to fetch playlist" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
