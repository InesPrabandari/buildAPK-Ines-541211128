import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert, ScrollView, Pressable } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from '../components/AssetExample';
import CustomButton from './CustomButton';
import Custominput from './CustomInput';

export default function App({navigation}) {
  const handleChangeText = (text) => {
    console.log(text);
  };
  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('../assets/login.png')}/>
      <Text style={styles.title}>Selamat Datang!</Text>
      <Text style={styles.subtitle}>Silahkan daftar untuk melanjutkan</Text>
      <Custominput style={styles.input} placeholder='Nama Lengkap'/>
      <Custominput style={styles.input2} placeholder='Username/Email' onChangeText={handleChangeText}
      secureTextEntry={false}/>
      <Custominput style={styles.input3} placeholder='Password' onChangeText={handleChangeText}
      secureTextEntry={true}/>
      <Custominput style={styles.input4} placeholder='Konfirmasi Password' onChangeText={handleChangeText}
      secureTextEntry={true}/>
      <Text style={styles.title2}>Tampilkan password</Text>
      <Pressable style={styles.buttonregister} onPress={() => navigation.navigate('Porto')}> 
      <Text style={styles.buttontext}>Daftar</Text>
      </Pressable>
      <Text style={styles.title3}>------------ atau ------------</Text>
      <Image style={styles.avatar2} source={require('../assets/google.png')} />
      <TouchableOpacity style={styles.button2} onPress={() => Alert.alert('Daftar menggunakan Google?')}>
      <Text style={styles.text2}>Google</Text>
      </TouchableOpacity>
      <Image style={styles.avatar3} source={require('../assets/fb.png')} />
      <TouchableOpacity style={styles.button3} onPress={() => Alert.alert('Daftar menggunakan Facebook?')}>
      <Text style={styles.text3}>Facebook</Text>
      </TouchableOpacity>
      <View style={styles.btnmedsos}>
      <Text style={[styles.reset1, {}]}>Sudah punya akun?</Text>
      <Pressable
      onPress={() => navigation.navigate('Login')}>
      <Text style={[styles.reset2, {color: '#0275d8'}]}> Masuk</Text>
      </Pressable>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'WHITE',
    padding: 150,
    alignItems: 'center',
    marginTop: -80,
  },
   avatar: {
    width: 190,
    height: 198,
    marginBottom: 10,
  },
  title: {
    marginLeft:-90, 
    marginTop:10,
    marginBottom:20,
    fontWeight:'bold',
    fontSize:30,
    textAlign:'left',
    marginRight: -80
  },
  subtitle: {
    marginLeft: -90,
    marginRight: -80,
    color: 'grey',
    marginTop: -10,
    fontSize: 15,
  },
  input: {
    borderWidth: 2,
    margin: 10,
    marginTop: 30,
    textAlign: 'left',
    color: 'black',
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: 320,
  },
  input2: {
    borderWidth: 2,
    margin: 10,
    marginTop: 10,
    textAlign: 'left',
    color: 'black',
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: 320,
  },
  input3: {
    borderWidth: 2,
    margin: 10,
    marginTop: 10,
    textAlign: 'left',
    color: 'black',
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: 320,
  },
  input4: {
      borderWidth: 2,
    margin: 10,
    marginTop: 10,
    textAlign: 'left',
    color: 'black',
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: 320,
  },
  title2: {
    marginTop:-20,
    padding:20,
    fontWeight:'bold',
    fontSize:18,
    textAlign:'right',
    color:'#0275d8',
    marginRight: -150,
  },
  buttonregister: {
    alignItems: 'center',
    backgroundColor: '#0b5394',
    padding: 10,
    borderRadius: 8,
    width: 320,
    height: 50,
    marginTop: 15,
  },
  buttontext: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 3,
    color: 'white',
  },
  title3: {
    marginTop: -10,
    padding: 20,
    fontWeight: 'medium',
    fontSize: 17,
    textAlign: 'center',
    color: 'black',
    width: 220,
  },
  avatar2: {
    width: 30,
    height: 30,
    marginBottom: 10,
    marginLeft: -220,
    marginTop: 10,
  },
  button2: {
    marginTop: -30,
    marginLeft: -120,
  },
  text2: {
    fontSize: 20,
    marginLeft: 4,
    marginTop: -6,
    color: 'grey',
  },
  avatar3: {
    width: 30,
    height: 30,
    marginBottom: 10,
    marginLeft: 60,
    marginTop: -25,
  },
  text3: {
    fontSize: 20,
    marginLeft: 90,
    marginTop: -35,
    color: 'grey',
    marginRight: -100,
  }, 
  reset1: {
    marginTop: 25,
    fontWeight: 'medium',
    fontSize: 15,
    textAlign: 'center',
    color: '#808080',
    marginLeft: -120,
  },
  reset2: {
    marginLeft: 60,
    marginTop: -17,
    color: '#72a4d4',
    fontWeight: 'bold'
  }
});
