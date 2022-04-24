import * as React from 'react';
import {useWindowDimensions, Text, View} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import HeaderWithMenuBar from '../../component/headerWithMenuBar';
import CustomAllUserDetil from '../../component/customAllUserDetail';
import CustomNearbyUserDetil from '../../component/CustomNearbyUserDetil';
import CustomSearchUserDetail from '../../component/customSearchUserDetail';
import Images from '../../assets';
import styles from './styles';

const FirstRoute = () => {
  return (
    <>
      <CustomSearchUserDetail />
      <CustomAllUserDetil />
    </>
  );
};

const SecondRoute = () => <CustomNearbyUserDetil />;

const renderScene = SceneMap({
  allUsers: FirstRoute,
  nearbyUsers: SecondRoute,
});

export default function PeopleScreen({navigation}) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'allUsers', title: 'All Users'},
    {key: 'nearbyUsers', title: 'Nearby Users'},
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
