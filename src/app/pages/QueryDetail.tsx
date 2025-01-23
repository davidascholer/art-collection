import { useParams } from "react-router";

import { useGetAPIDetailQuery } from "@/features/toolkit/api/services/apiSlice";

const QueryDetail = () => {
  const params = useParams();
  const apiName = params.id
  const { data, error, isLoading } = useGetAPIDetailQuery(
    apiName ? apiName : ""
  );
  

  return (
    <div>
      {error ? (
        <p>Failed to retrieve information.</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : data ? (
        <p>{JSON.stringify(data)}</p>
      ) : null}
    </div>
  );
};

export default QueryDetail;
