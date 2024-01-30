import { View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './styles';

const StoreMaps = () => {
  return (
    <View>
      <MapView
        style={styles.mapView}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 10.770744,
          longitude: 106.706093,
          latitudeDelta: 0.05,
          longitudeDelta: 0.025,
        }}
      >
        <Marker coordinate={{ latitude: 10.770744, longitude: 106.706093 }} title={'Túc Tắc Tea'} />
        <Marker coordinate={{ latitude: 10.815288, longitude: 106.661129 }} title={'Túc Tắc Tea'} />
      </MapView>
    </View>
  );
};

export default StoreMaps;
