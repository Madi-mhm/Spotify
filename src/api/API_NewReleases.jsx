import fetchSpotifyApi from "./api";


const API_NewReleases = async () => {
    const apiData = await fetchSpotifyApi('browse/new-releases?country=US&offset=0');
    
    const data = apiData.albums.items.map(item => item)

    return data
    
};
  
export default API_NewReleases

