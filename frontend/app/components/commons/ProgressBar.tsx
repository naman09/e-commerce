export interface ProgressBarProps {
  progress : number;
  label? : string;
  classNames?: string;
}

export const ProgressBar = (props: ProgressBarProps) => {

  const { label, progress, classNames } = props;

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