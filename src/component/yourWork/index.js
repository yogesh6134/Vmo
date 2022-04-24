import {Image, Text, FlatList, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Images from '../../assets';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

export default function YourWork() {
  const navigation = useNavigation();
  const [data, setData] = useState([
    {
      title:
        '1am loopskihosdkjbck sd kjs dkj kjds kjc kjids kcj kdsj 1am loopskihosdkjbck sd kjs dkj kjds kjc kjids kcj kdsj 1am loopskihosdkjbck sd kjs dkj kjds kjc kjids kcj kdsj',
      appliedUser: '10 | All Applied Users',
      name: 'Anuraq Bashi',
      img: Images.download,
      profession: 'Engineer',
    },
    {
      title:
        'kcj dskj ckj dskj ckj dskj ckjds kjc kjsd kjc kjds kjc kids kcj dskj ckj dskj ckj dskj ckjds kjc kjsd kjc kjds kjc kids kcj dskj ckj dskj ckj dskj ckjds kjc kjsd kjc kjds kjc kids',
      appliedUser: '10 | All Applied Users',
      name: 'Anuraq Bashi',
      img: Images.download2,
      profession: 'Engineer',
    },
    {
      title:
        'kci dski cki skia ck sak ck ask cki sakic kisa kic kisa kc kci dski cki skia ck sak ck ask cki sakic kisa kic kisa kc kci dski cki skia ck sak ck ask cki sakic kisa kic kisa kc',
      appliedUser: '10 | All Applied Users',
      name: 'Anuraq Bashi',
      img: Images.download,
      profession: 'Engineer',
    },
    {
      title:
        'ska jckjj sakj ck sakc kisa jkci ksa ck sakjc kisa kcj ask ska jckjj sakj ck sakc kisa jkci ksa ck sakjc kisa kcj ask ska jckjj sakj ck sakc kisa jkci ksa ck sakjc kisa kcj ask',
      appliedUser: '10 | All Applied Users',
      name: 'Anuraq Bashi',
      img: Images.download2,
      profession: 'Engineer',
    },
  ]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.box}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={item.img} style={styles.image} />
          <View>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.titleText}>{item.profession}</Text>
          </View>
        </View>
        <View style={styles.borderStyle} />
        <Text style={styles.titleText}>{item.title}</Text>

        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.appliedButton}>
            <Text style={styles.buttonText}>{item.appliedUser}</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => navigation.navigate('editWork', {data: item})}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.shareIconView}
              onPress={() => navigation.navigate('deleteConfirmation')}>
              <Image source={Images.delete} style={styles.shareIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_item, index) => index.toString()}
    />
  );
}
