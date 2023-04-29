import * as React from 'react';
import { Typography } from '@mui/material';
import {useState,useEffect} from 'react';
import axios from 'axios';


export default function Project(){
const [loader,setLoader] = useState(true);
    const [Projects,setProjects] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Projects')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setProjects(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])

    return(
    <>
   <Typography> Mini Project:"An efficient and secure deduplication scheme forcloud assisted E-health system"</Typography>
   <Typography>FSWD Project:"photography website"</Typography>
    </>
    )}