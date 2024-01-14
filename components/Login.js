import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    Pressable,
  } from 'react-native';
  
  import CustomButton from './CustomButton';    
  import Custominput from './CustomInput'
  
  export default function Login({ navigation }) {
    const handleChangeText = (text) => {
      console.log(text);
    };
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={require('../assets/login.png')} />
        <Text style={styles.title}>Selamat Datang!</Text>
        <Text style={styles.subtitle}>Silahkan masuk untuk melanjutkan</Text>
        <Custominput
          placeholder="Username"
          onChangeText={handleChangeText}
          secureTextEntry={false}
        />
        <Custominput
          placeholder="Password"
          onChangeText={handleChangeText}
          secureTextEntry={true}
        />
        <Text style={styles.title2}>Lupa Password?</Text>
        <CustomButton title="Masuk" onPress={() => navigation.navigate('Porto')} />
        <Text style={styles.title3}>------------ atau ------------</Text>
        <Image style={styles.avatar2} source={require('../assets/google.png')} />
        <TouchableOpacity
          style={styles.button2}
          onPress={() => Alert.alert('Masuk menggunakan Google?')}>
          <Text style={styles.text2}>Google</Text>
        </TouchableOpacity>
        <Image style={styles.avatar3} source={require('../assets/fb.png')} />
        <TouchableOpacity
          style={styles.button3}
          onPress={() => Alert.alert('Masuk menggunakan Facebook?')}>
          <Text style={styles.text3}>Facebook</Text>
        </TouchableOpacity>
        <View style={styles.buttonregister}>
          <Text style={styles.title6}>Belum punya akun?</Text>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text style={[styles.reset, { color: '#0275d8' }]}>Register</Text>
          </Pressable>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'WHITE',
      padding: 150,
      alignItems: 'center',
      marginTop: -10,
    },
    avatar: {
      width: 190,
      height: 198,
      marginBottom: 10,
    },
    title: {
      marginLeft: -90,
      marginTop: 10,
      marginBottom: 20,
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'left',
      marginRight: -80,
    },
    subtitle: {
      marginLeft: -90,
      marginRight: -80,
      color: 'grey',
      marginTop: -10,
      fontSize: 15,
    },
  
    title2: {
      marginTop: -20,
      padding: 20,
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'right',
      color: '#0275d8',
      marginRight: -150,
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
    text2: {
      fontSize: 20,
      marginLeft: -85,
      marginTop: -35,
      color: 'grey',
    },
    avatar3: {
      width: 30,
      height: 30,
      marginBottom: 10,
      marginLeft: 60,
      marginTop: -37,
    },
    text3: {
      fontSize: 20,
      marginLeft: 90,
      marginTop: -37,
      color: 'grey',
      marginRight: -100,
    },
    title6: {
      fontSize: 15,
      marginLeft: -62,
      marginTop: 20,
    },
    reset: {
      fontWeight: '500',
      color: '#000000',
      marginLeft: 70,
      marginTop: -17,
    },
  });
  