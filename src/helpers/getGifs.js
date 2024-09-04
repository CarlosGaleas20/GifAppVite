export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=zP4ksM0T2nlA6A6h07Ieb13swCgvdgC5&limit=2&q=${category}`;
    const response = await fetch(url);
    const { data } = await response.json();
    
    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
    }));

    return gifs;
}