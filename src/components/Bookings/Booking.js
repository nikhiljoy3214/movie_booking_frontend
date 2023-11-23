import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovieDetails, newBooking } from '../../api/api';
import { Button, FormLabel, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

function Booking() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState();
  const [inputs, setInputs] = useState({ seatNumber: '', date: '' });
  const id = useParams().id;

  useEffect(() => {
    getMovieDetails(id)
      .then((res) => setMovie(res.movie))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    newBooking({ ...inputs, movie: movie._id })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate('/user');
  };

  return (
    <div>
      {movie && (
        <Fragment>
          <Typography padding={3} fontFamily="fantasy" variant="h4" textAlign={'center'}>
            Book Tickets for Movie: {movie.title}
          </Typography>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            justifyContent="center"
            alignItems={{ md: 'center' }}
          >
            <Box
              width={{ xs: '100%', md: '50%' }}
              padding={{ xs: 2, md: 5 }}
              marginRight={{ md: 'auto' }}
            >
              <img width={"70%"}  src={movie.posterUrl} alt={movie.title} />
              <Box width={{ xs: '100%', md: '80%' }}  padding={1}>
                <Typography paddingTop={1}>{movie.description}</Typography>
                <Typography fontWeight="bold" marginTop={1}>
                  Starrer: {movie.actors.map((actor) => ' ' + actor + ' ')}
                </Typography>
                <Typography fontWeight="bold" marginTop={1}>
                  Release Date: {new Date(movie.releaseDate).toDateString()}
                </Typography>
              </Box>
            </Box>
            <Box
              width={{ xs: '100%', md: '50%' }}
              paddingTop={{ xs: 3, md: 0 }}
              marginLeft={{ xs: 0, md: 2 }}
            >
              <form onSubmit={handleSubmit}>
             
                <Box
                  padding={5}
                  margin="auto"
                  display="flex"
                  flexDirection="column"
                  borderRadius={8}
                  boxShadow={2}
                  backgroundColor="white"
                >
                  
                  <FormLabel>Seat Number</FormLabel>
                  <TextField
                    name="seatNumber"
                    value={inputs.seatNumber}
                    onChange={handleChange}
                    type="number"
                    margin="normal"
                    variant="outlined"
                  />
                  <FormLabel>Booking Date</FormLabel>
                  <TextField
                    name="date"
                    type="date"
                    margin="normal"
                    variant="outlined"
                    value={inputs.date}
                    onChange={handleChange}
                  />
                  <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
                    Book Now
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Fragment>
      )}
    </div>
  );
}

export default Booking;
