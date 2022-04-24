import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  FlatList
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Images from '../../assets';
import Button from '../../component/Button';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([
    {
      id: 0,
      name: "Find Nearby People",
      isShow: false
    },
    {
      id: 1,
      name: "See Who Is Interested IN You",
      isShow: false
    },
    {
      id: 2,
      name: "Chat/Date Your Way",
      isShow: false
    },
    {
      id: 3,
      name: "No Restrictions. No Charges",
      isShow: false
    }
  ])


  const _signIn = () => {
    navigation.navigate("profile")
  };
 

const renderItem = ({item, index}) => {

  const onPressItem = () => {
    setData([...data], data[index].isShow = !data[index].isShow);

  }
  return (
    <View style={styles.box}>
      {item.isShow ?
        <TouchableOpacity onPress={onPressItem}>
              <Image source={Images.check} style={styles.uncheckIcon} />
            </TouchableOpacity>
      :
       <TouchableOpacity onPress={onPressItem}>
              <Image source={Images.unCheck} style={styles.uncheckIcon} />
            </TouchableOpacity>
}
       <Text style={styles.boxText}>{item.name}</Text>
  </View>
  )
}


  return (
    <SafeAreaView style={styles.container}>
     
      <FlatList 
      data = {data}
      renderItem={renderItem}
      keyExtractor={(_item , index) => index.toString()}
      
      />
      <View style={styles.bottomView}>
        <Text style={styles.instructions}>By clicking Log in, you agree with out terms. Learn how we process your data in our privacy policy and cookies policy</Text>
        <Button
          button={styles.button}
          buttonText="LOG IN WITH GOOGLE"
          buttonTextStyle={styles.buttonText}
          onButtonPress={_signIn}
        />
      </View>
    </SafeAreaView>
  );
}


export default HomeScreen;

