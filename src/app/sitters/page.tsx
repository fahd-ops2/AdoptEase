import React from 'react'
import { Sitter } from '@/types/Sitter';
import SitterListing from '../components/SitterListing';
import { sittersData } from '@/data/sitters-data';

const Sitters = () => {

  const sitters : Sitter[] = sittersData;
  return (
    <SitterListing  sitters={sitters}/>
  );
}

export default Sitters