import * as React from 'react';
import {useWindowDimensions, View, Text, TouchableOpacity} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Images from '../../assets';
import HeaderWithMenuBar from '../../component/headerWithMenuBar';

import YourProduct from '../../component/yourProduct';
import YourService from '../../component/yourService';
import YourWork from '../../component/yourWork';
import Color from '../../themes/Colors';
import {SPACING, WIDTH} from '../../themes/Constants';
import Button from './Button';
import styles from './styles';

const FirstRoute = () => {
  return (
    <>
      <Button text="Add vour product" color={Color.blue} />
      <YourProduct />
    </>
  );
};

const SecondRoute = () => {
  return (
    <>
      <Button text="Add vour service" color={Color.blue} />
      <YourService />
    </>
  );
};

const ThirdRoute = () => {
  return (
    <>
      <Button text="Add vour work" color={Color.black} />
      <YourWork />
    </>
  );
};

const renderScene = SceneMap({
  yourProducts: FirstRoute,
  yourServices: SecondRoute,
  yourWork: ThirdRoute,
});

export default function AddMarketPlace({navigation}) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'yourProducts', title: 'Your Products'},
    {key: 'yourServices', title: 'Your Services'},
    {key: 'yourWork', title: 'Your Work'},
  ]);

  return (
    <>
      <HeaderWithMenuBar
        onPressMenu={() => navigation.navigate('settingScreen')}
        onPressHome={() => navigation.navigate('addMarketPlaces')}
        onNotification={() => navigation.navigate('notification')}
        firstIcon={Images.messenger}
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
