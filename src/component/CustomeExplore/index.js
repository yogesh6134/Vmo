import React, {useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Images from '../../assets';
import styles from './styles';

export default function CustomeExplore() {
  const [data, setData] = useState([
    {
      name: 'Bruce Lee',
      icon: Images.male,
      time: '1 day ago',
      profession: 'Artist',
      img: Images.firstImage,
      like: 223,
      comment: 321,
      data: "The grand victory of @BJP4Assam in the #AssamMunicipalElection reflects the trust or all sections or the socletv In Adarniya PM Shri @narendramodi ji's vision ot baoka baath. babka Vikas Sabka Vishwas & Sabka Pravaas",
    },
    {
      name: 'john due',
      icon: Images.female,
      time: '1 day ago',
      profession: 'Artist',
      img: Images.srcondImage,
      like: 223,
      comment: 321,
      data: "The grand victory of @BJP4Assam in the #AssamMunicipalElection reflects the trust or all sections or the socletv In Adarniya PM Shri @narendramodi ji's vision ot baoka baath. babka Vikas Sabka Vishwas & Sabka Pravaas",
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
              <View style={styles.topLeftView}>
                <Text style={styles.professionText}>{item.profession}</Text>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
            </View>
          </View>
          <View>
            <Image source={Images.threedots} style={styles.threeDotIcon} />
          </View>
        </View>

        <Text style={styles.storyText}>{item.data}</Text>
        <Image source={item.img} style={styles.image} />

        <View style={styles.likesCommentView}>
          <Text style={styles.buttonText}>{item.like} likes</Text>
          <Text style={styles.buttonText}>{item.comment} comments</Text>
        </View>

        <View style={styles.bottomViewButton}>
          <View style={styles.buttonView}>
            <Image source={Images.like} style={{height: 30, width: 30}} />
            <Text style={styles.buttonText}>like</Text>
          </View>
          <View style={styles.buttonView}>
            <Image source={Images.comment} style={{height: 30, width: 30}} />
            <Text style={styles.buttonText}>comment</Text>
          </View>
          <View style={styles.buttonView}>
            <Image source={Images.share} style={{height: 30, width: 30}} />
            <Text style={styles.buttonText}>share</Text>
          </View>
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
