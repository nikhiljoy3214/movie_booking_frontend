import Checkbox from '@mui/material/Checkbox';
import { Box, Button, FormLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { addMovie } from '../../api/api';
import { useNavigate } from 'react-router-dom';

function AddMovie() {
  const navigate = useNavigate();

    const [inputs,setInputs]=useState({
        title: "",
        description: "",
        posterUrl: "",
        releaseDate: "",
        featured: false
        
    })
    const [actors, setActors] = useState([]);
    const [actor, setActor] = useState("");
    const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
      
      const handleSubmit=(e)=>{
        e.preventDefault();
    console.log(inputs,actors);
    addMovie({ ...inputs, actors })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      navigate("/movies")
      }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Box width={"50%"}
          padding={10}
          margin="auto"
          display={"flex"}
          flexDirection="column"
          boxShadow={"10px 10px 20px #ccc"}>

<Typography textAlign={"center"} variant="h5" fontFamily={"verdana"}>
            Add New Movie
          </Typography>
          <FormLabel>Title</FormLabel>
          <TextField
          value={inputs.title}
          onChange={handleChange}
            name="title"
            variant="standard"
            margin="normal"
          />
          <FormLabel>Description</FormLabel>
          <TextField
          value={inputs.description}
          onChange={handleChange}
            name="description"
            variant="standard"
            margin="normal"
          />
          <FormLabel>Poster URL</FormLabel>
          <TextField
          value={inputs.posterUrl}
          onChange={handleChange}
            name="posterUrl"
            variant="standard"
            margin="normal"
          />
          <FormLabel>Relase Date</FormLabel>
          <TextField
          value={inputs.releaseDate}
          onChange={handleChange}
            name="releaseDate"
            type='date'
            variant="standard"
            margin="normal"
          />
          <FormLabel>Actors</FormLabel>
          <Box display={"flex"}>
          <TextField
            value={actor}
            name="actor"
            onChange={(e) => setActor(e.target.value)}
            variant="standard"
            margin="normal"
          />
          <Button onClick={() => {
                setActors([...actors, actor]);
                setActor("");
              }}>Add</Button>
          </Box>
          <FormLabel>Featured</FormLabel>
          <Checkbox name="featured" value={inputs.featured}
          onClick={(e) =>
            setInputs((prevSate) => ({
              ...prevSate,
              featured: e.target.checked,
            }))
          } sx={{mr:"auto"}}></Checkbox>
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "30%",
              margin: "auto",
              bgcolor: "#2b2d42",
              ":hover": {
                bgcolor: "#121217",
              },
            }}
          >
            Add New Movie
          </Button>
          </Box>
          
        </form>
    </div>
  )
}

export default AddMovie