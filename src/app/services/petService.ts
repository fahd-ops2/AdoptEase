import GenericService from './GenericService';
import { Pet } from '../../types/Pet';

const petService = new GenericService<Pet>('/pets');
export default petService;
