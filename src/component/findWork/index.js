import {Image, Text, FlatList, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Images from '../../assets';
import styles from './styles';

export default function FindWork() {
  const [data, setData] = useState([
    {
      title:
        '1am loopskihosdkjbck sd kjs dkj kjds kjc kjids kcj kdsj 1am loopskihosdkjbck sd kjs dkj kjds kjc kjids kcj kdsj 1am loopskihosdkjbck sd kjs dkj kjds kjc kjids kcj kdsj',
      price: 'INR 5000',
      name: 'Anuraq Bashi',
      img: Images.download,
      profession: 'Engineer',
    },
    {
      title:
        'kcj dskj ckj dskj ckj dskj ckjds kjc kjsd kjc kjds kjc kids kcj dskj ckj dskj ckj dskj ckjds kjc kjsd kjc kjds kjc kids kcj dskj ckj dskj ckj dskj ckjds kjc kjsd kjc kjds kjc kids',
      price: 'INR 5000',
      name: 'Anuraq Bashi',
      img: Images.download2,
      profession: 'Engineer',
    },
    {
      title:
        'kci dski cki skia ck sak ck ask cki sakic kisa kic kisa kc kci dski cki skia ck sak ck ask cki sakic kisa kic kisa kc kci dski cki skia ck sak ck ask cki sakic kisa kic kisa kc',
      price: 'INR 5000',
      name: 'Anuraq Bashi',
      img: Images.download,
      profession: 'Engineer',
    },
    {
      title:
        'ska jckjj sakj ck sakc kisa jkci ksa ck sakjc kisa kcj ask ska jckjj sakj ck sakc kisa jkci ksa ck sakjc kisa kcj ask ska jckjj sakj ck sakc kisa jkci ksa ck sakjc kisa kcj ask',
      price: 'INR 5000',
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
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
          }}>
          <Image source={item.img} style={styles.image} />
          <View>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.titleText}>{item.profession}</Text>
          </View>
          <TouchableOpacity style={styles.shareIconView}>
            <Image source={Images.shareIcon} style={styles.shareIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Contact</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.borderStyle} />
        <Text style={styles.titleText}>{item.title}</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_item, index) => index.toString()}
      />
    </View>
  );
}
