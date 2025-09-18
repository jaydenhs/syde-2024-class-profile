export const runtime = "nodejs";

async function getPreviewUrl(track) {
  try {
    // Call our separate preview API endpoint
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/api/preview`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          trackName: track.name,
          artistName: track.artists[0].name,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data.previewUrl;
    }
  } catch (error) {
    console.error("Error fetching preview URL:", error);
  }
  return null;
}

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

    // Fetch preview URLs for each track
    const itemsWithPreviews = await Promise.all(
      items.map(async (item) => {
        const previewUrl = await getPreviewUrl(item.track);
        return {
          ...item,
          track: {
            ...item.track,
            preview_url: previewUrl,
          },
        };
      })
    );

    return new Response(
      JSON.stringify({
        name: playlistJson.name,
        uri: playlistJson.uri,
        items: itemsWithPreviews,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Spotify API error", error?.message, error?.stack);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch playlist",
        details: error?.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
