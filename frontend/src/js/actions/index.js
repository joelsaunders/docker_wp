import axios from 'axios';

const API_URL = process.env.BASE_API_URL;

export const CURRENT_VIEW = 'CURRENT_VIEW';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';

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

export function fetchPost(postId) {
    const request = axios.get(`${API_URL}posts/${postId}/`)
    console.log(`${API_URL}posts/${postId}/`)

    return {
        type: FETCH_POST,
        payload: request
    };
}