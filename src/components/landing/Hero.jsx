const Hero = () => {
  return (
    <div className="relative w-full h-[780px] overflow-hidden flex items-center justify-center bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Hero;
