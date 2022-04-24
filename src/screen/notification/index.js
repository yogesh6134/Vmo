import React, {useState} from 'react'
import styles from './styles'
import { FlatList, Text, View, Image } from 'react-native'
import Header from '../../component/Header'
import Images from '../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Notification({navigation}) {

  const [data, setData] = useState([
    {name: "John reacted on your photo", showTime: "1hr ago", icon: Images.person},
    {name: "John Commented on your photo", showTime: "2hr ago", icon: Images.person},
    {name: "John reacted on your photo", showTime: "1hr ago", icon: Images.person},
    {name: "John Commented on your photo", showTime: "3hr ago", icon: Images.person},
    {name: "John reacted on your photo", showTime: "1hr ago", icon: Images.person},
    {name: "John Commented on your photo", showTime: "2hr ago", icon: Images.person},
    {name: "John reacted on your photo", showTime: "1hr ago", icon: Images.person},
    {name: "John Commented on your photo", showTime: "3hr ago", icon: Images.person}

  ])

  const renderItem = ({item, index}) => {
 
    return(
      <View style={styles.notificationView}>
        <View style={styles.leftSideNotification}>
        <Image source={item.icon} style={styles.icon}/>
        <Text style={styles.nameText}>{item.name}</Text>
        </View>
        <View style={styles.rightSideView}>
          <Text style={styles.nameText}>{item.showTime}</Text>
          </View>
      
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header 
      heading="Notification"
      onBackPress={()=> navigation.goBack()}/> 

      <FlatList 
      data={data}
      renderItem={renderItem}
      keyExtractor={(_iten, index) => index.toString()}/>

    </View>
  )
}
