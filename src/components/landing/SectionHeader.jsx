const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="justity-center flex flex-col items-center gap-0">
      <h2 className="font-caption text-secondary text-2xl">{title}</h2>
      <p className="text-primary font-display2">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
