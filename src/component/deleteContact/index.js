import {Text, View, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Images from '../../assets';
import SelectDropdown from 'react-native-select-dropdown';
import {TouchableOpacity} from 'react-native-gesture-handler';

const countries = ['data1', 'data2', 'data3', 'data4'];

export default function DeleteContact() {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');

  return (
    <View style={styles.box}>
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
      <Image source={Images.boxImage} style={styles.icon} />
      <View style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Enter product URL (Optional)</Text>
      </View>
      <TextInput
        value={productName}
        placeholder="Enter product URL (Optional)"
        onChangeText={text => setProductName(text)}
        style={styles.inputBox}
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
