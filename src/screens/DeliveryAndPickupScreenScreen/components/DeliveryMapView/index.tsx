import React from 'react'

const DeliveryMapView = () => {
  return (
    <MapView
    onPress={handleMakerLocation}
    style={{
      width: widthScreen,
      height: '100%',
    }}
    showsUserLocation
    showsMyLocationButton
    provider={PROVIDER_GOOGLE}
    region={{
      latitude: coordinate?.latitude || 10.770744,
      longitude: coordinate?.longitude || 106.706093,
      latitudeDelta: 0.05,
      longitudeDelta: 0.025,
    }}
  >
    {coordinate?.latitude && coordinate?.longitude && <Marker draggable coordinate={coordinate} />}
  </MapView>
  )
}

export default DeliveryMapView