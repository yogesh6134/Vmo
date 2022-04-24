import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import Images from '../../assets';
import styles from './styles';

export default function CustomAllUserDetil() {
  const [data, setData] = useState([
    {
      name: 'Akash Yadav',
      icon: Images.male,
      follower: '500 Follower',
      profession: 'Engineer',
    },
    {
      name: 'Akash Yadav',
      icon: Images.male,
      follower: '500 Follower',
      profession: 'Engineer',
    },
    {
      name: 'Akash Yadav',
      icon: Images.male,
      follower: '500 Follower',
      profession: 'Engineer',
    },
    {
      name: 'Akash Yadav',
      icon: Images.male,
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
              <Text style={styles.timeText}>{item.follower}</Text>
              <Text style={styles.timeText}>{item.profession}</Text>
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