import { FlatList } from 'react-native';
import { SecondLayout } from 'src/components/Layout';
import styles from './styles';
import SeparatorFlatListItem from './SeparatorFlatListItem';
import NotificationFlatListItem from './NotificationFlatListItem';

const NotificationScreen = () => {
  return (
    <SecondLayout title={'Thông báo'} style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={[{}, {}, {}, {}, {}, {}, {}, {}]}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={SeparatorFlatListItem}
        renderItem={({ index }) => <NotificationFlatListItem />}
        keyExtractor={(_, index) => index.toString()}
      />
    </SecondLayout>
  );
};

export default NotificationScreen;
