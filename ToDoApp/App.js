import React from "react";





const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='MainScreen' tabBar={props => <TabBar {...props} />} >

      <Tab.Screen name="calender" component={CalenderScreen}
        options={() => {
          return {
            headerShown: false
          }
        }} />
      <Tab.Screen name="main" component={MainScreen}
        options={() => {
          return {
            headerShown: false
          }
        }}
      />
      <Tab.Screen name="profile" component={ProfileScreen}
        options={() => {
          return {
            headerShown: false
          }
        }}
      />

    </Tab.Navigator>
  )
}

export default function App() {
  return (
  <SafeAreaView flex={1}>
    <NavigationContainer >
      <Stack.Navigator>
        {/* <Stack.Screen name="auth" component={AuthStack} options={{ headerShown: false }} />    */}
        <Stack.Screen name="home" component={TabNavigator} options={{ headerShown: false }}  />
      </Stack.Navigator>
     
    </NavigationContainer>
    </SafeAreaView>
   

  );
}
