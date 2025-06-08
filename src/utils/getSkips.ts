


export async function fetchSkipsByLocation(postcode: string, area: string) {
    try {
        const response = await fetch(`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching skips:', error);
        throw error;
    }
}