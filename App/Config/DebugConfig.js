export default {
  showDevScreens: __DEV__,
  useFixtures: true,
  yellowBox: __DEV__,
  includeExamples: __DEV__,
  useReactotron: __DEV__,
  codepushStaging: false,
  hotwireDate: false,     // force today to be the day of the conf
  hotwirePush: false,     // force push notifications to happen in 5 seconds
  getAPI: false             // should app hit API server for data? (Turn off if we're using codepush)
}
