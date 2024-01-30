import { FlatList } from 'react-native';
import { PrimaryLayout } from 'src/components/Layout';
import SeparatorItem from 'src/components/SeparatorItem';
import UserInfo from './components/UserInfo';
import styles from './styles';
import PromotionFlatListItem from 'src/components/ScreenComponent/PromotionFlatListItem';

const PromotionScreen = () => {
  return (
    <PrimaryLayout title="Ưu đãi mới nhất" style={styles.container}>
      <UserInfo />
      <FlatList
        style={styles.flatList}
        data={[{}, {}, {}, {}, {}, {}, {}, {}]}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={SeparatorItem}
        renderItem={({ index }) => <PromotionFlatListItem />}
        keyExtractor={(_, index) => index.toString()}
      />
    </PrimaryLayout>
  );
};

export default PromotionScreen;
