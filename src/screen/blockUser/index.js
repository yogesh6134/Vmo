import React, {useState} from 'react'
import styles from './styles'
import { FlatList, Text, View, Image } from 'react-native'
import Header from '../../component/Header'
import Images from '../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function BlockUser({navigation}) {

  const [data, setData] = useState([
    {name: "@larathomas", isShow: false, icon: Images.person},
    {name: "@larathomas", isShow: false, icon: Images.person},
    {name: "@larathomas", isShow: false, icon: Images.person},
    {name: "@larathomas", isShow: false, icon: Images.person},
    {name: "@larathomas", isShow: false, icon: Images.person},
    {name: "@larathomas", isShow: false, icon: Images.person},
    {name: "@larathomas", isShow: false, icon: Images.person},
    {name: "@larathomas", isShow: false, icon: Images.person}

  ])

  const renderItem = ({item, index}) => {
    const onPressButton = () => {
      setData([...data], data[index].isShow = !data[index].isShow);
    }
    return(
      <View style={styles.notificationView}>
        <View style={styles.leftSideNotification}>
        <Image source={item.icon} style={styles.icon}/>
        <Text style={styles.nameText}>{item.name}</Text>
        </View>
        {item.isShow ?
        <View style={styles.rightSideView}>
        <TouchableOpacity onPress={onPressButton} style={styles.button}>
          <Text style={styles.nameText}>Lock</Text>
        </TouchableOpacity>
        </View>
        :
        <View style={styles.rightSideView}>
        <TouchableOpacity onPress={onPressButton} style={styles.button}>
        <Text style={styles.nameText}>Unlock</Text>
      </TouchableOpacity>
      </View>
      }
    
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header 
      heading="Block users"
      onBackPress={()=> navigation.goBack()}/> 

      <FlatList 
      data={data}
      renderItem={renderItem}
      keyExtractor={(_iten, index) => index.toString()}/>

    </View>
  )
}
