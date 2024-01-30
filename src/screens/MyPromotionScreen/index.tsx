import { SecondLayout } from 'src/components/Layout';
import styles from './styles';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Text } from 'src/components';
import SeparatorItem from 'src/components/SeparatorItem';
import PromotionFlatListItem from 'src/components/ScreenComponent/PromotionFlatListItem';
import theme from 'src/themes';

const MyPromotionScreen = () => {
  return (
    <SecondLayout title={'Ưu đãi của bạn'} style={styles.container}>
      <View style={styles.headerTabView}>
        <TouchableOpacity
          style={[styles.tabButton, styles.tabButtonActive, theme.stylesPrimary.shadow]}
        >
          <Text style={styles.titleTabButtonText}>Mua hàng tại cửa hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.titleTabButtonText}>Mua online</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        // style={styles.flatList}
        data={[{}, {}, {}, {}, {}, {}, {}, {}]}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={SeparatorItem}
        renderItem={({ index }) => <PromotionFlatListItem />}
        keyExtractor={(_, index) => index.toString()}
      />
    </SecondLayout>
  );
};

export default MyPromotionScreen;
