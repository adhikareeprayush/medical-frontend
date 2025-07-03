import {
  FaStethoscope,
  FaBaby,
  FaTooth,
  FaHeartbeat,
  FaClipboardList,
  FaUserMd,
  FaXRay, // For Radiology
} from 'react-icons/fa';
import {
  GiMedicines,
  GiMedicalDrip,
  GiScalpel, // ✔ Corrected from GiSurgicalKnife
  GiLifeSupport,
  GiBrain,
  GiMuscleUp,
  GiLiver,
  GiMedicinePills,
  GiHeartOrgan,
} from 'react-icons/gi';
import { LiaFileMedicalAltSolid } from 'react-icons/lia';
import { MdEmergency } from 'react-icons/md';

const iconMap = {
  stethoscope: FaStethoscope,
  baby: FaBaby,
  tooth: FaTooth,
  heartbeat: FaHeartbeat,
  medicines: GiMedicines,
  ventilator: GiLifeSupport,
  icu: GiHeartOrgan,
  pharmacy: GiMedicinePills,
  opd: FaClipboardList,
  ot: GiScalpel, // ✔ Fixed
  radiology: FaXRay, // ✔ Alternative
  neurosurgery: GiBrain,
  physiotherapy: GiMuscleUp,
  hepatology: GiLiver,
  skin: FaUserMd,
  emergency: MdEmergency,
};

export default iconMap;
