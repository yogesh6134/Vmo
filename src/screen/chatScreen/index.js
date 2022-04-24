import React, {useState} from 'react';
import styles from './styles';
import {FlatList, Text, View, Image, TouchableOpacity} from 'react-native';
import Header from '../../component/Header';
import Images from '../../assets';

export default function NotifiChatScreencation({navigation}) {
  const [data, setData] = useState([
    {
      name: 'Team young fashion',
      showTime: '1hr ago',
      icon: Images.person,
      text: 'Really thats great',
    },
    {
      name: 'Team young fashion',
      showTime: '2hr ago',
      icon: Images.person,
      text: 'Really thats great',
    },
    {
      name: 'Team young fashion',
      showTime: '1hr ago',
      icon: Images.person,
      text: 'Really thats great',
    },
    {
      name: 'Team young fashion',
      showTime: '3hr ago',
      icon: Images.person,
      text: 'Really thats great',
    },
    {
      name: 'Team young fashion',
      showTime: '1hr ago',
      icon: Images.person,
      text: 'Really thats great',
    },
    {
      name: 'Team young fashion',
      showTime: '2hr ago',
      icon: Images.person,
      text: 'Really thats great',
    },
    {
      name: 'Team young fashion',
      showTime: '1hr ago',
      icon: Images.person,
      text: 'Really thats great',
    },
    {
      name: 'Team young fashion',
      showTime: '3hr ago',
      icon: Images.person,
      text: 'Really thats great',
    },
  ]);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.notificationView}>
        <View style={styles.leftSideNotification}>
          <Image source={item.icon} style={styles.icon} />
          <View>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.timetext}>{item.text}</Text>
          </View>
        </View>
        <View style={styles.rightSideView}>
          <Text style={styles.timetext}>{item.showTime}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header heading="Messages" onBackPress={() => navigation.goBack()} />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_iten, index) => index.toString()}
      />
    </View>
  );
}
