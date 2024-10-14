import React from 'react'
import AddBookForm from '../components/BookCard/BookCard'
import BookList from '../components/BookCard/BookList'

const page = () => {
  return (
    <div>
        <h1>books</h1>
        <BookList/>
    </div>
  )
}

export default page