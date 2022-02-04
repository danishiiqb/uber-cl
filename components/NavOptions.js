import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import React from 'react';

import { useRef } from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const NavOptions = () => {
  const navigation = useNavigation();
  const data = useRef([
    {
      id: 12,
      title: 'Get a Ride',
      img: 'https://links.papareact.com/3pn',
      screen: 'MapScreen',
    },
    {
      id: 456,
      title: 'Order Food',
      img: 'https://links.papareact.com/28w',
      screen: 'EatScreen',
    },
  ]);
  return (
    <FlatList
      data={data.current}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(item.screen);
          }}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={{ uri: `${item.img}` }}
            ></Image>

            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name='arrowright'
              color='white'
              type='antdesign'
            ></Icon>
          </View>
        </TouchableOpacity>
      )}
    ></FlatList>
  );
};

export default NavOptions;
