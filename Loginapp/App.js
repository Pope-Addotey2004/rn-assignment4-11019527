import { StatusBar } from 'expo-status-bar';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomnavigator } from '@react-navigation/bottom-tabs';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, SafeAreaView ,ScrollView, TextInput, Button, FlatList, SectionList, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.container1}>Jobizz</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  container1:{
    width: 150,
    height: 33,
    marginTop: 106,
    marginLeft: -16,
    gap: 0,
    opacity: 0,
    //fontFamily: Poppins,
    fontSize: 22,
    fontWeight: 600,
    lineHeight: 33,
    letterSpacing: -2,
    textAlign: center,
    color: '#356899',

  },
});
