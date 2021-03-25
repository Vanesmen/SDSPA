import { youtubeAPI } from "../api/api";

const SET_VIDEOS_DATA = "SET_VIDEOS_DATA";
const SET_TOTAL_RESULTS = "SET_TOTAL_RESULTS";
const SET_REQUEST_TEXT = "SET_REQUEST_TEXT";

let initialState = {
    requestText: null,
    videoList: null,
    totalResults: null
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VIDEOS_DATA:
            return {
                ...state,
                videoList: action.videoList
            }
        case SET_TOTAL_RESULTS:
            return {
                ...state,
                totalResults: action.totalResults
            }
        case SET_REQUEST_TEXT:
            return {
                ...state,
                requestText: action.requestText
            }
        
        default:
            return state;
    }
}

export const setRequestText = (requestText) => ({ type: SET_REQUEST_TEXT, requestText });
export const setVideosData = (videoList) => ({ type: SET_VIDEOS_DATA, videoList });
export const setTotalResults = (totalResults) => ({ type: SET_TOTAL_RESULTS, totalResults });

export const getVideosData = (requestText, maxResults, sortMethod) => async (dispatch) => {
    dispatch(setRequestText(requestText));
    
    let searchResult = await youtubeAPI.getSearchResults(requestText, maxResults, sortMethod);
    
    dispatch(setVideosData(searchResult.videoItems));
    dispatch(setTotalResults(searchResult.totalResults));
    
}



export default searchReducer;