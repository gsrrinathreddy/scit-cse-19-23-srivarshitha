import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function Qualification(){
const [loader,setLoader] = useState(true);
    const [qualifications,setQualification] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Qualification')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setQualification(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="sree chaitanya" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="sree chaitanya institute of technological sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                65%
              </Typography>
              {" — Bachelors of Technology, Computer Science"}
            </React.Fragment>
          
        }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="sri gaythri" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="sri gaythri Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                80%
              </Typography>
              {" — Intermediate studies with MPC"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Ratnam global" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Ratnam global High School"
          secondary={
            <React.Fragment>
<Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                87% 
              </Typography>
              {' — Higher Secondory Education with General Classes'}
            </React.Fragment>
          }
        />
      </ListItem>
  </List>
  );
}