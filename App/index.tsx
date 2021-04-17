import React, {useRef, useState} from 'react';
import ReactNative, {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Platform,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import VideoPlayer from 'react-native-video-player';

const App = () => {
  const menuData = [
    {label: 'Home', key: 'home'},
    {label: 'Docs', key: 'docs'},
  ];
  const [state, setState] = useState({tab: menuData[0].key, selected: ''});
  const [playerState, setPlayerState] = useState({
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: true,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    playerWidth: Dimensions.get('window').width,
  });

  const youTubeRef = useRef();

  const selectTab = (tabKey) => {
    setState((s) => ({...s, tab: tabKey}));
  };

  const renderMenuItems = ({item}) => (
    <TouchableHighlight
      onPress={() => selectTab(item.key)}
      underlayColor="#a8dadc"
      style={styles.menu_item}>
      <Text style={styles.menu_item_text}>{item.label}</Text>
    </TouchableHighlight>
  );

  const renderContent = () => {
    return (
      <View>
        <VideoPlayer
          hideControlsOnStart={false}
          video={{
            uri:
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
          }}
          videoWidth={1600}
          videoHeight={900}
          thumbnail={{
            uri:
              'https://i.picsum.photos/id/803/200/300.jpg?hmac=v-3AsAcUOG4kCDsLMlWF9_3Xa2DTODGyKLggZNvReno',
          }}
        />
      </View>
    );
  };

  const renderSideBar = () => {
    if (state.selected) {
      return null;
    }
    return (
      <FlatList
        data={menuData}
        renderItem={renderMenuItems}
        keyExtractor={(item) => item.key}
        style={styles.sidebar}
      />
    );
  };

  return (
    <SafeAreaView>
      <View
        // contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        {renderSideBar()}
        <View style={styles.body}>
          <ScrollView>{renderContent()}</ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  menu_item: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    padding: 20,
    width: 200,
  },
  menu_item_text: {
    fontSize: 50,
  },
  sidebar: {
    height: 500,
    width: 200,
  },
  title: {
    fontSize: 50,
  },
  video: {
    height: 500,
    width: 500,
  },
});

export default App;
