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
import { petsData } from '@/data/pets-data';


const PetsPage = async () => {


    const pets: Pet[] = petsData;
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

