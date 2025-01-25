import React from "react";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu/DropdownMenu";

interface SearchFilterDropdownProps {
  filterItems: string[];
  className?: string;
  triggerTitle?: string;
  menuLabel?: string | null;
}

export const SearchFilterDropdown: React.FC<SearchFilterDropdownProps> = ({
  filterItems,
  triggerTitle = "Filter",
  menuLabel,
}) => {
  return (
    <div className="h-10 items-stretch bg-accent rounded-xl hidden md:flex">
      <DropdownMenu>
        <DropdownMenuTrigger
          data-dropdown-toggle="dropdown"
          className="bg-inherit rounded-xl px-4 shrink-0 inline-flex border-none items-center text-sm font-medium text-center outline-none focus-visible:ring-0 hover:bg-white dark:hover:bg-black hover:bg-opacity-0 dark:hover:bg-opacity-20"
        >
          <span className="mr-1">{triggerTitle}</span>
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-accent">
          {menuLabel ? (
            <>
              <DropdownMenuLabel>{menuLabel}</DropdownMenuLabel>
              <DropdownMenuSeparator />
            </>
          ) : null}
          {filterItems.map((filterItem, key) => (
            <DropdownMenuItem
              key={key}
              className="cursor-pointer hover:bg-primary focus:bg-primary"
            >
              {filterItem}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
