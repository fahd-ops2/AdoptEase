import React from 'react'
import DynamicCard from '../components/DynamicCard';
import { sitterCardDescriptor } from '@/data/descriptors/sitterCardDescriptor';
import { sittersData } from '@/data/sitters-data';
import { Grid2 } from '@mui/material';

const Sitters = () => {
  return (
    <div>
      <Grid2 container spacing={4}>
        {sittersData.map((sitter, index) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={sitter.id}>
            <DynamicCard key={index} descriptor={sitterCardDescriptor} data={sitter} />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
}

export default Sitters