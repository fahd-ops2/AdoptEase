import GenericService from './GenericService';
import { Book } from '../../types/Book';

const bookService = new GenericService<Book>('/books');
export default bookService;
