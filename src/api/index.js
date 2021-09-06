import axios from 'axios';

const url = 'htrtp://localhost:5000/posts'

export const fetchPosts = () => axios.get(url);