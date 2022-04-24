import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Images from '../../assets';

export default function YourFollower() {
  const [data, setData] = useState([
    {name: 'Akash Yadav', profession: 'Engineer', follower: '500 Followers'},
    {name: 'Akash Yadav', profession: 'Engineer', follower: '500 Followers'},
    {name: 'Akash Yadav', profession: 'Engineer', follower: '500 Followers'},
    {name: 'Akash Yadav', profession: 'Engineer', follower: '500 Followers'},
    {name: 'Akash Yadav', profession: 'Engineer', follower: '500 Followers'},
    {name: 'Akash Yadav', profession: 'Engineer', follower: '500 Followers'},
    {name: 'Akash Yadav', profession: 'Engineer', follower: '500 Followers'},
  ]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.box}>
        <View style={styles.leftSide}>
          <Image source={Images.man_person} style={styles.image} />
        </View>
        <View style={styles.rightSide}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.professionText}>{item.profession}</Text>
          <View style={styles.insideBoxRightSideView}>
            <Text style={styles.professionText}>{item.follower}</Text>
            <View style={styles.buttonRightSideView}>
              <TouchableOpacity style={styles.buttton}>
                <Text style={styles.buttonText}>Block</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
