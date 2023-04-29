import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Aboutme(){
 const [loader,setLoader] = useState(true)
 const [aboutme,setAboutme] = useState(null);

    const connectToServer = async  () => axios.get("http://localhost:8000/Aboutme")
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
<Typography>Father Name: RAGHAVAREDDY</Typography>
<Typography>Mother Name: MANJULA</Typography>
<Typography>Email: srivarshithareddysheelam@gmail.com</Typography>
<Typography>Phone No.: 8142090095</Typography>
        </>

)
}
