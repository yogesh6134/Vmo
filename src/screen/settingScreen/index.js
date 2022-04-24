import React, {useState} from 'react';
import styles from './styles';
import {FlatList, Text, View, Image, TouchableOpacity} from 'react-native';
import Header from '../../component/Header';
import Images from '../../assets';

export default function SettingScreen({navigation}) {
  const [data, setData] = useState([
    {
      name: 'Marketplace',
      icon: Images.marketPlace,
    },
    {
      name: 'Followers & Requests',
      icon: Images.marketPlace,
    },
    {
      name: 'General Settings',
      icon: Images.marketPlace,
    },
    {
      name: 'Blocked Users',
      icon: Images.marketPlace,
    },
    {
      name: 'Terms & Conditions',
      icon: Images.privacyPolicy,
    },
    {
      name: 'Privacy Policy',
      icon: Images.privacyPolicy,
    },
    {
      name: 'FAQ',
      icon: Images.privacyPolicy,
    },
    {
      name: 'Logout',
      icon: Images.logout,
    },
    {
      name: 'Delete account',
      icon: Images.delete,
    },
  ]);

  const onItemPress = index => {
    if (index == 0) {
      navigation.navigate('marketPlaceScreen');
    }
    if (index == 1) {
      navigation.navigate('friendRequest');
    }
    if (index == 2) {
      navigation.navigate('generalSetting');
    }
    if (index == 3) {
      navigation.navigate('blockUser');
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.notificationView}
        onPress={() => onItemPress(index)}>
        <View style={styles.leftSideNotification}>
          <Image source={item.icon} style={styles.icon} />
          <Text style={styles.nameText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header heading="Settings" onBackPress={() => navigation.goBack()} />

      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(_iten, index) => index.toString()}
      />
    </View>
  );
}
