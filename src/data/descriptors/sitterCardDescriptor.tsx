import { Sitter } from '@/types/Sitter';

export const sitterCardDescriptor = {
  title: 'name' as keyof Sitter, // Explicitly define this as a key of Sitter
  imageUrl: 'imageUrl' as keyof Sitter, // Explicitly define this as a key of Sitter
  fields: [
    { label: 'Experience', value: 'experience' as keyof Sitter },
    { label: 'Location', value: 'location' as keyof Sitter },
  ],
  actions: [
    { label: 'Contact Sitter'},
  ],
};
