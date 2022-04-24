import {useWindowDimensions} from 'react-native';
import React from 'react';
import HeaderWithMenuBar from '../../component/headerWithMenuBar';
import {TabView, SceneMap} from 'react-native-tab-view';
import PendingRequest from '../../component/pendingRequest';
import YourFollower from '../../component/followers';
import Images from '../../assets';
import styles from './styles';

const FirstRoute = () => <PendingRequest />;

const SecondRoute = () => <YourFollower />;

const renderScene = SceneMap({
  pendingReq: FirstRoute,
  trending: SecondRoute,
});

export default function FriendRequest({navigation}) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'pendingReq', title: 'Pending Requests'},
    {key: 'trending', title: 'Your Followers'},
  ]);
  return (
    <>
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
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </>
  );
}
