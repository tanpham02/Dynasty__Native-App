interface LocationInfoModel {
  place_id?: number;
  licence?: string;
  osm_type?: string;
  osm_id?: number;
  lat?: number;
  lon?: number;
  class?: string;
  type?: string;
  place_rank?: number;
  importance?: number;
  addresstype?: string;
  name?: string;
  display_name?: string;
  address?: {
    village?: string;
    city_district?: string;
    city?: string;
    'ISO3166-2-lvl4'?: string;
    postcode?: string;
    country?: string;
    country_code?: string;
  };
  boundingbox?: number[];
}

export default LocationInfoModel;
