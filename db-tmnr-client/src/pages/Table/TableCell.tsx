import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Member } from "@server/db";

function TableCell({ getValue }: { getValue: () => Member[keyof Member] }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <div className="truncate">
          <TooltipTrigger asChild>
            <span className="cursor-pointer">{getValue()}</span>
          </TooltipTrigger>
        </div>
        <TooltipContent>
          <p>{getValue()}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default TableCell;
