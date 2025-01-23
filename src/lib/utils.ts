import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFirstLastIndex(page:number, itemsPerPage:number, totalIndices:number): [number, number] {
        // Get the first index to be shown in the current array
        const firstItemIndex = (page - 1) * itemsPerPage;
        // The last index will be the lesser of the first index + the items per page, or the total number of items
        const lastItem = firstItemIndex + itemsPerPage;
        const lastItemIndex =
          lastItem <= totalIndices ? lastItem - 1 : totalIndices - 1;
        return [firstItemIndex, lastItemIndex]  
}