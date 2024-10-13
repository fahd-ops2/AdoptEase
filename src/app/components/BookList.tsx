import React from 'react';
import { Book } from '../types/Book';
import BookCard from './BookCard';
import bookService from '../services/bookService';
import AddBook from './AddBook';

export default async function BookList() {
    const books : Book[] = await bookService.getAll()

    return (
        <>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <BookCard book={book} />
                    </li>
                ))}
            </ul>
            <AddBook/>
        </>
    );
}

