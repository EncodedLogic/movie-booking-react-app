// src/services/api.js
const BASE_URL = 'https://api.tvmaze.com';

export const searchShows = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}/search/shows?q=${query}`);
        const data = await response.json();

        const showsWithImages = data.map((show) => ({
            id: show.show.id,
            name: show.show.name,
            summary: show.show.summary,
            image: show.show.image ? show.show.image.medium : null, // Check if the image is available
        }));

        return showsWithImages;
    } catch (error) {
        console.error('Error searching shows:', error);
        throw error;
    }
};

export const getShowDetails = async (showId) => {
    const response = await fetch(`${BASE_URL}/shows/${showId}`);
    const data = await response.json();
    console.log(data);
    return data;
};
