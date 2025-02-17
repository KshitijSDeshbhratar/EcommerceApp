import { StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

const InputTextComponent = props => {
  const [username,setUsername] = useState('');
  return (
    <View style={styles.inputTextContainer}>
            <FontAwesome
              name={props.inputIcon}
              size={24}
              color={'#9A9A9A'}
              style={styles.inputIcon}
            />
            <TextInput
            style={styles.usernameInput}
            keyboardType={props.keyboardType}
            placeholder={props.placeHolder}
            secureTextEntry={props.secureTextEntry}
            value={username}
            onChangeText={(value) => {
                setUsername(value);
                props.onChangeText(value);
                }} />
          </View>
  );
};

InputTextComponent.defaultProps = {
    onChangeText: () => {},
    keyboardType: 'default',
    secureTextEntry: false,
    placeHolder: '',
};

InputTextComponent.PropTypes = {
    placeHolder: PropTypes.string,
    inputIcon: PropTypes.any,
    secureTextEntry: PropTypes.bool,
    onChangeText: PropTypes.func,
    keyboardType: PropTypes.string,
};

export default InputTextComponent;

const styles = StyleSheet.create({
    inputTextContainer: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderRadius: 20,
        marginHorizontal: 40,
        marginVertical: 20,
        elevation: 10,
        alignItems: 'center',
        height: 50,
      },
      usernameInput: {
        flex: 1,
      },
      inputIcon: {
        marginLeft: 15,
        marginRight: 5,
      },
});
