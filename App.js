import React, {
  useEffect,
  useCallback,
  useState,
  useRef,
  useLayoutEffect,
} from 'react';
import {LogBox, StyleSheet, View, Image} from 'react-native';
import {Provider} from 'react-redux';
import {useFonts} from 'expo-font';
import {Asset} from 'expo-asset';
import {PortalProvider} from '@gorhom/portal';
import {StatusBar} from 'expo-status-bar';
import {PersistGate} from 'redux-persist/integration/react';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';

import StackCenter from './src/navigation/StackCenter';
import Color from '@theme/colors';
import {store, persistor} from './store';
import {configureDesignSystem} from '@theme/';
import {getPushNoticationToken, logEvent} from '@utils/helper';
import {Screens} from '@constants/';
import {GROUP_ID, SOURCE} from '@constants/amplitude';
import {Images} from './assets';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const cacheImages = images => {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const notificationListener = useRef();
  const responseListener = useRef();
  const navigationRef = useRef();

  const navigateToChat = data => {
    navigationRef.current?.navigate(Screens.CHAT_SCREEN, {
      chatType: data?.chatType,
      chatId: data?.chatId,
      members: data?.members,
      friendName: data?.friendName,
      image: data?.image,
      background: data?.background,
    });
  };

  useLayoutEffect(() => {
    // getPushNoticationToken().then((token) => setExpoPushToken(token));
    notificationListener.current =
      Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener(response => {
        const data = response?.notification?.request?.content?.data;
        if (!data?.chatType || !data?.chatId) {
          navigationRef.current?.navigate(Screens.HOME_SCREEN);
        }

        if (data?.chatType === 'group') {
          navigateToChat(data);
          logEvent('Group Chat - Open', {
            [GROUP_ID]: data?.chatId,
            [SOURCE]: 'Notification',
          });
        } else if (data?.chatType === 'oneOnOne') {
          navigateToChat(data);
        }
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current,
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  LogBox.ignoreLogs([
    'Setting a timer',
    'AsyncStorage has been',
    'Warning: Failed prop type: expectedClass is not',
    "Can't perform a React state",
    'Constants.platform.ios.model has',
  ]);

  const startApp = useCallback(() => {
    configureDesignSystem();
  }, []);

  useEffect(() => {
    startApp();
  }, [startApp]);

  const [loaded] = useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'AvenirLTStd-Black': require('./assets/fonts/AvenirLTStd-Black.ttf'),
    'AvenirLTStd-Book': require('./assets/fonts/AvenirLTStd-Book.ttf'),
    'SF-Pro-Display-Bold': require('./assets/fonts/SF-Pro-Display-Bold.ttf'),
    'SFProText-Regular': require('./assets/fonts/SFProText-Regular.ttf'),
  });

  const loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      Images.splash,
      Images.splash1,
      Images.splash2,
      Images.splash3,
      Images.background,
      Images.why1_selected,
      Images.why1_unselected,
      Images.why2_selected,
      Images.why2_unselected,
      Images.why3_selected,
      Images.why3_unselected,
      Images.check_circle,
    ]);

    await Promise.all([...imageAssets]);
  };

  if (!loaded || !isReady) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PortalProvider>
          <StatusBar style="dark" />
          <View style={styles.container}>
            <StackCenter navigationRef={navigationRef} />
          </View>
        </PortalProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
});
