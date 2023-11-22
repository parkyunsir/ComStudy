import client from "./client"

export const writePost = ({ title, body }) =>
    client.post('/api/posts', { title, body });

export const readPost = id => client.get(`/api/posts/${id}`);

