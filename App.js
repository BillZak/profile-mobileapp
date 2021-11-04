import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, TextInput, TouchableOpacity } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.editprofile}>
         <IconAntDesign name="arrowleft" style={{top: 45, left: -150,fontSize: 20}}/>
         <Text style={{fontSize: 18, margin: 20}}>Edit Profile</Text>
      </View>

      <View style={styles.image}>
        <Image style={styles.pic} source={require('./assets/pic.jpg')}/>
        <Image style={styles.cam} source={require('./assets/cam.png')}/>
      </View>

      <View style={styles.inputs}>
        <Text style={{marginLeft: 30, color: 'silver'}}>School</Text>
        <TextInput style={styles.form} placeholder="Enter Your School"/>
        <Text style={{marginLeft: 30, color: 'silver'}}>Email Address</Text>
        <TextInput style={styles.form} placeholder="Example@email.com"/>
        <Text style={{marginLeft: 30, color: '#1CD7F5'}}>Name</Text>
        <TextInput style={styles.form} placeholder="Your Name"/>
        <Text style={{marginLeft: 30, color: '#1CD7F5'}}>Nick Name</Text>
        <TextInput style={styles.form} placeholder="Your Nick Name"/>
        <Text style={{marginLeft: 30, color: '#1CD7F5'}}>Emergency Contact</Text>
        <TextInput style={styles.form} placeholder="Emergency Contact"/>
        <IconFontAwesome5 name="phone-square" style={{fontSize: 18,color:'silver',left: 315, bottom: 35}}/>
      </View>

      <View style={styles.button}>
        <TouchableOpacity>
          <Text style={{color: '#fff',fontSize: 18, margin: 30, backgroundColor: '#1CD7F5', borderRadius: 50 ,
          paddingLeft: 80, paddingRight: 80, paddingBottom: 20, paddingTop: 20}}>UPDATE PROFILE</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editprofile: {
    flex: 1,
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#F2F4F3',
    shadowColor: 'blue',
    backgroundColor: '#fff',
    marginTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  image: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    position: 'relative'
  },
  inputs: {
    flex: 5,
    width: "100%",
    backgroundColor: '#fff'
  },
  button: {
    flex: 2,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  form: {
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F4F3'
  },
  pic: {
    height: 150,
    width: 150,
    borderRadius: 100
  },
  cam: {
    height: 40,
    width: 40,
    borderRadius: 100,
    position:"absolute",
    top: 120,
    right: 100
  }
});
