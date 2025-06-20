import Banner from '../../assets/images/hospital_banner/hospital_banner.jpg';
import { getTransformedImageUrl } from '../../utils/getTransformedImageUrl';
import { ProgressiveImage } from '../../utils/ProgressiveImage';

const PageBanner = ({
  title,
  subtitle = '',
  subSubtitle = '',
  backgroundImage,
}) => {
  if (!title) return null;

  return (
    <div className="w-full">
      {/* Banner Container */}
      <div className="relative flex h-[180px] w-full items-center overflow-hidden md:h-[220px] lg:h-[280px] xl:h-[320px]">
        <div className="absolute h-full w-full">
          <ProgressiveImage
            lowQualitySrc={getTransformedImageUrl(
              backgroundImage || Banner,
              40,
              40,
            )}
            highQualitySrc={getTransformedImageUrl(
              backgroundImage || Banner,
              1080,
              720,
            )}
            alt={'banner'}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/55" />

        {/* Decorative Circles */}
        <div className="bg-secondary/30 absolute -top-[100px] -left-[100px] z-10 h-[200px] w-[200px] rounded-full md:-top-[120px] md:-left-[120px] md:h-[240px] md:w-[240px]" />
        <div className="bg-accent/30 absolute -right-[100px] -bottom-[100px] z-10 h-[200px] w-[200px] rounded-full md:-right-[120px] md:-bottom-[120px] md:h-[240px] md:w-[240px]" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <section className="flex w-full flex-col items-start gap-1 text-white md:gap-2">
            {/* Breadcrumb */}
            <p className="text-sm font-semibold md:text-base">
              <span className="text-primary">Home</span>
              {subtitle && (
                <>
                  <span className="text-primary mx-1">/</span>
                  <span className="text-primary">{subtitle}</span>
                </>
              )}
              {subSubtitle && (
                <>
                  <span className="text-primary mx-1">/</span>
                  <span className="text-primary">{subSubtitle}</span>
                </>
              )}
            </p>

            {/* Title */}
            <h1 className="text-primary text-2xl leading-tight font-semibold sm:text-3xl md:text-4xl">
              {title}
            </h1>
          </section>
        </div>
      </div>

      {/* Color Strip */}
      <div className="flex h-[10px] w-full md:h-[12px]">
        <div className="bg-accent h-full flex-1" />
        <div className="bg-primary h-full flex-3" />
        <div className="bg-secondary h-full flex-1" />
      </div>
    </div>
  );
};

export default PageBanner;
