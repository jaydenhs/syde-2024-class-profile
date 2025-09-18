export const runtime = "nodejs";

export async function POST(request) {
  try {
    const { trackName, artistName } = await request.json();

    if (!trackName || !artistName) {
      return new Response(
        JSON.stringify({ error: "Missing trackName or artistName" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Use spotify-preview-finder to get working preview URLs
    const spotifyPreviewFinder = require("spotify-preview-finder");
    const result = await spotifyPreviewFinder(trackName, artistName, 1);

    if (result.success && result.results.length > 0) {
      const previewUrls = result.results[0].previewUrls;
      return new Response(
        JSON.stringify({
          previewUrl:
            previewUrls && previewUrls.length > 0 ? previewUrls[0] : null,
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify({ previewUrl: null }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Preview URL error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch preview URL" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
