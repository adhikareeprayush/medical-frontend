import heroImage from '../../assets/images/banner/hospital_banner.jpg';
const Hero = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute hidden min-h-full w-auto max-w-none min-w-full object-contain lg:block"
      >
        <source
          src="https://github.com/adhikareeprayush/video/raw/refs/heads/main/nisarga124.mp4?download="
          type="video/mp4"
        />
      </video>
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 z-0 block h-full w-full object-cover lg:hidden"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 z-10 bg-black opacity-70" />

      {/* Hero Text */}
      <div className="absolute bottom-56 z-20 px-4 text-center text-[#fff] shadow">
        <h1 className="text-3xl font-bold sm:text-5xl md:text-7xl">
          Nisarga Hospital
        </h1>
        <p className="mt-4 text-xl md:text-3xl">
          24/7 Emergency Medical Services
        </p>
      </div>
    </div>
  );
};

export default Hero;
