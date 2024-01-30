import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import UtilitiesMoneySvg from 'src/assets/svg/utilities-money.svg';
import UtilitiesNoteSvg from 'src/assets/svg/utilities-note.svg';
import UtilitiesRankSvg from 'src/assets/svg/utilities-rank.svg';
import UtilitiesStarSvg from 'src/assets/svg/utilities-star.svg';

const utilities = [
  {
    label: 'Lịch sử đơn hàng',
    Icon: UtilitiesMoneySvg,
    backgroundColor: '#FAFBDB',
    color: '#264888',
  },
  {
    label: 'Chính sách & Điều khoản',
    Icon: UtilitiesNoteSvg,
    backgroundColor: '#8DC0B9',
    color: '#ffffff',
  },
  {
    label: 'Hạng thành viên',
    Icon: UtilitiesStarSvg,
    backgroundColor: '#2A64A3',
    color: '#ffffff',
  },
  {
    label: 'Lịch sử điểm',
    Icon: UtilitiesRankSvg,
    backgroundColor: '#6BA3D4',
    color: '#ffffff',
  },
];

const UtilitiesGroup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.utilitiesLabel}>Tiện ích</Text>
      <View style={styles.utilitiesGroup}>
        {utilities?.map((utility) => (
          <TouchableOpacity
            style={[
              styles.utilitiesItem,
              {
                backgroundColor: utility.backgroundColor,
              },
            ]}
          >
            <utility.Icon />
            <Text
              style={[
                styles.utilitiesText,
                {
                  color: utility.color,
                },
              ]}
            >
              {utility?.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View></View>
    </View>
  );
};

export default UtilitiesGroup;
