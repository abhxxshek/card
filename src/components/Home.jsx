import { Box, Card, CardContent, Grid2, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Home = () => {

  const [data, setData] = useState([]);

  // Fetch data using axios
  useEffect(() => {
    axios.get('https://dummyjson.com/users').then((res) => {
      setData(res.data.users);
    });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>CARD VIEW</h1>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid2 container spacing={3}>
          {data.map((user) => {
            
            const cardBackgroundColor = user.gender === 'male' ? '#FFD580' : '#ADD8E6'; 
            
            return (
              <Grid2 item xs={12} sm={6} md={5} key={user.id} sx={{display:'flex',justifyContent:'center'}}>
                <Card style={{ backgroundColor: cardBackgroundColor }}
                sx={{width:"400px",height:'auto',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {user.firstName} {user.lastName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Email:</strong> {user.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>gender:</strong> {user.gender}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>phone:</strong> {user.phone}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Address:</strong> {user.address.address}, {user.address.city}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
            );
          })}
        </Grid2>
      </Box>
    </>
  );
}

export default Home
