import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export const getAlbums = async () => await axios.get("/albums");

export const createAlbum = async () => await axios.post("/album", album);

export const updateAlbum = async () => await axios.put(`/album/${album.id}`, album);

export const deleteAlbum = async () => await axios.delete(`/album/${id}`);

