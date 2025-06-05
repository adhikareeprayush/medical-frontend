import React from 'react'
import PhotoGrid from '../../components/landing/PhotoGrid';
import Doc1 from '../../assets/images/Doc1.png';
import Doc2 from '../../assets/images/Doc2.png';
import Doc3 from '../../assets/images/Doc3.png';

const photos = [
  { src: Doc1, name: 'Dr. A', title: 'Cardiologist' },
  { src: Doc2, name: 'Dr. B', title: 'Neurologist' },
  { src: Doc3, name: 'Dr. C', title: 'Oncologist' },
  { src: Doc1, name: 'Dr. D', title: 'Surgeon' },
  { src: Doc2, name: 'Dr. E', title: 'Dermatologist' },
  { src: Doc3, name: 'Dr. F', title: 'Pediatrician' },
];
  

const MedicalTeam = () => {
  return (
    <div className="mx-auto w-full max-w-5xl py-6 px-6 md:px-4 lg:px-2">
      <h2 className="text-primary mb-6 text-2xl font-bold">
        Meet Our Medical Team
      </h2>
      <PhotoGrid photos={photos} />
    </div>
  );
}

export default MedicalTeam