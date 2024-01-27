import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { OnboardFlow } from 'react-native-onboard';
//Image Credits for image 2
//https://www.freepik.com/free-vector/watercolor-baby-milestone-card-template_34993652.htm#query=baby%20milestone&position=4&from_view=search&track=ais&uuid=3ed32dfa-6aee-4fb9-b094-761a8aba00b5

import HomeScreen from './screens/home';

const App = () => {
  return (
	<View style={{flex:1}}>
		<OnboardFlow
			pages={[
				{
				title: 'Welcome to Baby Milestone Tracker',
				subtitle: 'Easily track and create memorable moments of your childs growth',
				imageUri: Image.resolveAssetSource(require('./assets/onboard.png')).uri,
			
				},
				{
				title: 'Customize Your Baby Milestone',
				subtitle: 'Easily add, view, and edit milestones for your baby',
				imageUri: Image.resolveAssetSource(require('./assets/babyMT.png')).uri,
				}
			]}
			type={"fullscreen"}
		/>

		<HomeScreen />

	</View>
    
  );
};

export default App;