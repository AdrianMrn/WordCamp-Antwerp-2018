import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import ScheduleScreen from '../Containers/ScheduleScreen'
import TalkDetailScreen from '../Containers/TalkDetailScreen'
import AboutScreen from '../Containers/AboutScreen'
import styles from './Styles/NavigationStyles'

import ScheduleCarouselScreen from '../Containers/ScheduleCarouselScreen'

const ScheduleStack = StackNavigator({
  Home: { screen: ScheduleScreen },
  TalkDetail: { screen: TalkDetailScreen },
  ScheduleCarousel: { screen: ScheduleCarouselScreen },
}, {
  headerMode: 'none',
  initialRouteName: 'Home', // change this back to Home
  cardStyle: styles.card
})

const TabNav = TabNavigator({
  Schedule: { screen: ScheduleStack },
  About: { screen: AboutScreen }
}, {
  key: 'Schedule',
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
  headerMode: 'none',
  initialRouteName: 'Schedule',
  tabBarOptions: {
    style: styles.tabBar,
    labelStyle: styles.tabBarLabel,
    activeTintColor: 'white',
    inactiveTintColor: 'white'
  }
})

export default TabNav
