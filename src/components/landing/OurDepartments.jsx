import SectionHeader from './SectionHeader';
import anesthesiologyIcon from '../../assets/images/departmenticons/anesthesiologyicon.png';
import cardiologyIcon from '../../assets/images/departmenticons/cardiologyicon.png';
import cardiovascularIcon from '../../assets/images/departmenticons/cardiovascularicon.png';
import cleftIcon from '../../assets/images/departmenticons/cleft_and_carniomaxillofacial_surgery.png';
import dermologyIcon from '../../assets/images/departmenticons/dermologyicon.png';
import entIcon from '../../assets/images/departmenticons/enticon.png';
import generalMedicineIcon from '../../assets/images/departmenticons/generalmedicineicon.png';
import generalSurgeryIcon from '../../assets/images/departmenticons/generalsurgeryicon.png';
import gyanIcon from '../../assets/images/departmenticons/gyanocologyicon.png';
import nephrologyIcon from '../../assets/images/departmenticons/nephrologyicon.png';
import neuroscienceIcon from '../../assets/images/departmenticons/neuroscienceicon.png';
import oncologyIcon from '../../assets/images/departmenticons/oncologyicon.png';
import orthopedicIcon from '../../assets/images/departmenticons/orthopedicicon.png';
import paediatricsIcon from '../../assets/images/departmenticons/paedaitricsicon.png';

const departments = [
  { name: 'Anesthesiology', icon: anesthesiologyIcon },
  { name: 'Cardiology', icon: cardiologyIcon },
  { name: 'Cardiovascular', icon: cardiovascularIcon },
  { name: 'Cleft & Maxillofacial', icon: cleftIcon },
  { name: 'Dermatology', icon: dermologyIcon },
  { name: 'ENT', icon: entIcon },
  { name: 'General Medicine', icon: generalMedicineIcon },
  { name: 'General Surgery', icon: generalSurgeryIcon },
  { name: 'Gyanocology', icon: gyanIcon },
  { name: 'Nephrology', icon: nephrologyIcon },
  { name: 'Neuroscience', icon: neuroscienceIcon },
  { name: 'Oncology', icon: oncologyIcon },
  { name: 'Orthopedic', icon: orthopedicIcon },
  { name: 'Paediatrics', icon: paediatricsIcon },
];

const OurDepartments = () => {
  return (
    <section className="flex w-full flex-col py-3">
      <SectionHeader
        title="Our Departments"
        subtitle="Explore our specialized departments"
      />
      {/* Grid Layout  */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <img
              className="h-[100px] w-[100px] rounded-full object-cover shadow-md"
              src={dept.icon}
              alt={dept.name}
            />
            <h3 className="mt-2 text-xl font-semibold">{dept.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurDepartments;
