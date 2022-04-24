import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import Images from '../../assets';
import styles from './styles';

export default function CustomNearbyUserDetil() {
  const [data, setData] = useState([
    {
      name: 'Akash Yadav',
      icon: Images.male,
      distance: '1.1 km',
      follower: '500 Follower',
      profession: 'Engineer',
    },
    {
      name: 'Akash Yadav',
      icon: Images.male,
      distance: '1.1 km',
      follower: '500 Follower',
      profession: 'Engineer',
    },
    {
      name: 'Akash Yadav',
      icon: Images.male,
      distance: '1.1 km',
      follower: '500 Follower',
      profession: 'Engineer',
    },
    {
      name: 'Akash Yadav',
      icon: Images.male,
      distance: '1.1 km',
      follower: '500 Follower',
      profession: 'Engineer',
    },
  ]);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.mainView}>
        <View style={styles.topView}>
          <View style={styles.topLeftView}>
            <Image source={item.icon} style={styles.userImageIcon} />
            <View>
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.distance}>{item.distance}</Text>
              <View style={styles.engAndFollowerView}>
                <Text style={styles.timeText}>{item.profession}</Text>
                <Text style={styles.timeText}>{item.follower}</Text>
              </View>
            </View>
          </View>
          <>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Follow</Text>
            </TouchableOpacity>
          </>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
