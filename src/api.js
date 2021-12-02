const FLATICON_API_KEY = "*********";

export async function getSuggestedIcons(query) {
    // Get temp auth header
    const response = await fetch("https://api.flaticon.com/v2/app/authentication", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "apikey": FLATICON_API_KEY
        })
    });

    // Parse authHeader
    const authResponse = await response.json();
    const authToken = authResponse?.data?.token;

    // Do query
    const payload = await fetch(`https://api.flaticon.com/v2/search/icons/priority?q=${query}&limit=5&color=2`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    });

    const images = await payload.json()
    return images.data;
}
