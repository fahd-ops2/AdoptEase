import React from 'react';

import { Pet } from '@/types/Pet';
import PetListing from '../components/PetListing';
import { petsData } from '@/data/pets-data';

const pets: Pet[] = petsData;

const PetsPage = () => {
    return <PetListing pets={pets} />;
};

export default PetsPage;

