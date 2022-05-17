import * as React from 'react';
import item from '../Screens/item';
import beefrecipe from '../Screens/beefrecipe';
import tearecipe from '../Screens/tearecipe';
import juicerecipe from '../Screens/juicerecipe';
import snaksrecipe from '../Screens/snaksrecipe';
import { createDrawerNavigator } from '@react-navigation/drawer';



const Drawer = createDrawerNavigator();

export default function MyDrawer(){
  return (  
      <Drawer.Navigator>
        screenOptions={{
          headerShown:true,
          drawerActiveBackgroundColor:color.accent_green,
        drawerInactiveBackgroundColor:'red',
          drawerActiveTintColor:'white',
          drawerInactiveTintColor:'black',
          SwipeEdgeWidth:0,
        }}
     <Drawer.Screen name="item" component={item} options={{
        headerShown: false }} />*
         <Drawer.Screen name="beefrecipe" component={beefrecipe} options={{
         headerShown: false }} />
        <Drawer.Screen name="tearecipe" component={tearecipe} options={{
        headerShown: false }} />
        <Drawer.Screen name="juicerecipe" component={juicerecipe} options={{
        headerShown: false }} />
        <Drawer.Screen name="snaksrecipe" component={snaksrecipe} options={{
        headerShown: false }} />
      {/* <Drawer.Screen name="Logout" component={Login}/> */}
      </Drawer.Navigator>
  );
}