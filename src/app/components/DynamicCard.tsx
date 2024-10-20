'use client';

import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from '@mui/material';

interface DynamicCardProps<T> {
  descriptor: {
    title: keyof T;
    imageUrl: keyof T;
    fields: { label: string; value: keyof T }[];
    actions: { label: string }[];
  };
  data: T;
}

const DynamicCard = <T,>({ descriptor, data }: DynamicCardProps<T>) => {
  const handleActionClick = (label: string) => {
    if (label === 'Contact Sitter') {
      alert('Contacting sitter...');
    }
    if (label === 'Adopt') {
      alert('Adopting pet...');
    }
  };

  return (

    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Card >
        <CardMedia
          component="img"
          height="200"
          image={String(data[descriptor.imageUrl])}
          alt={String(data[descriptor.title])}
        />
        <CardContent>
          <Typography variant="h6" component="h2">
            {String(data[descriptor.title])}
          </Typography>
          {descriptor.fields.map((field, index) => (
            <Typography variant="body2" color="textSecondary" key={index}>
              {field.label}: {String(data[field.value])}
            </Typography>
          ))}
        </CardContent>
        <CardActions>
          {descriptor.actions.map((action, index) => (
            <Button key={index} size="small" color="primary" onClick={() => handleActionClick(action.label)}>
              {action.label}
            </Button>
          ))}
        </CardActions>
      </Card>
    </Box>
  );
};

export default DynamicCard;
