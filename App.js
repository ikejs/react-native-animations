import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



function Animated_1_hooks() {
  // 2. Define a value to animate on state: fade with an initial value of 0
  const fadeAnim = useRef(new Animated.Value(0)).current 
  
  // This acts as a lifecycle method
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true
      }
    ).start();
  }, [])

  return (
    <View style={Animation1Styles.container}>
      {/* Apply the fade value to a CSS property */}
      <Animated.View style={{ ...Animation1Styles.box, opacity: fadeAnim }}>
        <Text style={Animation1Styles.title}>Animation 1</Text>
        <Text>Fades in using Animated</Text>
      </Animated.View>
    </View>
  );
}



function Animated_2_hooks() {
	// Create a ref for the animated value object
  const move = useRef(new Animated.ValueXY({ x:-400, y: 0 })).current 

	// useEffect to start the animation when the component is mounted
  useEffect(() => {
    Animated.timing(
      move, {
        easing: Easing.elastic(4), // Easing function here!
        toValue: { x: 0, y: 0 },
        useNativeDriver: false
      }
    ).start()
  })
  
	return (
		<View style={Animation2Styles.container}>
			{/* Combine the styles with move. Call getLayout() to convert x and y to screen coords */}
			<Animated.View style={[Animation2Styles.box, move.getLayout()]}>
				<Text style={Animation2Styles.title}>Animated 2</Text>
				<Text>Animation moves up using spring. (Uses Hooks)</Text>
			</Animated.View>
		</View>
	);
}



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'lightblue'
        }}
      >
        <Tab.Screen name="Animation 1" component={Animated_1_hooks} />
        <Tab.Screen name="Animation 2" component={Animated_2_hooks} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



const Animation1Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    width: 200,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});


const Animation2Styles = StyleSheet.create({
  container: {
    // Position the object in the center (with no offset). 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  box: {
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    width: 200,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});