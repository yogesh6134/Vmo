import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import styles from './styles';
import Images from '../../assets';
import Color from '../../themes/Colors';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../component/Button';

export default function ProfileScreen({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lasttName, setLasttName] = useState('');

  const onComplete = () => {
    //  navigation.navigate("notification")
    navigation.navigate('dashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Complete profile</Text>
        <Image source={Images.user} style={styles.userLogo} />
        <Text style={styles.profileinstruction}>Update profile</Text>
        <View style={styles.textViewStyle}>
          <TextInput
            placeholder="First Name"
            style={styles.TextInput}
            onChangeText={text => setFirstName(text)}
            value={firstName}
            placeholderTextColor={Color.txtDark}
          />

          <TextInput
            placeholder="Last Name"
            style={styles.TextInput}
            onChangeText={text => setLasttName(text)}
            value={lasttName}
            placeholderTextColor={Color.txtDark}
          />
        </View>
        <TextInput
          placeholder="User Name"
          style={styles.fullTextInput}
          onChangeText={text => setLasttName(text)}
          value={lasttName}
          placeholderTextColor={Color.txtDark}
        />

        <TextInput
          placeholder="Date of Birth"
          style={styles.fullTextInput}
          onChangeText={text => setLasttName(text)}
          value={lasttName}
          placeholderTextColor={Color.txtDark}
        />
        <View>
          <Text style={styles.genderText}>Gender</Text>

          <View style={styles.iconView}>
            <View style={styles.genderBoxView}>
              <Image source={Images.male} style={styles.genderIcon} />
              <Text style={styles.selectGenderText}>Male</Text>
            </View>
            <View style={styles.genderBoxView}>
              <Image source={Images.female} style={styles.genderIcon} />
              <Text style={styles.selectGenderText}>Female</Text>
            </View>

            <View style={styles.genderBoxView}>
              <Image source={Images.male} style={styles.genderIcon} />
              <Text style={styles.selectGenderText}>Other</Text>
            </View>
          </View>
        </View>

        <TextInput
          placeholder="Profession"
          style={styles.fullTextInput}
          onChangeText={text => setLasttName(text)}
          value={lasttName}
          placeholderTextColor={Color.txtDark}
        />

        <TextInput
          placeholder="Country"
          style={styles.fullTextInput}
          onChangeText={text => setLasttName(text)}
          value={lasttName}
          placeholderTextColor={Color.txtDark}
        />

        <TextInput
          placeholder="State"
          style={styles.fullTextInput}
          onChangeText={text => setLasttName(text)}
          value={lasttName}
          placeholderTextColor={Color.txtDark}
        />

        <Button
          button={styles.button}
          buttonText="Complete Profile"
          buttonTextStyle={styles.buttonText}
          onButtonPress={onComplete}
        />
        <View style={styles.bottomView} />
      </ScrollView>
    </SafeAreaView>
  );
}
