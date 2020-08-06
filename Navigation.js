import  * as React  from 'react';
import Login from './screen/Login';
import Main from './screen/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
 function Navigation  () {
       return (
           <NavigationContainer>
              <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
           </NavigationContainer>
       )
   }

export default Navigation ;




