import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Alert,
    ScrollView,
  } from 'react-native';
  
  // You can import supported modules from npm
  import { Card } from 'react-native-paper';
  
  // or any files within the Snack
  import AssetExample from '../components/AssetExample';
  import React, { useState } from 'react';
  import CustomImage from './CustomImage';
  
  export default function App() {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0); 
  
    const likefunction = () => {
      setLike(like + 1);
    };
    const dislikefunction = () => {
      setDislike(dislike + 1);
    };
  
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Image style={styles.avatar} source={require('../assets/aku.jpeg')} />
          <Text style={styles.title}>Ines</Text>
          <Text style={styles.subtitle}>
            Halo saya anak kedua dari 2 bersaudara, Saya lahir pada tanggal 19
            Desember 2006, dan Saya merupakan Siswa dari SMK Telkom Purwokerto
            jurusan Rekayasa Perangkat Lunak
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('081326532171')}>
            <Text style={styles.text}>Contact Me</Text>
          </TouchableOpacity>
          <Text style={styles.title2}>My Recent Project</Text>
          <CustomImage image={require('../assets/desain2.jpeg')} />
          <Text style={styles.title3}>Hommie</Text>
          <Text style={styles.subtitle2}>Mobile App Design</Text>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => Alert.alert('Explore lebih lanjut?')}>
            <Image
              style={styles.avatar3}
              source={require('../assets/next.png')}
            />
          </TouchableOpacity>
          <CustomImage image={require('../assets/desain1.png')} />
          <Text style={styles.title4}>Findchieve</Text>
          <Text style={styles.subtitle3}>Mobile App Design</Text>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => Alert.alert('Explore lebih lanjut?')}>
            <Image
              style={styles.avatar3}
              source={require('../assets/next.png')}
            />
          </TouchableOpacity>
          <Text style={styles.text2}>{like}</Text>
          <TouchableOpacity style={styles.button3} onPress={likefunction}>
            <Image style={styles.avatar4} source={require('../assets/like5.png')}/>
          </TouchableOpacity>
          <Text style={styles.text3}>{dislike}</Text>
          <TouchableOpacity style={styles.button4} onPress={dislikefunction}>
            <Image style={styles.avatar5} source={require('../assets/dislike5.png')} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FACBEA',
      padding: 85,
    },
    avatar: {
      width: 190,
      height: 200,
      marginBottom: 10,
      borderRadius: 20,
    },
    title: {
      color: 'black',
      fontSize: 40,
      fontWeight: 'bold',
    },
    subtitle: {
      textAlign: 'center',
      marginTop: 5,
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 3,
      color: 'white',
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#B0578D',
      padding: 10,
      borderRadius: 14,
      width: 160,
      height: 50,
      marginTop: 15,
    },
    title2: {
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 30,
    },
    title3: {
      fontSize: 30,
      marginRight: 140,
      fontWeight: 'bold',
      marginTop: 10,
      marginLeft: -123,
    },
    subtitle2: {
      fontSize: 20,
      color: 'grey',
      marginRight: 130,
      marginLeft: -83,
    },
    title4: {
      fontSize: 30,
      marginRight: 140,
      fontWeight: 'bold',
      marginTop: 10,
      marginLeft: -90,
    },
    subtitle3: {
      fontSize: 20,
      color: 'grey',
      marginRight: 130,
      marginLeft: -83,
    },
    avatar3: {
      marginLeft: 5,
      marginTop: 2,
      width: 40,
    },
    button2: {
      alignItems: 'center',
      backgroundColor: '#B0578D',
      padding: 10,
      borderRadius: 60,
      width: 50,
      height: 50,
      marginTop: -50,
      marginLeft: 290,
    },
    text2: {
      marginTop: 30,
      marginLeft: -335,
      fontSize: 20,
    },
    button3: {
      marginTop: 10,
    },
    avatar4: {
      width: 45,
      height: 45,
      marginTop: -50,
      marginRight: 265,
  
    },
    text3: {
      marginTop: -35,
      marginLeft: -160,
      fontSize: 20,
    },
    avatar5: {
      width: 42,
      height: 42,
      marginTop: -35,
      marginRight: 95,
    }
  
  });