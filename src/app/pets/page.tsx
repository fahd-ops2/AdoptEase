import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid2,
  Container,
} from '@mui/material';

import { Pet } from '@/types/Pet';

const PetsPage = async () => {
    
    // Fetching pets data on the server side
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets`, {
    // This ensures the fetch is done server-side only
    cache: 'no-store',
  });

  const pets: Pet[] = await res.json();

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Available Pets for Adoption
      </Typography>

      <Grid2 container spacing={4}>
        {pets.map((pet) => (
          <Grid2 size={{xs:12, sm:6, md:4}} key={pet.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={pet.imageUrl}
                alt={pet.name}
              />
              <CardContent>
                <Typography variant="h6" component="h2">
                  {pet.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Breed: {pet.breed}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Age: {pet.age}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" >
                  View More
                </Button>
              </CardActions>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default PetsPage;
