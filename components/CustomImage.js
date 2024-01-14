import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
  } from 'react-native';
  
  // You can import supported modules from npm
  import { Card } from 'react-native-paper';
  
  // or any files within the Snack
  import AssetExample from '../components/AssetExample';
  
  const CustomButton = (props) => {
    return (
      <Image style={styles.avatar4} source={props.image} />
    );
  };
  
  const styles = StyleSheet.create({
    avatar4: {
      width: 390,
      height: 210,
      marginTop: 40,
      borderRadius: 8,
    },
  });
  
  export default CustomButton;
  