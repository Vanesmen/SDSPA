import * as axios from "axios";

const API_KEY = "AIzaSyC97pKqv_0qNX79ck3W06fOcSMaGpEnzaI"

const instance = axios.create({

    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: "snippet",        
        key: API_KEY
    }

})

export const youtubeAPI = {
    getSearchResults(requestText, maxResults = 12, sortMethod = "date") {
        return instance.get('/search', {
            params: {
                maxResults: maxResults,
                q: requestText,
                order: sortMethod
            }
        }).then(response => {
            let data = { videoItems: response.data.items, totalResults: response.data.pageInfo.totalResults };
            
            return  data;
        })
    }
}