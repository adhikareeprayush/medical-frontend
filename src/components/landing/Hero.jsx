import heroImage from '../../assets/images/general photos/hospitalbanner1234.jpg';
const Hero = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute hidden min-h-full w-auto max-w-none min-w-full scale-[0.9] object-contain lg:block"
      >
        <source
          src="https://github.com/adhikareeprayush/video/raw/refs/heads/main/nisarga124.mp4?download="
          type="video/mp4"
        />
      </video>
      <img
        src={heroImage}
        alt="hero-image"
        className="absolute inset-0 z-0 block h-full w-full object-cover lg:hidden"
      />

      {/* Black Overlay */}
      {/* <div className="absolute inset-0 z-10 bg-black opacity-70" /> */}

      {/* Hero Text */}
      <div className="absolute bottom-60 z-20 flex flex-col items-center justify-center px-4 text-center text-[#fff] shadow">
        <h1 className="text-3xl font-bold sm:text-3xl md:text-5xl">
          NISARGA HOSPITAL
        </h1>
        <p className="mt-4 w-fit animate-pulse rounded-lg bg-red-400 px-2 py-1 text-center text-lg md:text-2xl">
          <b>24/7</b> Emergency Medical Services
        </p>
      </div>
    </div>
  );
};

export default Hero;
