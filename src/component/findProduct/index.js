import {Image, Text, FlatList, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Images from '../../assets';
import styles from './styles';

export default function FindProduct() {
  const [data, setData] = useState([
    {
      name: 'This is a testing product This is a testing product This is a testing product',
      price: 'INR 5000',
      img: Images.feet,
    },
    {
      name: 'This is a testing product This is a testing product This is a testing product',

      price: 'INR 5000',
      img: Images.feet,
    },
    {
      name: 'This is a testing product This is a testing product This is a testing product',
      price: 'INR 5000',
      img: Images.feet,
    },
    {
      name: 'This is a testing product This is a testing product This is a testing product',
      price: 'INR 5000',
      img: Images.feet,
    },
  ]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.box}>
        <Image source={item.img} style={styles.Image} />
        <Text style={styles.headingText}>{item.name}</Text>
        <Text style={styles.priceText}>{item.price}</Text>
        <TouchableOpacity style={styles.shareIconView}>
          <Image source={Images.shareIcon} style={styles.shareIcon} />
        </TouchableOpacity>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.detailButton}>
            <Text>View Detail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageButton}>
            <Text>Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        style={{alignSelf: 'center'}}
        renderItem={renderItem}
        keyExtractor={(_item, index) => index.toString()}
      />
    </View>
  );
}
