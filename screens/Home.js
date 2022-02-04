import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

const Home = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={{ padding: 6 }}>
        <Image
          style={{
            width: 100,
            height: 100,
            marginLeft: 4,
            resizeMode: 'contain',
          }}
          source={{ uri: 'https://links.papareact.com/gzs' }}
        ></Image>
        <NavOptions></NavOptions>
      </View>
    </SafeAreaView>
  );
};

export default Home;
