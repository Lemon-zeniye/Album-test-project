import React from 'react';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from 'react';
import { storage } from '../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL ,uploadBytes} from "firebase/storage";
import { useDispatch, useSelector } from 'react-redux';
import { createAlbumStart,  getSingleAlbumStart, updateAlbumStart } from '../Features/albumSlice';
import { Container, Input, Button, FileCon,  Img } from './FormStyle';
import { MdAudiotrack } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [image, setImage] = useState(null);
    const [audio, setAudio] = useState(null);
    const [imageURL, setImageURL] = useState("");
    const [audioURL, setAudioURL] = useState("");
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [percent,setPercent] = useState(0)
    const album = useSelector(state => state.albums.album);
    const night = useSelector(state => state.nightMode.night);
    useEffect(() => {
        dispatch(getSingleAlbumStart(id));
    },[dispatch, id]);
   

    const schema = yup.object().shape({
        title: yup.string().max(45).min(3).required(),
        artist: yup.string().max(45).min(3).required(),
        album: yup.string().max(45).min(3).required(),
        audio: yup.mixed().test('fileFormat', 'Unsupported file type', (value) => value.length === 0  || (value && ['audio/mpeg', 'audio/wav', 'audio/ogg'].includes(value[0].type)))
        .test('fileSize', 'File too large must be less than 2MB',  (value) => value.length === 0 || (value && value[0].size <= 5000000)).required(),
        image: yup.mixed()
        .test('fileFormat', 'Unsupported file type', (value) => value.length === 0  || (value && ["image/jpg","image/png","image/jpeg","image/avif"].includes(value[0].type)))
        .test('fileSize', 'File too large must be less than 2MB',  (value) => value.length === 0 || (value && value[0].size <= 2000000)).required()
    });
    
    const { register, handleSubmit, setValue,  formState: { errors } } = useForm({ resolver: yupResolver(schema) });
   
    useEffect(() => {
        if (id !==  undefined ) {
            Object.entries(album).forEach(
            ([name, value]) => setValue(name, value));
        }
        setValue("image","");
        setValue("audio", "");
    },[album, id, setValue]);


    const productImageRegister = register("image");
    const audioRegiser = register("audio");
    
    const handleImageUpload = (e) => {
        setImage(e.target.files[0]);
        
    }
    const handleAudioUpload = (e) => {
        setAudio(e.target.files[0]);
    }
    useEffect(() => {
        const uploadImage = () => {
            const fileName = new Date().getTime() + image.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, image);
            uploadTask.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setPercent(progress);
            }, 
            (error) => {
                console.log(error);
            },
             () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImageURL(downloadURL);
                });
            });
        }
       image &&  uploadImage()
    },[image])
    useEffect(() => {
        const uploadAudio = () => {
            const fileName = new Date().getTime() + audio.name;
            const storageRef = ref(storage, fileName);
            uploadBytes(storageRef, audio).then(() => {
                getDownloadURL(storageRef).then((url) => {
                    setAudioURL(url);
                })
            })
        }
        audio && uploadAudio()
    },[audio]);
    const submitHandler = (data) => {
        if(id !== undefined){
            const albumData = {...data, id: id ? id : '', image: imageURL ? imageURL : album.image, audio: audioURL ? audioURL : album.audio};
            dispatch(updateAlbumStart(albumData));
            console.log("lskdjfls")
        }else{
            const albumData = {...data, image: imageURL ? imageURL : album.image, audio: audioURL ? audioURL : album.audio};
            dispatch(createAlbumStart(albumData));
            console.log("here")
        }
        navigate("/");
    }

    const errorHandler= (error) => {
        console.log(error)
    }
  return (
    <Container night={night} >
        <form onSubmit={handleSubmit(submitHandler, errorHandler)} >
            <label htmlFor='title'>
               <span>Title</span>
               <Input night={night} type="text" name="title" {...register("title")}/>
               {
                errors?.title && <small>{errors.title.message}</small>
               }
            </label>
            <label>
                <span>Artist</span>
                <Input night={night} type="text" name="artist" { ...register("artist")}  />
                {
                    errors?.artist && <small>{errors.artist.message}</small>
                }
            </label>
            <label>
                <span>Album Name</span>
                <Input night={night} type="text" name="album" { ...register("album")}   />
                {
                    errors?.album && <small>{errors.album.message}</small>
                }
            </label>
            <FileCon night={night}>
                <label htmlFor='audio'>
                    <MdAudiotrack />
                    <span>Add Audio</span>
                    <Input night={night} audio  id="audio"  name="audio" type="file"  {...audioRegiser } onChange={e => { handleAudioUpload(e); audioRegiser.onChange(e) }}/>
                </label>
                <div>
                    <audio controls src={audioURL ? audioURL : album ? album.audio : "" }>
                    <a href="/media/cc0-audio/t-rex-roar.mp3">Download</a>
                    </audio> 
                </div>
                {
                    errors?.audio && <small>{errors.audio.message}</small>
                }
            </FileCon>
            <FileCon night={night}>
                <label htmlFor='image'>
                    <BsImage />
                    <span>Add Poster</span>
                    {percent}
                    <Input night={night} image id="image"  name="image" type="file"  {...productImageRegister } onChange={e => { handleImageUpload(e); productImageRegister.onChange(e) }}   />
                </label>
                <Img src={imageURL ? imageURL : album ? album.image : "" }  alt="cover page Image"/>
                {
                    errors?.image && <small>{errors.image.message}</small>
                }
            </FileCon>
            <Button night={night}>Submit</Button>
        </form>
    </Container>
  )
}

export default Form;