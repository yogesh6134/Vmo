import React, {useState} from 'react';
import {Text, View, SafeAreaView, Image, TextInput} from 'react-native';
import styles from './styles';
import Images from '../../assets';
import Color from '../../themes/Colors';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../component/Button';
import RadioGroup from 'react-native-radio-buttons-group';

const radioButtonsData = [
  {
    id: '1',
    label: 'Public',
    value: 'Public',
  },
  {
    id: '2',
    label: 'Private',
    value: 'Private',
  },
];

export default function GeneralSetting({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lasttName, setLasttName] = useState('');
  const [bio, setBio] = useState('');
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  const onComplete = () => {
    navigation.navigate('dashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Complete profile</Text>
        <View style={styles.topBoxView}>
          <Image source={Images.user} style={styles.userLogo} />
          <Text style={styles.profileinstruction}>Update profile</Text>
          <TextInput
            placeholder="Your Bio"
            value={bio}
            onChangeText={text => setBio(text)}
            style={styles.bioBox}
          />
          <TouchableOpacity style={styles.saveBioButton}>
            <Text style={styles.saveBioButtonText}>Save Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.topBoxView}>
          <Text style={styles.boxHeading}>
            Make Your Profile Private/Public
          </Text>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            containerStyle={{
              alignItems: 'flex-start',
            }}
            buttonTextStyle={{Color: '#000'}}
          />
        </View>
        <View style={styles.topBoxView}>
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
          <View>
            <Text style={styles.genderText}>Gender</Text>

            <View style={styles.iconView}>
              <View style={styles.genderBoxView}>
                <Image source={Images.male} style={styles.genderIcon} />
                <Text style={styles.selectGenderText}>Male</Text>
              </View>
              <View style={styles.genderBoxView}>
                <Image source={Images.female} style={styles.genderIcon} />
                <Text style={styles.selectGenderText}>Male</Text>
              </View>

              <View style={styles.genderBoxView}>
                <Image source={Images.male} style={styles.genderIcon} />
                <Text style={styles.selectGenderText}>Other</Text>
              </View>
            </View>
          </View>

          <Button
            button={styles.button}
            buttonText="Complete Profile"
            buttonTextStyle={styles.buttonText}
            onButtonPress={onComplete}
          />
        </View>
        <View style={styles.bottomView} />
      </ScrollView>
    </SafeAreaView>
  );
}
