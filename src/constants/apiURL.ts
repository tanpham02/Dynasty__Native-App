import configEnv from 'src/configs';

export const API_BASE_URL: string = `${configEnv.API_BASE_URL}/api`;

const combineUrl = (...routes: string[]) => `${API_BASE_URL}/${routes.join('/')}`;

// AUTHENTICATION
export const API_SIGN_IN_URL = combineUrl('auth', 'customer', 'login', 'social-account', 'google');

//CATEGORY URL
export const API_CATEGORY_URL = combineUrl('categories');
export const API_CATEGORY_SEARCH_URL = combineUrl('categories', 'search');
export const API_CATEGORY_SEARCH_ALL_URL = combineUrl('categories', 'search-all');

// TERM AND POLICY URL
export const API_TERM_AND_POLICY_SEARCH_URL = combineUrl('term-and-policy', 'search-all');

// PRODUCT URL
export const API_PRODUCT_URL = combineUrl('products');
export const API_PRODUCT_SEARCH_URL = combineUrl('products', 'search');

// BANNER URL
export const API_BANNER_URL = combineUrl('banners');
export const API_BANNER_SEARCH_URL = combineUrl('banners', 'search');

// CUSTOMER URL
export const API_CUSTOMER_URL = combineUrl('customers');
export const API_CUSTOMER_INFO_URL = combineUrl(API_CUSTOMER_URL, 'customer-info');

//CUSTOMER ADDRESS URL
export const API_CUSTOMER_ADDRESS_URL = combineUrl('customers', 'customer-address');

// STORE CONFIG URL
export const STORE_CONFIG_SERVICE_URL = combineUrl('store-config');

export const OPEN_STREET_MAP_URL = 'https://nominatim.openstreetmap.org';
