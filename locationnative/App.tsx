import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Geolocation, {GeolocationResponse} from 'react-native-geolocation';

const App = () => {
  const [location, setLocation] = useState<GeolocationResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position: GeolocationResponse) => setLocation(position),
      (error: Error) => setError(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return (
    <View>
      {location && (
        <Text>
          Your current location is: {location.coords.latitude},{' '}
          {location.coords.longitude}
        </Text>
      )}
      {error && <Text>{error}</Text>}
    </View>
  );
};

export default App;
