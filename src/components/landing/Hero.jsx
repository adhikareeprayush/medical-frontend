import heroImage from '../../assets/images/general photos/hospitalbanner1234.jpg';
const Hero = () => {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden bg-black lg:h-screen">
      {/* Background Video */}
      <div className="relative flex w-full flex-col items-center justify-center">
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
          className="inset-0 z-0 block w-screen object-contain lg:hidden"
        />
        <div className="absolute bottom-10 z-20 flex flex-col items-center justify-center px-4 text-center text-[#fff] shadow lg:top-5">
          <h1 className="text-lg font-bold sm:text-3xl md:text-5xl">
            NISARGA HOSPITAL
          </h1>
          <p className="mt-1 w-fit animate-pulse rounded-lg bg-red-400 px-1 text-center text-xs sm:mt-4 sm:px-2 sm:py-1 sm:text-lg md:text-2xl">
            <b>24/7</b> Emergency Medical Services
          </p>
        </div>
      </div>

      {/* Hero Text */}
    </div>
  );
};

export default Hero;
