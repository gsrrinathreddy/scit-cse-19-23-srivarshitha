import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Contactme(){
const [loader,setLoader] = useState(true);
    const [aboutme,setAboutme] = useState(null);

    const connectToServer = async  () => axios.get("http://localhost:8000/Contactme")
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setAboutme(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])
  return(
     <>
<Typography>Name: SRIVARSHITHA REDDY SHEELAM</Typography>
<Typography>mobileno:8142090095</Typography>
<Typography>Email: srivarshithareddysheelam@gmail.com</Typography>
<Typography>Address:6-7/2,anupuram,vemulawada,rajannasiricilla</Typography>
<Typography>pincode:505302</Typography>
        </>

)
}