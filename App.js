import 'react-native-gesture-handler';
import * as React from 'react';
import {TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import indexScreen from './src/screens/indexScreen';
import {Provider} from './src/context/BlogContext'
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const Stack = createStackNavigator();
//   your whole code doesn't have any comment this type of code should be avoided 
function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        
        <Stack.Screen
          name="Index"
          component={indexScreen}
          options={{ 
            title: 'BLOGS ',
            headerStyle: {
              backgroundColor: 'rgb(44, 62, 80)',
            },
            headerTintColor: 'blue',
            headerTitleStyle: {
              fontWeight: '500',
            },
        }}
        />

        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={{
            headerStyle:{
              backgroundColor:'green'
            }
            }}
          />

        <Stack.Screen 
           name="Create"
           component={CreateScreen}/>

        <Stack.Screen
        name="Edit"
        component={EditScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default() =>{
  return <Provider>
    <MyStack/>
  </Provider>
}
