import axios from 'axios';

const API_URL = process.env.BASE_API_URL;

export const CURRENT_VIEW = 'CURRENT_VIEW';
export const FETCH_POSTS = 'FETCH_POSTS';

export function selectView(view) {
    return {
        type: CURRENT_VIEW,
        payload: view
    };
}

export function fetchPosts() {
    const url = `${API_URL}posts/`;
    const request = axios.get(url);
    console.log(url)

    return {
        type: FETCH_POSTS,
        payload: request
    };
}