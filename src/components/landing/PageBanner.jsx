import Banner from '../../assets/images/hospital_banner/hospital_banner.jpg';
const PageBanner = ({
  title,
  subtitle = '',
  subSubtitle = '',
  backgroundImage,
}) => {
  if (!title) return null;

  return (
    <div className="flex h-[150px] lg:h-[235px] w-full flex-col">
      <div className="relative flex h-full w-full items-center overflow-hidden text-center text-white">
        <img
          src={backgroundImage || Banner}
          alt="Banner Background"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
        <div className="bg-secondary/30 absolute -top-[139px] -left-[139px] z-10 h-[239px] w-[239px] rounded-full" />
        <div className="bg-accent/30 absolute right-[-139px] bottom-[-139px] z-10 h-[239px] w-[239px] rounded-full" />
        <section className="relative z-10 flex w-full flex-col items-start gap-0">
          <p className="font-body2 text-primary">
            Home {subtitle ? `/ ${subtitle}` : ''}{' '}
            {subSubtitle ? `/ ${subSubtitle}` : ''}
          </p>
          <h1 className="font-display1 text-primary text-left">{title}</h1>
        </section>
        <div className="absolute inset-0 z-0 bg-white/55" />
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
