import { useMemo } from 'react';
import { getDistricts, getProvinces, getWards } from 'vietnam-provinces';

interface AddressState {
  cityId?: string;
  districtId?: string;
}

const useAddress = ({ cityId, districtId }: AddressState) => {
  const cityOptions = useMemo(() => getProvinces()?.map((city) => ({ label: city.name, value: city.code })), []);

  const districtOptions = useMemo(() => {
    if (!cityId) return [];

    return getDistricts(cityId)?.map((district) => ({ label: district.name, value: district.code }));
  }, [cityId]);

  const wardOptions = useMemo(() => {
    if (!districtId) return [];

    return getWards(districtId)?.map((ward) => ({ label: ward.name, value: ward.code }));
  }, [districtId]);

  return { cityOptions, districtOptions, wardOptions } as const;
};

export default useAddress;
