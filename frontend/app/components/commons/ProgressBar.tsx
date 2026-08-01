const ProgressBar = ({ progress = 60, classNames = "" }) => {
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`h-full bg-blue-500  rounded-full transition-all duration-300 ${classNames}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;