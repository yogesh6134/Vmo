import * as React from 'react';
import {View, useWindowDimensions, Image} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import CustomeExplore from '../../component/CustomeExplore';
import HeaderWithMenuBar from '../../component/headerWithMenuBar';
import Images from '../../assets';
import styles from './styles';

const FirstRoute = () => <CustomeExplore />;

const SecondRoute = () => <CustomeExplore />;

const ThirdRoute = () => <CustomeExplore />;

const ForthRoute = () => <CustomeExplore />;

const renderScene = SceneMap({
  latest: FirstRoute,
  trending: SecondRoute,
  feed: ThirdRoute,
  nearby: ForthRoute,
});

export default function Dashboard({navigation}) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'latest', title: 'Latest'},
    {key: 'trending', title: 'Trending'},
    {key: 'feed', title: 'Feed'},
    {key: 'nearby', title: 'Nearby'},
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
      <Image source={Images.plusIcon} style={styles.plusIcon} />
    </>
  );
}
