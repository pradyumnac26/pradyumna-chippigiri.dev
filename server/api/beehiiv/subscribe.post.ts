export default defineEventHandler(async (event) => {

    // Preserve existing variable names so other code remains compatible
    const body = await readBody(event);
    const referrerURL = getHeader(event, 'referer') || 'Unknown';

    // For Substack we don’t actually need apiKey or campaign, 
    // but we’ll keep the same validation pattern.
    if (!body.email) {
        throw createError({
            statusCode: 400,
            statusMessage: "Bad Request: Missing email"
        });
    }

    try {
        // 🔄 Replace Beehiiv endpoint with your Substack newsletter endpoint
        const subscription = await $fetch("https://pradyumnachippigiri.substack.com/api/v1/free", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Referer": referrerURL
            },
            // Substack only needs email; extra metadata ignored safely
            body: JSON.stringify({
                email: body.email,
                referring_site: referrerURL,
                utm_source: "pradyumnachippigiri.dev",
                utm_campaign: body.campaign || "organic",
                utm_medium: "website"
            })
        });

        // Optional: log success
        console.log("Substack subscription successful:", subscription);

        // ✅ Redirect to your thank-you page just like before
        return sendRedirect(event, "/newsletter/thank-you?success=true");

    } catch (err) {
        console.error("Error subscribing to Substack:", err);
        throw createError({
            statusCode: 500,
            statusMessage: "Subscription failed. Please try again later."
        });
    }
});
