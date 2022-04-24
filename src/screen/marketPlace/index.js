import * as React from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import HeaderWithMenuBar from '../../component/headerWithMenuBar';
import FindProduct from '../../component/findProduct';
import FindService from '../../component/findService';
import FindWork from '../../component/findWork';
import CustomSearchUserDetail from '../../component/customSearchUserDetail';
import Images from '../../assets';
import styles from './styles';

const FirstRoute = () => {
  return (
    <>
      <CustomSearchUserDetail />
      <FindProduct />
    </>
  );
};

const SecondRoute = () => {
  return (
    <>
      <CustomSearchUserDetail />
      <FindService />
    </>
  );
};

const ThirdRoute = () => {
  return (
    <>
      <CustomSearchUserDetail />
      <FindWork />
    </>
  );
};

const renderScene = SceneMap({
  findProducts: FirstRoute,
  findServices: SecondRoute,
  findWork: ThirdRoute,
});

export default function MarketPlace({navigation}) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'findProducts', title: 'Find Products'},
    {key: 'findServices', title: 'Find Services'},
    {key: 'findWork', title: 'Find Work'},
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
