import {
  StyleSheet,
  Text,
  Modal,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Color from '../../themes/Colors';
import Images from '../../assets';
import {FONT_SIZE, HEIGHT, SPACING, WIDTH} from '../../themes/Constants';

export default function CustomSearchUserDetail() {
  const [search, setSearch] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState([
    {
      name: 'Profession',
    },
    {
      name: 'Male/Female',
    },
    {
      name: 'Country',
    },
    {
      name: 'State',
    },
  ]);

  const onFilterItem = () => {
    setModalVisible(!modalVisible);
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.modalRadioButton}>
        <Text style={styles.droupDownbuttonText}>{item.name}</Text>
      </View>
    );
  };
  return (
    <View style={styles.searchBoxView}>
      <View style={styles.searchButtonView}>
        <Image source={Images.search} style={styles.searchIcon} />

        <TouchableOpacity>
          <TextInput
            placeholder="Search by username or name"
            value={search}
            onChangeText={text => setSearch(text)}
            style={{
              width: WIDTH.w220,
            }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onFilterItem}>
        <Image source={Images.filter} style={styles.filterIcon} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{justifyContent: 'center', marginBottom: SPACING.v45}}>
              <TouchableOpacity
                style={styles.filterButton}
                onPress={onFilterItem}>
                <Text style={styles.modalText}>Filter Users</Text>
              </TouchableOpacity>
              <FlatList
                data={modalData}
                numColumns={2} // set number of columns
                columnWrapperStyle={{
                  justifyContent: 'space-around',
                  marginTop: 15,
                }}
                keyExtractor={(_item, index) => index.toString()}
                renderItem={renderItem}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBoxView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.v15,
    marginVertical: SPACING.v15,
  },
  searchButtonView: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: SPACING.v10,
    paddingVertical: SPACING.v3,
    width: WIDTH.w250,
    alignItems: 'center',
  },
  filterIcon: {
    height: HEIGHT.h25,
    width: WIDTH.w25,
  },
  searchIcon: {
    height: HEIGHT.h25,
    width: WIDTH.w35,
    marginHorizontal: SPACING.v6,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: HEIGHT.h0,
    width: WIDTH.w0,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: SPACING.v3,
    justifyContent: 'flex-end',
  },
  filterButton: {
    backgroundColor: Color.green,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.v8,
  },
  modalRadioButton: {
    borderWidth: 0.5,
    width: WIDTH.w150,
    borderRadius: SPACING.v8,
    paddingHorizontal: SPACING.v5,
    paddingVertical: SPACING.v5,
  },
  droupDownbuttonText: {
    fontSize: FONT_SIZE.f12,
    color: Color.txtDark,
  },
});
