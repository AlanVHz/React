
export const getGifs = async (category, limit=10) => {
    const api_key = "WDvTgX49SR4iLfix2bmIw0vQkaoi2l2p";	
    let endpoint = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=${limit }&api_key=${ api_key }`;

    const response = await fetch(endpoint);
    const { data } = await response.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}