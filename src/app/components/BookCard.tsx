import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddBook from './AddBook';

interface Book {
    id : number;
    title :  string;
    author : string;
};
export default async function BookCard({book}) {
    
    return (
        <>
            <Card variant="outlined" className="book-card">
                <CardContent>
                    <Typography variant="h5" component="div">
                        {book?.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {book?.author}
                    </Typography>
                </CardContent>
             </Card>
        </>
    );
}
