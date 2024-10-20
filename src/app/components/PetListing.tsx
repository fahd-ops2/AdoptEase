'use client'; // This makes the component a client component

import React, { useState } from 'react';
import { Typography, Container, Box, Pagination, Grid2 } from '@mui/material';
import DynamicCard from '../components/DynamicCard';
import { Pet } from '@/types/Pet';
import { petCardDescriptor } from '@/data/descriptors/petDescriptorCard';

interface PetListingProps {
  pets: Pet[];
}

const PetListing: React.FC<PetListingProps> = ({ pets }) => {
  const petsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const startIndex = (currentPage - 1) * petsPerPage;
  const paginatedPets = pets.slice(startIndex, startIndex + petsPerPage);
  const totalPages = Math.ceil(pets.length / petsPerPage);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Available Pets for Adoption
      </Typography>

      <Grid2 container spacing={4}>
        {paginatedPets.map((pet) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={pet.id}>
            <DynamicCard descriptor={petCardDescriptor} data={pet} />
          </Grid2>
        ))}
      </Grid2>

      <Box mt={4} display="flex" justifyContent="center">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default PetListing;
