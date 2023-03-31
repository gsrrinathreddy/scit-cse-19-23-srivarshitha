import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">2023</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcYltVrXx6uw0LNqq1ZYANDCaUuyt_H8vSw&usqp=CAU',
    title: 'Travelling',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://cdn4.vectorstock.com/i/1000x1000/36/28/a-young-girl-watching-tv-vector-1963628.jpg',
    title: 'Watching TV',
    
  },
  {
    img: 'https://i.pinimg.com/736x/20/0c/f8/200cf8672eaf1646e8324eadd9b7394b.jpg',
    title: 'Listening Music',
    
  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNciDwvK6lbxhGa2Db2czYlM_1dhZcEijD5nrAyJckYq94v3YHCoDvzHcgDQqDUrraN0&usqp=CAU',
    title: 'Reading',

},
{
  img:'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjBjb29raW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  title: 'Cooking',

    
    cols:2,
 },
 {
  img:'https://cdn.cdnparenting.com/articles/2018/05/150311462-H.webp ',
  title: 'playing games',

    
    cols: 2,
},
];