import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../../api/api'
import MovieItem from './MovieItem'

function Movies() {
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        getAllMovies().then((data)=>setMovies(data.movies))
        .catch(err=>console.log(err))
    },[])
    
  return (
    <Box margin={"auto"} marginTop={4}>
        <Typography 
        variant='h4' 
        margin={"auto"}
        padding={2} 
        width={"40%"}
        textAlign={"center"}
        bgcolor={"#900C3F"}
        color={"white"}
        >
            All Movies
        </Typography>
        <Box width={"100%"}
        margin={"auto"}
        marginTop={5}
        marginLeft={5}
        display={'flex'}
        justifyContent={'flex-shrink'}
        flexWrap={'wrap'}>
            {movies && movies.map((movie,index)=><MovieItem 
            title={movie.title} 
             key={index}
             id={movie._id}
             posterUrl={movie.posterUrl}
             releaseDate={movie.releaseDate}
             langauge={movie.langauge}/>)}
        </Box>
    </Box>
  )
}

export default Movies