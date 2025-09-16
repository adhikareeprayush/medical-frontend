import HeroBanner from './HeroBanner';
import HospitalBanner from '../../assets/images/banner/hospital_banner.jpg';

const HeroSec = () => {
  return (
    <section className="relative flex h-[530px] w-full flex-col items-center justify-center overflow-hidden">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${HospitalBanner})` }}
      ></div>

      {/* Gradient overlay (e.g., from blue to transparent black) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-800/80 via-black/60 to-transparent" />

      {/* Foreground content */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center">
        <HeroBanner />
        {/* <AppointmentSec /> */}
      </div>
    </section>
  );
};

export default HeroSec;
