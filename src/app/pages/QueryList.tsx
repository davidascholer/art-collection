import React from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router";

import { Button } from "@/ui/components/button/Button";
import { useGetAPIListQuery } from "@/features/toolkit/api/services/apiSlice";
import AppPagination from "@/ui/components/pagination/AppPagination";
import { PAGINATION_SETTINGS } from "@/features/toolkit/api/lib/util";
import { getFirstLastIndex } from "@/lib/utils";
import { Skeleton } from "@/ui/components/skeleton/Skeleton";

const Query: React.FC = () => {
  const { data, error, isLoading } = useGetAPIListQuery();
  const [paginatedDataState, setPaginatedDataState] = React.useState<number[]>(
    []
  );
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const pageParam = searchParams.get("page");
  const page = pageParam ? parseInt(pageParam) : 1;

  const handleNavigateToDetailPage = (id: number) => {
    navigate(location.pathname + "/" + id);
  };

  React.useEffect(() => {
    if (data) {
      const [firstItemIndex, lastItemIndex] = getFirstLastIndex(
        page,
        PAGINATION_SETTINGS.itemsPerPage,
        data.total
      );
      // Set the current visible data
      setPaginatedDataState(
        data.objectIDs.slice(firstItemIndex, lastItemIndex)
      );
    } else {
      // Clear the current data if it doesn't exist
      if (!isLoading) {
        setPaginatedDataState([]);
      }
    }
  }, [data, isLoading, page]);

  return (
    <div className="flex flex-col items-center justify-between w-full">
      <div>
        {error ? (
          <p>Failed to retrieve information.</p>
        ) : isLoading ? (
          <>
            <Skeleton className="h-4 w-36 my-1" />
            <Skeleton className="h-4 w-36 my-1" />
            <Skeleton className="h-4 w-36 my-1" />
          </>
        ) : data ? (
          Object.entries(paginatedDataState).map(([key, value]) => (
            <Button key={key} onClick={() => handleNavigateToDetailPage(value)}>
              {JSON.stringify(value)}
            </Button>
          ))
        ) : null}
      </div>
      {data?.total ? (
        <AppPagination
          className="mb-5 mt-10"
          totalItems={data.total}
          itemsPerPage={PAGINATION_SETTINGS.itemsPerPage}
          currentPage={page}
          currentURL={location.pathname}
        />
      ) : (
        <AppPagination
          className="mb-5 mt-10 pointer-events-none opacity-50"
          totalItems={0}
          itemsPerPage={PAGINATION_SETTINGS.itemsPerPage}
          currentPage={page}
          currentURL={location.pathname}
        />
      )}
    </div>
  );
};

export default Query;
