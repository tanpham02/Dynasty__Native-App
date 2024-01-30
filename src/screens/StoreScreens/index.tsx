import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import ListSvg from 'src/assets/svg/list-icon.svg';
import MapSvg from 'src/assets/svg/maps-icon.svg';
import SearchInputSvg from 'src/assets/svg/search-input-icon.svg';
import StarSvg from 'src/assets/svg/star-icon.svg';
import { Text, TextInput } from 'src/components';
import { PrimaryLayout } from 'src/components/Layout';

import { useState } from 'react';
import theme from 'src/themes';
import StoreMaps from './components/StoreMaps';
import styles from './styles';

const StoreItem = () => {
  return (
    <TouchableOpacity style={styles.storeBtn}>
      <Image
        style={styles.bannerImage}
        source={require('src/assets/images/home-screen-images/product-test.png')}
      />
      <View style={styles.infoView}>
        <Text style={styles.nameText}>Túc tắc Tea</Text>
        <View style={styles.starView}>
          <Text style={styles.starValueText}>5</Text>
          <StarSvg width={12} height={12} />
        </View>
        <Text style={styles.addressText}>43 Hoa Lan, Quận 1, Hồ Chí Minh</Text>
      </View>
      <Text style={styles.distanceText}>Cách 500m</Text>
    </TouchableOpacity>
  );
};

const StoreScreen = () => {
  const [showList, setShowList] = useState<boolean>(true);

  return (
    <PrimaryLayout
      title="Hệ thống cửa hàng Túc Tắc Tea"
      style={styles.container}
      headerBarStyle={styles.headerBarStyle}
    >
      <>
        <View style={styles.headerView}>
          <View style={styles.inputView}>
            <SearchInputSvg />
            <TextInput
              placeholder="Tìm kiếm cửa hàng gần bạn"
              placeholderTextColor={theme.colors.textNormal}
              style={styles.textInput}
            />
          </View>
          <TouchableOpacity
            style={[styles.mapsBtn, theme.stylesPrimary.shadow]}
            onPress={() => setShowList(!showList)}
          >
            {showList ? <MapSvg width={18} height={15} /> : <ListSvg width={18} height={25} />}
            <Text style={styles.mapsText}>{showList ? 'Bản đồ' : 'Danh sách'}</Text>
          </TouchableOpacity>
        </View>
        {showList ? (
          <View style={styles.storeListView}>
            <View style={styles.resultView}>
              <Text style={styles.resultText}>
                Có <Text style={styles.resultValueText}>9</Text> cửa hàng gần bạn
              </Text>
            </View>
            <FlatList
              style={styles.flatList}
              data={[{}, {}, {}, {}, {}, {}, {}, {}]}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              renderItem={({ index }) => <StoreItem />}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>
        ) : (
          <StoreMaps />
        )}
      </>
    </PrimaryLayout>
  );
};

export default StoreScreen;
