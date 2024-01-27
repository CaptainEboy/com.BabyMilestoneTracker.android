// import * as React from 'react';
// import { Card, Button, Text } from 'react-native-paper';

// import {
//         responsiveHeight,
//         responsiveWidth,
//         responsiveFontSize,
//     } from "react-native-responsive-dimensions";
    

// const DashboardScreen = () => (
//   //<Card style={{height:responsiveHeight(100), backgroundColor:'rgb(255,0,240)'}}>
//     <Card style={{height:responsiveHeight(100),  backgroundColor:'#191c1f'}}>
//     <Card.Cover source={ {uri: 'https://picsum.photos/700'}  }
//         //{uri: 'https://picsum.photos/700' }
//         // source={require('../assets/donate.jpg')}
//     style={{height: responsiveHeight(50)}} />

    

//     <Card.Actions>
//       <Text style={{ color:'white'}} variant="titleLarge">
//           {'To pay your offering online\n'}
//           {'Plesase send the amount to the account details below \n'}
//       </Text>
//     </Card.Actions>

//     <Card.Content>
//       <Text style={{ color:'white'}} variant="titleLarge">
//         {'9029579665 \n'}
//         {"Opay Bank"}
//         {"Ogundimu Adedolapo Lilian"}
//       </Text>
//     </Card.Content>

    

//   </Card>
// );

// export default DashboardScreen ;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {
        responsiveHeight,
        responsiveWidth,
        responsiveFontSize,
    } from "react-native-responsive-dimensions";

export default function DashboardScreen() {
    return(
        <View  style={styles.container}>
            <StatusBar style='dark' />
            <View style={{backgroundColor: "blue", padding: 10}}>
              <Text style={{ fontSize:responsiveFontSize(4) }}>
                Dashboard
              </Text>
            </View>
            <View style={{backgroundColor: 'red', height:responsiveHeight(30), alignItems:'center', justifyContent: 'center'}}>
              <TouchableOpacity>
                <Image
                  // source={{ uri: "https://img.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_93675-128895.jpg?size=626&ext=jpg&ga=GA1.1.49247130.1697906011&semt=ais" }}
                  source={require('../assets/onboard.png')}
                  style={{height:responsiveHeight(25), width:responsiveWidth(50), borderRadius: responsiveWidth(100), backgroundColor:'rgb(255,0,240)'}}
                />
              </TouchableOpacity>
            </View>
            
            
            <Text>
                {' Church Account/Donation Section Coming Soon \n \n\n'}
                
            </Text>

            
        </View>

    );
}



const styles = StyleSheet.create({
    container: {
        // flex: 1, 
        // justifyContent: 'center', 
        // alignItems: 'center',
        backgroundColor: 'green',
        marginTop: 23,
        height: responsiveHeight(100),
        padding: 30
      },

})