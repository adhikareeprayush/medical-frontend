import LoadingGif from '../../assets/loading.gif'; // Ensure correct path

const LoadingComp = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <img
        src={LoadingGif}
        alt="Loading..."
        className="h-32 w-32 rounded-full object-contain"
      />
    </div>
  );
};

export default LoadingComp;
