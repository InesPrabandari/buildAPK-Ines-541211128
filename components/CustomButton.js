import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from '../components/AssetExample';

const CustomButton = (props) => {
  return (
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#0b5394',
    padding: 10,
    borderRadius: 8,
    width: 320,
    height: 50,
    marginTop: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 3,
    color: 'white',
  },
  
});

export default CustomButton;