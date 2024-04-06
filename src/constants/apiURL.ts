import configEnv from 'src/configs';

export const API_BASE_URL: string = `${configEnv.API_BASE_URL}/api`;

const combineUrl = (...routes: string[]) => `${API_BASE_URL}/${routes.join("/")}`

// AUTHENTICATION
export const API_SIGN_IN_URL = combineUrl("auth", "customer", "login", "social-account", "google")

//CATEGORY URL
export const API_CATEGORY_URL = combineUrl("category")
export const API_CATEGORY_SEARCH_URL = combineUrl("category", "search")
export const API_CATEGORY_SEARCH_ALL_URL = combineUrl("category", "search-all")

// TERM AND POLICY URL
export const API_TERM_AND_POLICY_SEARCH_URL = combineUrl("term-and-policy", "search-all")

// PRODUCT URL
export const API_PRODUCT_URL = combineUrl("products")
export const API_PRODUCT_SEARCH_URL = combineUrl("products", "search")

// BANNER URL
export const API_BANNER_URL = combineUrl("banners")
export const API_BANNER_SEARCH_URL = combineUrl("banners", "search")

// CUSTOMER URL
export const API_CUSTOMER_URL = combineUrl("customers")
export const API_CUSTOMER_INFO_URL = combineUrl("customers", "customer-info")

//CUSTOMER ADDRESS URL
export const API_CUSTOMER_ADDRESS_URL = combineUrl("customers", "customer-address")


export const OPEN_STREET_MAP_URL = 'https://nominatim.openstreetmap.org';
