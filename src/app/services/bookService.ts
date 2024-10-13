import GenericService from './GenericService';
import { Book } from '../types/Book';

const bookService = new GenericService<Book>('http://localhost:3001/books');
export default bookService;
