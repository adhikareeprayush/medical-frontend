import {
  FaStethoscope,
  FaClinicMedical,
  FaBaby,
  FaTooth,
  FaHeartbeat,
  FaXRay,
} from 'react-icons/fa';
import { TbPhysotherapist } from 'react-icons/tb';
import { GiMedicines } from 'react-icons/gi';
import { GrEmergency } from 'react-icons/gr';
import {
  dermatology,
  Genereal_medicine,
  General_Surgery,
  Neuroscience,
  urology,
  vascular_surgery,
} from '../../assets/images/clinicalDepartment/Dermatology.png';

const iconMap = {
  stethoscope: FaStethoscope,
  baby: FaBaby,
  tooth: FaTooth,
  heartbeat: FaHeartbeat,
  medicines: GiMedicines,
  emergency: GrEmergency,
  skin: dermatology,
  icu: FaClinicMedical,
  pharmacy: Genereal_medicine,
  ot: General_Surgery,
  neurosurgery: Neuroscience,
  ventilator: vascular_surgery,
  radiology: FaXRay,
  physiotherapy: TbPhysotherapist,
  hepatology: urology,
};

export default iconMap;
