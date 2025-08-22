import { PlusIcon, MinusIcon } from "lucide-react";

export enum FilterState {
  NEUTRAL,
  INCLUDE,
  EXCLUDE,
}

interface FilterChipProps {
  label: string;
  state: FilterState;
  onClick: () => void;
}
export default function FilterChip({ label, state, onClick }: FilterChipProps) {
  const baseClasses =
    "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2";

  const stateClasses = {
    [FilterState.NEUTRAL]:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
    [FilterState.INCLUDE]:
      "bg-green-500/80 text-white hover:bg-green-500 ring-2 ring-green-400",
    [FilterState.EXCLUDE]:
      "bg-red-500/80 text-white hover:bg-red-500 ring-2 ring-red-400",
  };

  const Icon = ({ state }: { state: FilterState }) => {
    if (state === FilterState.INCLUDE) return <PlusIcon className="h-4 w-4" />;
    if (state === FilterState.EXCLUDE) return <MinusIcon className="h-4 w-4" />;
    return null;
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${stateClasses[state]}`}
    >
      <Icon state={state} />
      {label}
    </button>
  );
}
