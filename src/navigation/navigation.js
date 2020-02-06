import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from '../screens/splashScreen';
import LoginScreen from '../screens/loginScreen';
import RecoverPasswordScreen from '../screens/recoverPasswordScreen';
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
import MyReservationThirdScreen from '../screens/MyReservationScreens/thirdScreen';
import CheckoutScreen from '../screens/checkoutScreen';
import SearchGasStationScree from '../screens/searchGasStationScreen';
import AboutAppScreen from '../screens/aboutAppScreen';
import EstrelasScreen from '../screens/estrelasScreen';

//CarSharing Stack Screens
const CarSharingStackNavigator = createStackNavigator(
  {
    AlertScreen: {screen: AlertScreen},
    EditProfileScreen: {screen: EditProfileScreen},
    FazerReservaScreen: {screen: FazerReservaScreen},
    NovaReservaScreen: {screen: NovaReservaScreen},
    CarrosDisponiveisScreen: {screen: CarrosDisponiveisScreen},
    resumoCheckInScreen: {screen: resumoCheckInScreen},
    HistoricoDetailScreen: {screen: HistoricoDetailScreen},
    MyReservationSecondScreen: {screen: MyReservationSecondScreen},
    MyReservationThirdScreen: {screen: MyReservationThirdScreen},
    CheckoutScreen: {screen: CheckoutScreen},
    EstrelasScreen: {screen: EstrelasScreen},
  },
  {
    initialRouteName: 'FazerReservaScreen',
    headerMode: 'none',
  },
);

//CarSharing Drawer Screens
const CarSharingAppDrawer = createDrawerNavigator(
  {
    FazerReservaScreen: {screen: CarSharingStackNavigator},
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

//CarSharin Switch Screens
const CarSharingAuthNavigator = createStackNavigator(
  {
    SplashScreen: {screen: SplashScreen},
    LoginScreen: {screen: LoginScreen},
    RecoverPasswordScreen: {screen: RecoverPasswordScreen},
    CarSharingAppDrawer: {screen: CarSharingAppDrawer},
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);

const AppNavigator = createSwitchNavigator(
  {
    AuthScreens: {screen: CarSharingAuthNavigator},
  },
  {
    initialRouteName: 'AuthScreens',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
