import { useMemo } from 'react';
import { Select } from '@mobile-reality/react-native-select-pro';
import { accumulateAddresses } from './data';

const AccumulateAddressSelect = () => {
  const accumulateAddressOptions = useMemo(() => {
    const options = accumulateAddresses.map((address) => {
      const label = [
        address.fullName,
        address.phoneNumber,
        address.location,
        address.ward,
        address.district,
        address.city,
      ]
        .filter((item) => Boolean(item))
        .join(', ');

      return {
        value: address.id.toString(),
        label,
      };
    });

    return options;
  }, []);

  return (
    <Select
      placeholderText='Địa chỉ đã lưu trữ ...'
      styles={{
        select: {
          container: {
            borderRadius: 8,
            height: 48,
            borderColor: '#e1e1e1',
            paddingHorizontal: 16,
            backgroundColor: '#fafafa',
          },
          text: {
            fontSize: 13.6,
            fontFamily: 'Nunito-SemiBold',
            color: '#111111',
          },
          arrow: {
            icon: {
              width: 18.3,
              height: 18.3,
              tintColor: '#666666',
            },
          },
          clear: {
            icon: {
              width: 17,
              height: 17,
              tintColor: '#666666',
            },
          },
        },
        option: {
          container: {
            borderColor: '#e1e1e1',
            height: 45,
          },

          text: {
            fontSize: 13.6,
            fontFamily: 'Nunito-SemiBold',
            color: '#111111',
          },
          selected: {
            container: {
              backgroundColor: '#eeeeee',
            },
          },
        },
        optionsList: {
          borderColor: '#e1e1e1',
        },
      }}
      options={accumulateAddressOptions}
    />
  );
};

export default AccumulateAddressSelect;
