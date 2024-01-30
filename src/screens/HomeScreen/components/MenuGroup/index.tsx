import { TouchableOpacity, View } from "react-native";
import DeliverySvg from "src/assets/svg/delivery-icon.svg";
import TakeAwaySvg from "src/assets/svg/take-away-icon.svg";
import MilkTeaSvg from "src/assets/svg/milk-tea-icon.svg";
import ExchangePointSvg from "src/assets/svg/exchange-point-icon.svg";

import styles from "./styles";
import { Text } from "src/components";
import { Button } from "tamagui";

const MenuGroup = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuGroupView}>
        <DeliverySvg />
        <Text>Giao hàng</Text>
        <Button className="bg-primary text-white font-nunito-800">
          Click me
        </Button>
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
