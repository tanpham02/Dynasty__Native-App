import { View } from 'react-native';
import BuyActionItem from '../BuyActionItem';
import { buyActions } from './data';

const BuyAction = () => {
  return (
    <View className="flex-row px-3">
      {buyActions.map((buyAction, index) => (
        <BuyActionItem key={index} {...buyAction} />
      ))}
    </View>
  );
};

export default BuyAction;
