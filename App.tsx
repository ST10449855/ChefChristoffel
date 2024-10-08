import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { dishDetail } from './type';
import { useState } from 'react';

export default function App() {

  // State hooks for user inputs and list of dishes
  const [dishName, setDishName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [courseType, setCourseType] = useState<string>('Main Course');
  const [price, setPrice] = useState<string>('');
  const [Dishes, setWorkouts] = useState<dishDetail[]>([]);

  // Get total number of dishes
  const totalDishes = Dishes.length;

  // List of course types for the picker
  const CourseType = ['Main Course', 'Starter', 'Dessert'];

  // Handler for submitting a new dish
  const handleSubmit = () => {
    // Creating a new dish object based on user inputs
    const newdish: dishDetail = {
      dish_Name: dishName,
      description: description,
      course_Type: courseType,
      price: parseInt(price)
    };

    // Adding the new dish to the list of dishes
    setWorkouts([...Dishes, newdish]);

    // Clearing input fields
    setDishName('');
    setDescription('');
    setCourseType('Main Course');
    setPrice('');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headingContainer}>
        <Text style={styles.trackerName}>The Menu</Text>
      </View>

      {/* Order Summary */}
      <View style={styles.orderContainer}>
        <Text style={styles.orderHeading}>TODAY'S ORDER</Text>
        <View>
          <Text style={styles.orderText}>Total Dishes: {totalDishes}</Text>
        </View>
      </View>

      {/* Dish List */}
      <View style={styles.listView}>
        <FlatList
          style={styles.listStyle}
          data={Dishes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.detailText}>Dish Name: {item.dish_Name}</Text>
              <Text style={styles.detailText}>Description: {item.description}</Text>
              <Text style={styles.detailText}>Course: {item.course_Type}</Text>
              <Text style={styles.detailText}>Price: {item.price}</Text>
            </View>
          )}
        />
      </View>

      {/* User Input Form */}
      <View style={styles.userInputView}>
        <TextInput
          style={styles.input}
          placeholder="Dish name"
          value={dishName}
          onChangeText={setDishName}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <Picker
          style={styles.input}
          selectedValue={courseType}
          onValueChange={(itemValue) => setCourseType(itemValue)}
        >
          {CourseType.map((courseType) => (
            <Picker.Item label={courseType} value={courseType} key={courseType} />
          ))}
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric" // Optional: To open numeric keyboard for price input
        />
        <TouchableHighlight style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

// Styles for the app components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#faebd7',
  },
  headingContainer: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    width: '100%',
  },
  trackerName: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#5B3E96',
  },
  listView: {
    marginTop: 20,
    width: '100%',
    height: 450,
    borderRadius: 10,
    backgroundColor: '#ECECEC',
  },
  userInputView: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginVertical: 5,
    backgroundColor: '#CBC3E3',
    padding: 15,
    marginTop: 40,
    marginBottom: 50,
    borderRadius: 10,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'black',
    marginTop: 20,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 40,
    marginVertical: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  listStyle: {
    maxHeight: 800,
  },
  itemContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#BDB5D5',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
  },
  detailText: {
    color: '#5B3E96',
    fontSize: 20,
    fontWeight: 'bold',
  },
  orderContainer: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    alignItems: 'flex-start',
  },
  orderHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  orderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5B3E96',
  }
});
