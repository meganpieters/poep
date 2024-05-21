import * as React from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from '../Metrics';

const Signup = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSignup = () => {
    // Validate input fields
    if (!username || !password || !email || !confirmPassword) {
      setError('All fields are required');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Implement your signup logic here
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/image-31.png")}
      />
      <View style={styles.inputContainer}>
        <Image style={styles.icon} source={require("../assets/male-user.png")} />
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
          placeholderTextColor={Color.colorDimgray}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image style={styles.icon} source={require("../assets/secure.png")} />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          placeholderTextColor={Color.colorDimgray}
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Image style={styles.icon} source={require("../assets/secure1.png")} />
        <TextInput
          style={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholder="Confirm Password"
          placeholderTextColor={Color.colorDimgray}
          secureTextEntry
        />
      </View>
      <View style={styles.inputContainer}>
        <Image style={styles.icon} source={require("../assets/email3.png")} />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          placeholderTextColor={Color.colorDimgray}
          keyboardType="email-address"
        />
      </View>
      {error !== '' && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <View style={styles.alreadyHaveAnContainer}>
        <Text style={styles.alreadyHaveAn}>Already have an account? </Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.hereTypo}>Log in here</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.colorDodgerblue,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 5,
  },
  icon: {
    width: 20, // Adjust icon size as needed
    height: 20,
    marginHorizontal: 10,
  },
  logo: {
    width: horizontalScale(200),
    height: verticalScale(150),
    marginBottom: verticalScale(20),
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  button: {
    width: '80%',
    backgroundColor: '#1c313a',
    borderRadius: 5,
    paddingVertical: 12,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  alreadyHaveAnContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  alreadyHaveAn: {
    color: '#ffffff',
  },
  hereTypo: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default Signup;
