import { StatusBar } from 'expo-status-bar';
import {FlatList, SafeAreaView, StyleSheet, Text,TextInput,TouchableHighlight, View } from 'react-native';
import {Picker} from "@react-native-picker/picker";
import { dishDetail } from './type';
import { useState } from 'react';

export default function App() {

  const [dishName, setDishName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [courseType, setCourseType] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const[Dishes, setWorkouts] = useState<dishDetail[]>([]);

  const[totalCalories, setTotalCalories] = useState<number>(0);
  const totalWorkOuts = Dishes.length;

  const CourseType = ['Main Course','Starter','Dessert']

  const handleSubmit = () => {

  const newdish: dishDetail = {
    dish_Name : dishName,
    description: description,
    course_Type:courseType,
    price: parseInt(price)
  };
    setWorkouts([...Dishes, newdish]);
    setTotalCalories(totalCalories + newdish.price);
    setDishName('');
    setDescription('');
    setCourseType('');
    setPrice('');

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
      data={Dishes}
      keyExtractor={(item,index) => index.toString()}
      renderItem={({item}) =>(
        <View style={styles.itemContainer}>
          <Text style={styles.detailText}>Dish Name: {item.dish_Name}</Text>
          <Text style={styles.detailText}>Description : {item.description}</Text>
          <Text style={styles.detailText}>Course : {item.course_Type}</Text>
          <Text style={styles.detailText}> Price: {item.price}</Text>
        </View>
      )}>

      </FlatList>
    </View>

    <View style={styles.userInputView}>
      <TextInput style={styles.input} placeholder="Dish name" value={dishName} onChangeText={setDishName}></TextInput>  

      <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription}></TextInput>
    
    <Picker style={styles.input}
    selectedValue={courseType}
    onValueChange={(itemValue) => setCourseType(itemValue)}>
    
    {CourseType.map((courseType) => (
      <Picker.Item label={courseType} value={courseType} key={courseType}/>
    ))}
      </Picker>
  
      <TextInput style={styles.input} placeholder="Price"></TextInput>

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
