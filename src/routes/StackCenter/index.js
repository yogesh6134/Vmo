import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ExampleScreen from "@screens/ExampleScreen";
import LandingScreen from "@screens/LandingScreen";
import LoginScreen from "@screens/LoginScreen";
import NameScreen from "@screens/OnboardingScreen/NameScreen";
import DobScreen from "@screens/OnboardingScreen/DobScreen";
import IdentityScreen from "@screens/OnboardingScreen/IdentityScreen";
import ProfessionScreen from "@screens/OnboardingScreen/ProfessionScreen";
import LifeScreen from "@screens/OnboardingScreen/LifeScreen";
import InterestScreen from "@screens/OnboardingScreen/InterestScreen";
import LocationPermission from "@screens/OnboardingScreen/LocationPermissionScreen";
import NotificationPermissionScreen from "@screens/OnboardingScreen/NotificationPermissionScreen";
import BioScreen from "@screens/OnboardingScreen/BioScreen";
import PhotoScreen from "@screens/OnboardingScreen/PhotoScreen";
import HomeScreen from "@screens/HomeScreen";
import ChatScreen from "@screens/ChatScreen";
import ProfileScreen from "@screens/ProfileScreen";
import SplashScreen from "@screens/SplashScreen";
import HighLightScreen from "@screens/OnboardingScreen/HighLightScreen";
import TermsConditionScreen from "@screens/TermsConditionScreen";
import PrivacyPolicyScreen from "@screens/PrivacyPolicyScreen";
import AccountLegalScreen from "@screens/AccountLegalScreen";
import { Screens } from "../../constants";

const Stack = createStackNavigator();

const StackCenter = ({ navigationRef }) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={Screens.SPLASH_SCREEN}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={Screens.EXAMPLE_SCREEN} component={ExampleScreen} />
        <Stack.Screen name={Screens.SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={Screens.LANDING_SCREEN} component={LandingScreen} />
        <Stack.Screen name={Screens.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={Screens.NAME_SCREEN} component={NameScreen} />
        <Stack.Screen name={Screens.DOB_SCREEN} component={DobScreen} />
        <Stack.Screen
          name={Screens.IDENTITY_SCREEN}
          component={IdentityScreen}
        />
        <Stack.Screen
          name={Screens.PROFESSION_SCREEN}
          component={ProfessionScreen}
        />
        <Stack.Screen name={Screens.LIFE_SCREEN} component={LifeScreen} />
        <Stack.Screen
          name={Screens.INTEREST_SCREEN}
          component={InterestScreen}
        />
        <Stack.Screen
          name={Screens.LOCATION_PERMISSION_SCREEN}
          component={LocationPermission}
        />
        <Stack.Screen
          name={Screens.NOTIFICATION_PERMISSION_SCREEN}
          component={NotificationPermissionScreen}
        />
        <Stack.Screen name={Screens.BIO_SCREEN} component={BioScreen} />
        <Stack.Screen name={Screens.PHOTO_SCREEN} component={PhotoScreen} />
        <Stack.Screen name={Screens.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={Screens.CHAT_SCREEN} component={ChatScreen} />
        <Stack.Screen name={Screens.PROFILE_SCREEN} component={ProfileScreen} />
        <Stack.Screen
          name={Screens.HIGH_LIGHT_SCREEN}
          component={HighLightScreen}
        />
        <Stack.Screen
          name={Screens.TERMS_CONDITION_SCREEN}
          component={TermsConditionScreen}
        />
        <Stack.Screen
          name={Screens.PRIVACY_POLICY_SCREEN}
          component={PrivacyPolicyScreen}
        />
        <Stack.Screen
          name={Screens.ACCOUNT_LEGAL_SCREEN}
          component={AccountLegalScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackCenter;
