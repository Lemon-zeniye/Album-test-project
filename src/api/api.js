import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export const getAlbums = async () => await axios.get("/albums");

export const createAlbum = async (album) => await axios.post("/album", album);

export const updateAlbum = async (album) => await axios.put(`/album/${album.id}`, album);

export const deleteAlbum = async (id) => await axios.delete(`/album/${id}`);

