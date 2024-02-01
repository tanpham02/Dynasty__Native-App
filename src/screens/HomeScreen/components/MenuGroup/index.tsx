import { TouchableOpacity, View } from 'react-native';
import DeliverySvg from '@/assets/svg/pizza.svg';
import TakeAwaySvg from '@/assets/svg/pizza.svg';
import MilkTeaSvg from '@/assets/svg/pizza.svg';
import ExchangePointSvg from '@/assets/svg/pizza.svg';

import styles from './styles';
import { Text } from 'src/components';
import { Button } from 'tamagui';

const MenuGroup = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuGroupView}>
        <DeliverySvg />
        <Text>Giao hàng</Text>
        <Button className="bg-primary text-white font-nunito-800">Click me</Button>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuGroupView}>
        <TakeAwaySvg />
        <Text style={styles.menuBtnText}>Mang đi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuGroupView}>
        <MilkTeaSvg />
        <Text style={styles.menuBtnText}>Mang đi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuGroupView}>
        <ExchangePointSvg />
        <Text style={styles.menuBtnText}>Mang đi</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuGroup;
