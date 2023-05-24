/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, Modal, StyleSheet, Text, View} from 'react-native';
import {AcceptButton} from '../../../components/Button/AcceptButton';
import {RejectButton} from '../../../components/Button/RejectButton';
import {Input} from '../../../components/Input/InputBox';
import {COLORS, FONT_FAMILY, FONT_SIZE, PADDING} from '../../../Utils/Metrics';

export const UserModal = ({modalVisible, setModalVisible}) => {
  return (
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
          <Text style={styles.modalText}>Schedule Meeting</Text>
          <Input
            borderColor={COLORS.CARD_CYAN_DEEP}
            placeholder="Meeting title"
          />
          <View style={styles.row}>
            <View style={{flex: 0.7, marginRight: 3}}>
              <Input borderColor={COLORS.CARD_CYAN_DEEP} placeholder="Date" />
            </View>
            <View style={{flex: 0.3, marginLeft: 3}}>
              <Input borderColor={COLORS.CARD_CYAN_DEEP} placeholder="Time" />
            </View>
          </View>
          <Input borderColor={COLORS.CARD_CYAN_DEEP} placeholder="Location" />
          <Input
            borderColor={COLORS.CARD_CYAN_DEEP}
            placeholder="Details"
            numberOfLine={4}
            multiline={true}
            height={80}
          />
          <View style={[styles.row, {justifyContent: 'space-between'}]}>
            <View style={{flex: 1, marginRight: 3}}>
              <RejectButton
                title={'Cancel'}
                width={'100%'}
                isActive={true}
                onPress={() => setModalVisible(false)}
              />
            </View>
            <View style={{flex: 1, marginLeft: 3}}>
              <AcceptButton
                title={'Save'}
                width={'100%'}
                isActive={true}
                onPress={() => {}}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalView: {
    margin: 18,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: PADDING.MEDIUM,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalText: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.MEDIUM,
    color: COLORS.TEXT_CYAN,
  },
});
