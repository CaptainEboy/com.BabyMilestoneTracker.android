import React, { useState } from "react"; 
import { StatusBar } from 'expo-status-bar';
import { 
	View, 
	Text, 
	TextInput, 
	TouchableOpacity, 
	FlatList, 
	StyleSheet, 
} from "react-native"; 

import Header from "./header";
import DashboardScreen from "./dashboard";

const HomeScreen = () => { 
	const [task, setTask] = useState(""); 
	const [tasks, setTasks] = useState([]); 
	const [editIndex, setEditIndex] = useState(-1); 
	const [showApp, setShowApp] = useState(false);

	const d = new Date();
	const weekday = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
	let day = weekday[d.getDay()];

	const month = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
	let name = month[d.getMonth()];

	let date = d.getUTCDate();

	let year = d.getFullYear();

	const mydate= day + "," + " " + name + " " + date + " " + year;

	const handleAddTask = () => { 
		if (task) { 
			if (editIndex !== -1) { 
				// Edit existing task 
				const updatedTasks = [...tasks]; 
				updatedTasks[editIndex] = task; 
				setTasks(updatedTasks); 
				setEditIndex(-1); 
			} else { 
				// Add new task 
				setTasks([...tasks, task]); 
			} 
			setTask(""); 
		} 
	}; 

	const handleEditTask = (index) => { 
		const taskToEdit = tasks[index]; 
		setTask(taskToEdit); 

    //setEditIndex to index of what is being edited which is not -1, so btn changes to update milestone
		setEditIndex(index); 
	}; 

	const handleDeleteTask = (index) => { 
    //Spread Operator, updatedTasks value is all the values of tasks
		const updatedTasks = [...tasks];
    
    //At position index, remove 1 items, then setTasks to the updatedTasks value
    //https://www.w3schools.com/jsref/jsref_splice.asp
		updatedTasks.splice(index, 1); 
		setTasks(updatedTasks); 
	}; 

	const renderItem = ({ item, index }) => ( 
		<View style={styles.task}> 
			<View style={{ flexDirection: "column" }}>
				<View >
					<Text style={styles.itemList}>
						{item}
					</Text> 
				</View>
				<View></View>
				
				<View style={{ marginTop: 5 }}>
					<Text style={{fontStyle: 'italic'}}>
						{mydate}
					</Text> 
				</View>
			</View>
			
			
				
			<View 
				style={styles.taskButtons}> 
				<TouchableOpacity 
					onPress={() => handleEditTask(index)}> 
					<Text 
						style={styles.editButton}>Edit</Text> 
				</TouchableOpacity> 
				<TouchableOpacity 
					onPress={() => handleDeleteTask(index)}> 
					<Text 
						style={styles.deleteButton}>Delete</Text> 
				</TouchableOpacity> 
			</View> 
		</View> 
	); 

	return ( 
        <View style={{flex:1}}>
			{!showApp && ( 
                    <>
					 <View style={{marginTop: 23,}}>
						<StatusBar style="inverted" backgroundColor="#0884C1"/>
						<Header />
					</View>
					<View style={styles.container}> 
						<Text style={styles.heading}>Baby Milestone Tracker</Text> 
						<Text style={styles.title}>Milestone</Text> 
						<TextInput 
							style={styles.input} 
							placeholder="Enter Milestone"
							value={task} 
							onChangeText={(text) => setTask(text)} 
						/> 
						<TouchableOpacity 
							style={styles.addButton} 
							onPress={handleAddTask}> 
							<Text style={styles.addButtonText}> 
								{editIndex !== -1 ? "Update Milestone" : "Add Milestone"} 
							</Text> 
						</TouchableOpacity> 
						<FlatList 
							data={tasks} 
							renderItem={renderItem} 
							keyExtractor={(item, index) => index.toString()} 
						/> 
					</View> 
					</>
			 	)
			}


			{showApp && ( 
                    <>
						<DashboardScreen />
					</>
				)
			}
           

        </View>
		
	); 
}; 

const styles = StyleSheet.create({ 
	container: { 
		flex: 1, 
		padding: 20, 
		marginTop: 10, 
	}, 
	title: { 
		fontSize: 24, 
		fontWeight: "bold", 
		marginBottom: 20, 
	}, 
	heading: { 
		fontSize: 30, 
		fontWeight: "bold", 
		marginBottom: 7, 
		color: "green", 
	}, 
	input: { 
		borderWidth: 3, 
		borderColor: "#ccc", 
		padding: 10, 
		marginBottom: 10, 
		borderRadius: 10, 
		fontSize: 18, 
	}, 
	addButton: { 
		backgroundColor: "green", 
		padding: 10, 
		borderRadius: 5, 
		marginBottom: 10, 
	}, 
	addButtonText: { 
		color: "white", 
		fontWeight: "bold", 
		textAlign: "center", 
		fontSize: 18, 
	}, 
	task: { 
		// flexDirection: "row", 
		justifyContent: "space-evenly", 
		// alignItems: "center", 
		marginBottom: 15, 
		fontSize: 18, 
	}, 
	itemList: { 
		fontSize: 19, 
	}, 
	taskButtons: { 
		flexDirection: "row", 
	}, 
	editButton: { 
		marginRight: 10, 
		color: "green", 
		fontWeight: "bold", 
		fontSize: 18, 
	}, 
	deleteButton: { 
		color: "red", 
		fontWeight: "bold", 
		fontSize: 18, 
	}, 
}); 

export default HomeScreen;


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
