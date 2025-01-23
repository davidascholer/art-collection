type UrlInterface = {
  baseURL: string;
  listURL: string;
  detailURL: string;
  departmentsURL: string;
  searchURL: string;
};

const PROD_URLS: UrlInterface = {
  baseURL: "https://collectionapi.metmuseum.org/public/collection/v1/",
  listURL: "objects",
  detailURL: "objects/",
  departmentsURL: "departments/",
  searchURL: "search?",
};

export const PAGINATION_SETTINGS = {
  itemsPerPage: 20,
  // pagesVisible: 5,
};

// Change if using different APIs for development
const LOCAL_URLS: UrlInterface = PROD_URLS;

export const BASE_URLS =
  import.meta.env.MODE === "development" ? LOCAL_URLS : PROD_URLS;
