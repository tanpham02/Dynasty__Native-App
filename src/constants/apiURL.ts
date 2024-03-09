import configEnv from 'src/configs';

export const API_BASE_URL: string = configEnv.API_BASE_URL;

const combineUrl = (...routes: string[]) => `${API_BASE_URL}/${routes.join("/")}`

//CATEGORY URL
export const API_CATEGORY_URL = combineUrl("category")
export const API_CATEGORY_SEARCH_URL = combineUrl("category", "search")
export const API_CATEGORY_SEARCH_ALL_URL = combineUrl("category", "search-all")

// TERM AND POLICY URL
export const API_TERM_AND_POLICY_SEARCH_URL = combineUrl("term-and-policy", "search-all")

// PRODUCT URL
export const API_PRODUCT_URL = combineUrl("products")
export const API_PRODUCT_SEARCH_URL = combineUrl("products", "search")


export const OPEN_STREET_MAP_URL = 'https://nominatim.openstreetmap.org';
