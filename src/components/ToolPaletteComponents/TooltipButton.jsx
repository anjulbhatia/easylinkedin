import { cn } from '../../../utils';

export function TooltipButton ({ id, icon, label, onClick }) {
    return (
      <div className={cn("tooltip tooltip-top")} data-tip={label}>
        <button className={cn("toolTipBtn btn btn-sm text-md w-2 grid place-content-center bg-base-200 shadow-md px-4 py-2 rounded")} onClick={onClick}>
          {icon || label}
        </button>
      </div>
    );
  };
