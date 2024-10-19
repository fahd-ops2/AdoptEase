import React from 'react'
import DynamicCard from '../components/DynamicCard';
import { sitterCardDescriptor } from '@/data/descriptors/sitterCardDescriptor';
import { sittersData } from '@/data/sitters-data';

const Sitters = () => {
  return (
    <div>
      {sittersData.map((sitter, index) => (
        <DynamicCard key={index} descriptor={sitterCardDescriptor} data={sitter} />
      ))}
    </div>
  );
}

export default Sitters