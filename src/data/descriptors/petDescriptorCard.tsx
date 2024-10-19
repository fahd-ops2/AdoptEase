import { Pet } from "@/types/Pet";

export const petCardDescriptor = {
    title: 'name' as keyof Pet, // Use the pet's name as the title
    imageUrl: 'imageUrl' as keyof Pet, // Use the pet's imageUrl as the image
    fields: [
      { label: 'Breed', value: 'breed' as keyof Pet }, // Display the pet's breed
      { label: 'Age', value: 'age' as keyof Pet }, // Display the pet's age
    ],
    actions: [
      { label: 'Adopt' }, // Sample action for adopting a pet
    ],
  };
  