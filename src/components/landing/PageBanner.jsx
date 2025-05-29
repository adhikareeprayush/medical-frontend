const PageBanner = ({ title, subtitle = 'Home', backgroundImage }) => {
  if (!title || !backgroundImage) return null;

  return (
    <div className="flex h-[250px] w-full flex-col">
      <div className="relative flex h-full w-full items-center overflow-hidden text-center text-white">
        <img
          src={backgroundImage}
          alt="Banner Background"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
        <div className="bg-secondary/30 absolute -top-[139px] -left-[139px] z-10 h-[239px] w-[239px] rounded-full" />
        <div className="bg-accent/30 absolute right-[-139px] bottom-[-139px] z-10 h-[239px] w-[239px] rounded-full" />
        <section className="relative z-10 flex w-full flex-col items-start gap-0 px-6">
          <p className="font-body2 text-primary">Home / {subtitle}</p>
          <h1 className="font-display1 text-primary">{title}</h1>
        </section>
        <div className="absolute inset-0 z-0 bg-white/50" />
      </div>
      <div className="z-10 flex h-[8px] w-full">
        <div className="bg-accent h-full flex-1" />
        <div className="bg-primary h-full flex-3" />
        <div className="bg-secondary h-full flex-1" />
      </div>
    </div>
  );
};

export default PageBanner;
