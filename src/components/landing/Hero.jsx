const Hero = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute min-h-full w-auto max-w-none min-w-full object-cover"
      >
        <source src="http://localhost:8000/nisarga124.mp4" type="video/mp4" />
      </video>

      {/* Black Overlay */}
      <div className="absolute inset-0 z-10 bg-black opacity-60" />

      {/* Hero Text */}
      <div className="z-20 px-4 text-center text-white">
        <h1 className="text-5xl font-bold md:text-7xl">
          Welcome to Our Hospital
        </h1>
        <p className="mt-4 text-xl md:text-2xl">
          Your health is our priority. Experience world-class care and
          compassion.
        </p>
      </div>
    </div>
  );
};

export default Hero;
