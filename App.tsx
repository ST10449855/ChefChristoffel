import { StatusBar } from 'expo-status-bar';
import {FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import {Picker} from "@react-native-picker/picker";
import { dishDetail } from './type'; // Assuming 'dishDetail' type is defined elsewhere
import { useState } from 'react';

export default function App() {

  // States to store form input data
  const [dishName, setDishName] = useState<string>(''); // Stores the dish name
  const [description, setDescription] = useState<string>(''); // Stores the dish description
  const [courseType, setCourseType] = useState<string>(''); // Stores the selected course type
  const [price, setPrice] = useState<string>(''); // Stores the dish price (as string initially)

  // State to store the list of dishes
  const [Dishes, setWorkouts] = useState<dishDetail[]>([]);

  // Variable to count the total number of dishes
  const totalDishes = Dishes.length;

  // Array of course types for the picker
  const CourseType = ['Main Course', 'Starter', 'Dessert'];

  // Function to handle form submission
  const handleSubmit = () => {
    // Validation to check if any field is empty
    if (!dishName || !description || !courseType || !price) {
      alert('Please fill in all the fields.'); // Alerts the user if any field is missing
      return;
    }

    // Create a new dish object from input data
    const newdish: dishDetail = {
      dish_Name: dishName,
      description: description,
      course_Type: courseType,
      price: parseInt(price), // Convert price from string to integer
    };

    // Update the Dishes state with the new dish
    setWorkouts([...Dishes, newdish]);

    // Clear the input fields after submission
    setDishName('');
    setDescription('');
    setCourseType('');
    setPrice('');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* App header */}
      <View style={styles.headingContainer}>
        <Text style={styles.trackerName}>The Menu</Text>
      </View>
      
      {/* Order summary container */}
      <View style={styles.orderContainer}>
        <Text style={styles.orderHeading}>TODAY'S ORDER</Text>
        <View>
          <Text style={styles.orderText}>Total Dishes: {totalDishes}</Text> {/* Displays the number of dishes */}
        </View>
      </View>

      {/* List of added dishes */}
      <View style={styles.listView}>
        <FlatList
          style={styles.listStyle}
          data={Dishes} // Passes the list of dishes to FlatList
          keyExtractor={(item, index) => index.toString()} // Uses index as the key
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              {/* Display dish details */}
              <Text style={styles.detailText}>Dish Name: {item.dish_Name}</Text>
              <Text style={styles.detailText}>Description: {item.description}</Text>
              <Text style={styles.detailText}>Course: {item.course_Type}</Text>
              <Text style={styles.detailText}>Price: {item.price}</Text>
            </View>
          )}
        />
      </View>

      {/* User input form */}
      <View style={styles.userInputView}>
        {/* Dish name input */}
        <TextInput
          style={styles.input}
          placeholder="Dish name"
          value={dishName}
          onChangeText={setDishName}
        />

        {/* Description input */}
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />

        {/* Course type picker */}
        <Picker
          style={styles.input}
          selectedValue={courseType}
          onValueChange={(itemValue) => setCourseType(itemValue)}
        >
          {CourseType.map((courseType) => (
            <Picker.Item label={courseType} value={courseType} key={courseType} /> // Populates the picker with course types
          ))}
        </Picker>

        {/* Price input */}
        <TextInput
          style={styles.input}
          placeholder="Price"
          keyboardType="numeric" // Ensures the keyboard is numeric
          value={price}
          onChangeText={setPrice}
        />

        {/* Save button */}
        <TouchableHighlight style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>

    </SafeAreaView>
  );
}

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  headingContainer: {
    backgroundColor: '#BDB5D5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
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
    marginVertical: 10,
    borderRadius: 5,
    color: 'black',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 40, // For rounded corners
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
    backgroundColor: 'lightgreen', // Changed to valid color
    padding: 15,
    borderRadius: 10,
    marginTop: -80,
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
  },
});
