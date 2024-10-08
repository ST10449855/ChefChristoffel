import { StatusBar } from 'expo-status-bar';
import {FlatList, SafeAreaView, StyleSheet, Text,TextInput,TouchableHighlight, View } from 'react-native';
import {Picker} from "@react-native-picker/picker";
import { WorkoutDetail } from './type';
import { useState } from 'react';

export default function App() {

  const [workOutName, setWorkOutName] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [excerciseType, setExerciseType] = useState<string>('');
  const [calories, setCalories] = useState<string>('');

  const[workouts, setWorkouts] = useState<WorkoutDetail[]>([]);

  const[totalCalories, setTotalCalories] = useState<number>(0);
  const totalWorkOuts = workouts.length;

  const ExcerciseType = ['Çardio','Strength','Felxibilty','Balance','HIIT']

  const handleSubmit = () => {

  const newworkout: WorkoutDetail = {
    workout_Name : workOutName,
    duration: parseInt(duration),
    excercise_Type:excerciseType,
    calories: parseInt(calories)
  };
    setWorkouts([...workouts, newworkout]);
    setTotalCalories(totalCalories + newworkout.calories);
    setWorkOutName('');
    setDuration('');
    setExerciseType('');
    setCalories('');

}


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.trackerName}>The Menu</Text>
      </View>
      
      <View style={styles.orderContainer}>
        <Text style={styles.orderHeading}>TODAYS ORDER</Text>
        <View>
          <Text style={styles.orderText}>Total workouts: {totalWorkOuts}</Text>
          <Text style={styles.orderText}>Total calories: {totalCalories}</Text>
        </View>

      </View>
    

    <View style={styles.listView}>
      <FlatList style = {styles.listStyle}
      data={workouts}
      keyExtractor={(item,index) => index.toString()}
      renderItem={({item}) =>(
        <View style={styles.itemContainer}>
          <Text style={styles.detailText}>workout Name: {item.workout_Name}</Text>
          <Text style={styles.detailText}>Duration: {item.duration}</Text>
          <Text style={styles.detailText}>Workout Type: {item.excercise_Type}</Text>
          <Text style={styles.detailText}> Calorise Burnt: {item.calories}</Text>
        </View>
      )}>

      </FlatList>
    </View>

    <View style={styles.userInputView}>
      <TextInput style={styles.input} placeholder="Workout name" value={workOutName} onChangeText={setWorkOutName}></TextInput>  

      <TextInput style={styles.input} placeholder="Duration (min)" value={duration} onChangeText={setDuration}></TextInput>
    
    <Picker style={styles.input}
    selectedValue={excerciseType}
    onValueChange={(itemValue) => setExerciseType(itemValue)}>
    
    {ExcerciseType.map((excerciseType) => (
      <Picker.Item label={excerciseType} value={excerciseType} key={excerciseType}/>
    ))}
      </Picker>
  
      <TextInput style={styles.input} placeholder="Calories"></TextInput>

      <TouchableHighlight style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableHighlight>
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
    backgroundColor: '#BDB5D5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
    width: '100%',
  },
  trackerName:{
    fontSize: 34,
    fontWeight: 'bold',
    color:'#5B3E96'
  },
  listView:{
    marginTop: 20,
    width: '100%',
    height: 450,
    borderRadius:10,
    backgroundColor: '#ECECEC',
  },
  userInputView:{
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginVertical: 5,
    backgroundColor:'#CBC3E3',
    padding: 15,
    marginTop: 40,
    marginBottom: 50,
    borderRadius:10,
  },
  input:{
    width:'100%',
    height: 40,
    backgroundColor:'white',
    paddingHorizontal: 10,
    marginVertical: -15,
    borderRadius: 5,
    color: 'black',
    marginTop: 30,
    fontSize: 20,                                                                                                                      
  },
  button:{
    backgroundColor:'#fff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 40, // for roundede corner
    marginVertical: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText:{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  listStyle:{
    maxHeight:800,
  },
  itemContainer:{
    flex: 1,
    width: 540,
    backgroundColor: '#BDB5D5',
    alignItems: 'center',
    justifyContent:'space-around',
    marginVertical: 10,
    borderRadius: 10,
  },
  detailText:{
    color:'#5B3E96',
    fontSize:20,
    fontWeight: 'bold',
  },
  orderContainer:{
    backgroundColor: 'light green',
    padding: 15,
    borderRadius: 10,
    marginTop: -80,
    alignItems: 'flex-start',
  },
  orderHeading:{
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,

  },
  orderText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5B3E96',
  }

});
