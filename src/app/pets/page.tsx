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
import DynamicCard from '../components/DynamicCard';
import { petCardDescriptor } from '@/data/descriptors/petDescriptorCard';


const PetsPage = async () => {


    const pets: Pet[] = petsData;
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Available Pets for Adoption
      </Typography>

      <Grid2 container spacing={4}>
        {pets.map((pet, index) => (
          <Grid2 size={{xs:12, sm:6, md:4}} key={pet.id}>
            <DynamicCard key={index} descriptor={petCardDescriptor} data={pet} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default PetsPage;

