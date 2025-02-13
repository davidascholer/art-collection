import React from "react";
import { ChevronDown, Search } from "lucide-react";

import { Input } from "../input/Input";
import { Button } from "../button/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu/DropdownMenu";
import { cn } from "../../lib/utils";
import { SearchFilterDropdown } from "../search-filter/SearchFilterDropdown";

interface SearchbarProps {
  //   placeholder?: string;
  //   onSearch: (query: string) => void;
  menuItems: string[];
  filterItems?: string[];
  className?: string;
  triggerTitle?: string;
  menuLabel?: string | null;
}

const Searchbar: React.FC<SearchbarProps> = ({
  //   placeholder = "Search...",
  //   onSearch,
  menuItems,
  filterItems,
  className,
  triggerTitle = "All",
  menuLabel,
}) => {
  //   const [query, setQuery] = useState("");

  //   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setQuery(event.target.value);
  //   };

  //   const handleSearch = () => {
  //     onSearch(query);
  //   };

  //   const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //     if (event.key === "Enter") {
  //       handleSearch();
  //     }
  //   };

  return (
    <form className={cn("flex-1 mx-auto justify-center flex gap-2", className)}>
      <div className="flex h-10 items-stretch bg-accent rounded-xl max-w-lg w-full">
        <div
          id="dropdown-menu-container"
          className="hidden md:flex items-stretch"
        >
          <DropdownMenu>
            <DropdownMenuTrigger
              data-dropdown-toggle="dropdown"
              className="bg-inherit rounded-l-xl px-4 shrink-0 inline-flex border-none items-center text-sm font-medium text-center rounded-none outline-none focus-visible:ring-0 hover:bg-white dark:hover:bg-black hover:bg-opacity-0 dark:hover:bg-opacity-20"
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
              {menuItems.map((menuItem, key) => (
                <DropdownMenuItem
                  key={key}
                  className="cursor-pointer hover:bg-primary focus:bg-primary"
                >
                  {menuItem}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Input
          type="search"
          placeholder="Search"
          className="rounded-l-xl md:rounded-l-none bg-inherit border-none h-full px-4 font-medium border-transparent focus-visible:ring-0 hover-highlight"
        />
        <Button
          variant="ghost"
          className="bg-inherit h-full border-none rounded-none rounded-r-xl shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center hover:bg-black hover:bg-opacity-10"
        >
          <Search />
        </Button>
      </div>
      {filterItems ? <SearchFilterDropdown filterItems={filterItems} /> : null}
    </form>
  );
};

export default Searchbar;
