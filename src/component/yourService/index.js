import {Image, Text, FlatList, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Images from '../../assets';
import styles from './styles';

export default function YourService() {
  const [data, setData] = useState([
    {
      title:
        'I am UlUA Designer and I will desiar everything you need as per vour exaci design admin panel website designs',
      price: 'INR 5000',
      img: Images.download,
    },
    {
      title:
        'I am UlUA Designer and I will desiar everything you need as per vour exaci design admin panel website designs',
      price: 'INR 5000',
      img: Images.download2,
    },
    {
      title:
        'I am UlUA Designer and I will desiar everything you need as per vour exaci design admin panel website designs',
      price: 'INR 5000',
      img: Images.download,
    },
    {
      title:
        'I am UlUA Designer and I will desiar everything you need as per vour exaci design admin panel website designs',
      price: 'INR 5000',
      img: Images.download2,
    },
  ]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.box}>
        <View style={styles.leftSide}>
          <Image source={item.img} style={styles.image} />
        </View>
        <View style={styles.rightSide}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.priceText}>{item.price}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
            }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.shareIconView}>
              <Image source={Images.delete} style={styles.shareIcon} />
            </TouchableOpacity>
          </View>
        </View>
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
