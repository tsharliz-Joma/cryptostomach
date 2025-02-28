const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="w-24 h-24 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
