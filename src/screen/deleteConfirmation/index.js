import {View, Text, useWindowDimensions} from 'react-native';
import React from 'react';
import styles from './styles';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import HeaderWithMenuBar from '../../component/headerWithMenuBar';
import Images from '../../assets';
import Button from './Button';
import Color from '../../themes/Colors';
import DeleteWithraw from '../../component/deleteWithraw';
import DeleteContact from '../../component/deleteContact';
import DeleteService from '../../component/deleteService';

const FirstRoute = () => {
  return (
    <>
      <Button text="Add vour product" color={Color.blue} />
      <DeleteContact />
    </>
  );
};
const SecondRoute = () => {
  return (
    <>
      <Button text="Add vour Service" color={Color.blue} />
      <DeleteService />
    </>
  );
};

const ThirdRoute = () => {
  return (
    <>
      <Button text="Add vour Withdraw" color={Color.blue} />
      <DeleteWithraw />
    </>
  );
};

const renderScene = SceneMap({
  contacts: FirstRoute,
  services: SecondRoute,
  withdraw: ThirdRoute,
});

export default function DeleteConfirmation({navigation}) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'contacts', title: 'Contacts'},
    {key: 'services', title: 'Services'},
    {key: 'withdraw', title: 'Withdraw'},
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
        renderTabBar={props => (
          <TabBar
            {...props}
            renderLabel={({route, color}) => (
              <Text style={styles.tabTextStyle}>{route.title}</Text>
            )}
            indicatorStyle={styles.indicator}
            tabStyle={styles.tabStyle}
            // style={styles.tab}
          />
        )}
      />
    </>
  );
}
