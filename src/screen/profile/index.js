import React from 'react';
import {Text, View, Image, useWindowDimensions} from 'react-native';
import HeaderWithMenuBar from '../../component/headerWithMenuBar';
import styles from './styles';
import Images from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';

const FirstRoute = () => null;

const SecondRoute = () => null;

const ThirdRoute = () => null;

const ForthRoute = () => null;

const renderScene = SceneMap({
  feed: FirstRoute,
  services: SecondRoute,
  products: ThirdRoute,
  work: ForthRoute,
});

export default function Profile() {
  const navigation = useNavigation();
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'feed', title: 'Feed'},
    {key: 'services', title: 'Services'},
    {key: 'products', title: 'Products'},
    {key: 'work', title: 'Work'},
  ]);

  return (
    <View style={styles.container}>
      <HeaderWithMenuBar
        onPressMenu={() => navigation.navigate('settingScreen')}
        onPressHome={() => navigation.navigate('addMarketPlaces')}
        onNotification={() => navigation.navigate('notification')}
        firstIcon={Images.home}
        secondIcon={Images.notification}
        thirdIcon={Images.menu_lines}
        thirdiconstyle={styles.thirdicon}
        secondiconstyle={styles.secondicon}
        firsticonstyle={styles.firsticon}
      />
      <View style={styles.topBar}>
        <View style={styles.leftSideView}>
          <Image source={Images.man_person} style={styles.profilePicture} />
        </View>
        <View style={styles.rightSideView}>
          <View style={styles.userdetailView}>
            <Text style={styles.userNameText}>Levik Thomas</Text>
            <Text style={styles.mailText}>I Designer</Text>
          </View>
          <Text style={styles.mailText}>@Lthomas21</Text>
          <View style={styles.userdetailPostsView}>
            <View>
              <Text style={styles.noOfCount}>540</Text>
              <Text style={styles.mailText}>Post</Text>
            </View>
            <View>
              <Text style={styles.noOfCount}>159k</Text>
              <Text style={styles.mailText}>Followers</Text>
            </View>
            <View>
              <Text style={styles.noOfCount}>15k</Text>
              <Text style={styles.mailText}>Following</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.mailText}>
        This is my world and my world will never suffer just because of greedy
        people are trying to outsmart the workd beyond possibilities, so i will
        do whatever needed to stop them.
      </Text>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.activeButton}>
          <Text>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Message</Text>
        </TouchableOpacity>
      </View>
      <Image source={Images.shareIcon} style={styles.shareIcon} />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={props => (
          <TabBar
            {...props}
            renderLabel={({route, color}) => (
              <Text style={styles.tabTextStyle}>{route.title}</Text>
            )}
            style={styles.tabStyle}
          />
        )}
      />
    </View>
  );
}
