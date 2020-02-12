import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

//commonScreens
import LoginScreen from './loginScreen';
import RecoverPasswordScreen from './recoverPasswordScreen';
import MainScreen from './mainScreen';

//firstProfileScreens
import DrawerScreen from '../screens/drawerScreen';
import AlertScreen from '../screens/alertScreen';
import EditProfileScreen from '../screens/editProfileScreen';
import FazerReservaScreen from '../screens/fazerReservaScreen';
import NovaReservaScreen from '../screens/novaReservaScreen';
import CarrosDisponiveisScreen from '../screens/carrosDisponiveisScreen';
import resumoCheckInScreen from '../screens/resumoCheckInScreen';
import HistoricScreen from '../screens/historicScreen';
import HistoricoDetailScreen from '../screens/historicoDetalhesScreen';
import MyReservationFirstScreen from '../screens/MyReservationScreens/firstScreen';
import MyReservationSecondScreen from '../screens/MyReservationScreens/secondScreen';
import CheckoutScreen from '../screens/checkoutScreen';
import SearchGasStationScree from '../screens/searchGasStationScreen';
import AboutAppScreen from '../screens/aboutAppScreen';
import EstrelasScreen from '../screens/estrelasScreen';

//secondProfileScreens
import SecondDrawerScreen from '../secondScreens/drawerScreen';
import AuthorizerCheckInScreen from '../secondScreens/autorizarCheckIn';
import ValidacaoDeCheckInScreen from '../secondScreens/validacaoDeCheckInScreen';
import SecondAboutAppScreen from '../secondScreens/secondAboutAppScreen';
import SecondEditProfileScreen from '../secondScreens/secondEditProfileScreen';

//thirdProfileScreens
import ThirdProfileDrawerScreen from '../thirdProfileScreens/thirdProfileDrawerScreen';
import ThirdProfileAuthorizerCheckInScreen from '../thirdProfileScreens/thirdProfileAutorizarCheckInScreen';
import ThirdProfileValidacaoDeCheckInScreen from '../thirdProfileScreens/thirdProfileValidacaoDeCheckInScreen';
import ThirdProfileAboutAppScreen from '../thirdProfileScreens/thirdProfileAboutAppScreen';
import ThirdEditProfileScreen from '../thirdProfileScreens/thirdEditProfileScreen';
import ThirdProfileAlertScreen from '../thirdProfileScreens/thirdProfileAlertScreen';

//CarSharing First Profile Stack Screens
const CarSharingFirstStackNavigator = createStackNavigator(
  {
    AlertScreen: {screen: AlertScreen},
    EditProfileScreen: {screen: EditProfileScreen},
    FazerReservaScreen: {screen: FazerReservaScreen},
    NovaReservaScreen: {screen: NovaReservaScreen},
    CarrosDisponiveisScreen: {screen: CarrosDisponiveisScreen},
    resumoCheckInScreen: {screen: resumoCheckInScreen},
    HistoricoDetailScreen: {screen: HistoricoDetailScreen},
    MyReservationSecondScreen: {screen: MyReservationSecondScreen},
    CheckoutScreen: {screen: CheckoutScreen},
    EstrelasScreen: {screen: EstrelasScreen},
  },
  {
    initialRouteName: 'FazerReservaScreen',
    headerMode: 'none',
  },
);

//CarSharing First Profile Drawer Screens
const CarSharingFirstAppDrawer = createDrawerNavigator(
  {
    FazerReservaScreen: {screen: CarSharingFirstStackNavigator},
    MyReservationFirstScreen: {screen: MyReservationFirstScreen},
    HistoricScreen: {screen: HistoricScreen},
    AlertScreen: {screen: AlertScreen},
    SearchGasStationScree: {screen: SearchGasStationScree},
    AboutAppScreen: {screen: AboutAppScreen},
    EditProfileScreen: {screen: EditProfileScreen},
  },
  {
    contentComponent: DrawerScreen,
    initialRouteName: 'FazerReservaScreen',
    headerMode: 'none',
  },
);

//CarSharing Second Profile Stack Screens
const CarSharingSecondStackNavigator = createStackNavigator(
  {
    AuthorizerCheckInScreen: {screen: AuthorizerCheckInScreen},
    ValidacaoDeCheckInScreen: {screen: ValidacaoDeCheckInScreen},
    SecondEditProfileScreen: {screen: SecondEditProfileScreen},
  },
  {
    initialRouteName: 'AuthorizerCheckInScreen',
    headerMode: 'none',
  },
);

//CarSharing Second Profile Drawer Screens
const CarSharingSecondAppDrawer = createDrawerNavigator(
  {
    AuthorizerCheckInScreen: {screen: CarSharingSecondStackNavigator},
    SecondAboutAppScreen: {screen: SecondAboutAppScreen},
    SecondEditProfileScreen: {screen: SecondEditProfileScreen},
  },
  {
    contentComponent: SecondDrawerScreen,
    initialRouteName: 'AuthorizerCheckInScreen',
    headerMode: 'none',
  },
);

//CarSharing Third Profile Stack Screens
const CarSharingThirdStackNavigator = createStackNavigator(
  {
    ThirdProfileAuthorizerCheckInScreen: {
      screen: ThirdProfileAuthorizerCheckInScreen,
    },
    ThirdProfileValidacaoDeCheckInScreen: {
      screen: ThirdProfileValidacaoDeCheckInScreen,
    },
    ThirdEditProfileScreen: {screen: ThirdEditProfileScreen},
  },
  {
    initialRouteName: 'ThirdProfileAuthorizerCheckInScreen',
    headerMode: 'none',
  },
);

//CarSharing Third Profile Drawer Screens
const CarSharingThirdAppDrawer = createDrawerNavigator(
  {
    ThirdProfileAuthorizerCheckInScreen: {
      screen: CarSharingThirdStackNavigator,
    },
    ThirdProfileAboutAppScreen: {screen: ThirdProfileAboutAppScreen},
    ThirdEditProfileScreen: {screen: ThirdEditProfileScreen},
    ThirdProfileAlertScreen: {screen: ThirdProfileAlertScreen},
  },
  {
    contentComponent: ThirdProfileDrawerScreen,
    initialRouteName: 'ThirdProfileAuthorizerCheckInScreen',
    headerMode: 'none',
  },
);

const AppNavigator = createSwitchNavigator(
  {
    LoginScreen: {screen: LoginScreen},
    RecoverPasswordScreen: {screen: RecoverPasswordScreen},
    MainScreen: {screen: MainScreen},
    FirstProfileScreens: {screen: CarSharingFirstAppDrawer},
    SecondProfileScreens: {screen: CarSharingSecondAppDrawer},
    ThirdProfileScreens: {screen: CarSharingThirdAppDrawer},
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
