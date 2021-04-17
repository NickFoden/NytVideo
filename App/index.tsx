import React from 'react';
import ReactNative, {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Platform,
  View,
  Text,
} from 'react-native';

const StatusBar = Platform.isTV ? View : ReactNative.StatusBar;

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Text>NYT Video </Text>
      </ScrollView>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
});

export default App;
