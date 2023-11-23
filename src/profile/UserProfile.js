import React, { Fragment, useEffect, useState } from 'react';
import { deleteBooking, getUserBooking, getUserDetails } from '../api/api';
import { Box } from '@mui/system';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
import { IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function UserProfile() {
  const [bookings, setBookings] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    getUserBooking()
      .then((res) => setBookings(res.bookings))
      .catch((err) => console.log(err));

    getUserDetails().then((res) => setUser(res.user));
  }, [bookings]);

  const handleDelete = (id) => {
    deleteBooking(id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent="space-around"
      alignItems="center"
      paddingBottom={2}
    >
      {user && (
        <Box
          width={{ xs: '100%', md: '30%' }}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          padding={2}
        >
          <AccountBoxSharpIcon sx={{ fontSize: '10rem' }} />
          <Typography
            padding={1}
            width="auto"
            border="1px solid #ccc"
            borderRadius={6}
          >
            Name: {user.name}
          </Typography>
          <Typography
            padding={1}
            width="auto"
            border="1px solid #ccc"
            borderRadius={6}
          >
            Email: {user.email}
          </Typography>
        </Box>
      )}

      {bookings && bookings.length > 0 && (
        <Box
          width={{ xs: '100%', md: '70%' }}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="h3" fontFamily="verdana" textAlign="center" padding={2}>
            Bookings
          </Typography>
          <Box  width={{ xs: '100%', md: '80%' }}>
            <List >
              {bookings.map((booking, index) => (
                <ListItem 
                  key={index}
                  sx={{
                    width: 'auto',
                    textAlign: 'center',
                    marginY: 1,
                    paddingY: 2,
                    border: '1px solid #ccc',
                    borderRadius: 6,
                    bgcolor:"#0274BD"
                  }}
                >
                  <ListItemText>
                    <Typography variant="body1">
                      Movie: {booking.movie.title}
                    </Typography>
                    <Typography variant="body1">
                      Seat No: {booking.seatNumber}
                    </Typography>
                    <Typography variant="body1">
                      Date: {new Date(booking.date).toDateString()}
                    </Typography>
                  </ListItemText>
                  <IconButton onClick={() => handleDelete(booking._id)} color="error">
                    <DeleteIcon color="red" />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default UserProfile;
