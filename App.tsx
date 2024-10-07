import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.container}>The Menu</Text>
      </View>

    <View style={styles.listView}>

    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginVertical:1,
    backgroundColor: 'white',
  },
  headingContainer:{
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
    width: '100%'
  },
  trackerName:{
    fontSize: 34,
    fontWeight: 'bold',
  },
  listView:{
    marginTop: -60,
    width: '100%',
    height: 550,
    borderRadius:10,
    backgroundColor: 'purple',
  },
  userImageView:{
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginVertical: 5,
    backgroundColor:'',
  },
});
