interface UrlsInterace {
    userURL: string;
    dataApiURL: string;
}

const PROD_URLS:UrlsInterace = {
    userURL: "https://api.example.com/",
    dataApiURL: "https://pokeapi.co/api/v2/"
}

const LOCAL_URLS:UrlsInterace = {
    userURL: "http://127.0.0.1:8000/",
    dataApiURL: "https://pokeapi.co/api/v2/"
}


export const BASE_URLS = import.meta.env.MODE === "development" ? LOCAL_URLS : PROD_URLS;