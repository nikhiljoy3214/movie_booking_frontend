import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MovieItem from './Movies/MovieItem'
import { Link } from 'react-router-dom'
import { getAllMovies } from '../api/api'



function HomePage() {
    
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        getAllMovies().then((data)=>setMovies(data.movies))
        
        .catch(err=>console.log(err))
    },[])
    
    
  return (
    <Box width={'100%'} height={'100%'} margin={"auto"} marginTop={2} >
        <Box width={'80%'} height={'50vh'} margin={"auto"} padding={2}>
            <img 
            src="https://i.postimg.cc/QN5Dv4bL/103855336.jpg" 
            alt="Kannur"
            width={"100%"} 
            height={"100%"} />
        </Box>
        <Box  margin={"auto"} padding={3}>
            <Typography variant='h4' textAlign={"center"}>Latest Releases</Typography>
        </Box>
        <Box margin={"auto"} display="flex" width={'80%'} justifyContent={'center'} flexWrap="wrap">
            {movies &&movies.slice(0,3).map((movie,index)=><MovieItem id={movie._id} 
            title={movie.title} 
             key={index}
             posterUrl={movie.posterUrl}
             releaseDate={movie.releaseDate}
             langauge={movie.langauge}
             />)}
        </Box>
        <Box display="flex" padding={5} margin={"auto"}>
    <Button LinkComponent={Link} to="/movies" variant="outline" sx={{margin:"auto",color:"#27005D"}}>
        View All movies
    </Button>
        </Box>
    </Box>
  )
}

export default HomePage