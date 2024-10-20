'use client';

import React, { useState } from 'react';
import { Typography, Container, Box, Pagination, Grid2 } from '@mui/material';
import DynamicCard from '../components/DynamicCard';
import { Sitter } from '@/types/Sitter';
import { sitterCardDescriptor } from '@/data/descriptors/sitterCardDescriptor';

interface SitterListingProps {
  sitters: Sitter[];
}

const SitterListing: React.FC<SitterListingProps> = ({ sitters }) => {
  const sittersPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const startIndex = (currentPage - 1) * sittersPerPage;
  const paginatedSitters = sitters.slice(startIndex, startIndex + sittersPerPage);
  const totalPages = Math.ceil(sitters.length / sittersPerPage);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Available Pets for Adoption
      </Typography>

      <Grid2 container spacing={4}>
        {paginatedSitters.map((pet) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={pet.id}>
            <DynamicCard descriptor={sitterCardDescriptor} data={pet} />
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

export default SitterListing;
