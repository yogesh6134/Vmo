import {Image, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Images from '../../assets';
import styles from './styles';
import HeaderWithMenuBar from '../../component/headerWithMenuBar';

export default function EditWork({route, navigation}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataVal = route.params.data;
    setData(dataVal);
  }, []);

  const [user, setUser] = useState([
    {
      name: 'Akash Yadav',
      profession: 'Engineer',
      img: Images.user,
    },
    {name: 'Akash Yadav', profession: 'Engineer', img: Images.user},
    {name: 'Akash Yadav', profession: 'Engineer', img: Images.user},
    {name: 'Akash Yadav', profession: 'Engineer', img: Images.user},
    {name: 'Akash Yadav', profession: 'Engineer', img: Images.user},
    {name: 'Akash Yadav', profession: 'Engineer', img: Images.user},
    {name: 'Akash Yadav', profession: 'Engineer', img: Images.user},
  ]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.userDetailbox}>
        <View style={styles.userleftSideView}>
          <Image source={item.img} style={styles.icon} />
          <View>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.titleText}>{item.profession}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.userRightSideView}
          //   onPress={() => navigation.navigate('deleteConfirmation')}
        >
          <Text style={styles.profileButtonText}>View Profile</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <HeaderWithMenuBar
        onPressMenu={() => navigation.navigate('settingScreen')}
        onPressHome={() => navigation.navigate('addMarketPlaces')}
        onNotification={() => navigation.navigate('notification')}
        firstIcon={Images.messenger}
        secondIcon={Images.notification}
        thirdIcon={Images.menu_lines}
        thirdiconstyle={styles.thirdicon}
        secondiconstyle={styles.secondicon}
        firsticonstyle={styles.firsticon}
      />
      {data && (
        <View style={styles.box}>
          <View
            style={{
              flexDirection: 'row',
              aligndatas: 'center',
            }}>
            <Image source={data.img} style={styles.image} />
            <View>
              <Text style={styles.nameText}>{data.name}</Text>
              <Text style={styles.titleText}>{data.profession}</Text>
            </View>
          </View>
          <View style={styles.borderStyle} />
          <Text style={styles.titleText}>{data.title}</Text>
        </View>
      )}

      <FlatList
        data={user}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
