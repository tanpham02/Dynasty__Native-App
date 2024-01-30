import { Image, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Text } from 'src/components';

const NotificationFlatListItem = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.bannerImage}
        source={require('src/assets/images/notification-screen-images/notification-test.png')}
      />
      <View style={styles.infoView}>
        <Text style={styles.titleText}>Túc Tắc Tea chuẩn bị ra mắt món mới</Text>
        <Text style={styles.descriptionText}>10:15 2/2/2024</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationFlatListItem;
