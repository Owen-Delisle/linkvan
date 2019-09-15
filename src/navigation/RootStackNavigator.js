import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {AppStack} from './NavigationLayout';

const AppNavigator = createSwitchNavigator(
  {
    App: AppStack,
  },
  {
    initialRouteName: 'App',
  },
);

export default createAppContainer(AppNavigator);
