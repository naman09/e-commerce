const ProgressBar = ({ progress = 60, label = "", classNames = "" }) => {
  return (
    <div className="flex items-center gap-x-2">
      {label}
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`h-full bg-blue-500  rounded-full transition-all duration-300 ${classNames}`}
        style={{ width: `${progress}%` }}
      />
    </div>
    <p className="text-gray-400 text-sm">{progress}%</p>
    </div>
  );
};

export default ProgressBar;