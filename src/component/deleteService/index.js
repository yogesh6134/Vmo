import {Text, View, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Images from '../../assets';
import SelectDropdown from 'react-native-select-dropdown';
import {TouchableOpacity} from 'react-native-gesture-handler';

const countries = ['data1', 'data2', 'data3', 'data4'];

export default function DeleteService() {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');

  return (
    <View style={styles.box}>
      <View style={styles.checkBoxView}>
        <SelectDropdown
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          dropdownIconPosition="right"
          defaultButtonText={'Select category'}
          renderDropdownIcon={isOpened => {
            return (
              <Image source={Images.dropdown} style={{height: 15, width: 15}} />
            );
          }}
          buttonStyle={styles.buttonStyle}
        />
        <SelectDropdown
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          dropdownIconPosition="right"
          defaultButtonText={'Select category'}
          renderDropdownIcon={isOpened => {
            return (
              <Image source={Images.dropdown} style={{height: 15, width: 15}} />
            );
          }}
          buttonStyle={styles.buttonStyle}
        />
      </View>

      <Image source={Images.boxImage} style={styles.icon} />

      <TextInput
        value={productName}
        placeholder="Enter about your service"
        plac
        onChangeText={text => setProductName(text)}
        style={styles.inputBox}
        multiline
      />

      <View style={styles.bottomButton}>
        <SelectDropdown
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          dropdownIconPosition="right"
          defaultButtonText={'currency'}
          renderDropdownIcon={isOpened => {
            return (
              <Image source={Images.dropdown} style={{height: 15, width: 15}} />
            );
          }}
          buttonStyle={styles.bottomButtonStyle}
        />
        <TextInput
          value={price}
          placeholder="price From"
          onChangeText={text => setPrice(text)}
          style={styles.bottomInputBox}
        />
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
