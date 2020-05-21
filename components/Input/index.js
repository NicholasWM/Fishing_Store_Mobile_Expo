import React, { useRef, useEffect } from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';
import { useField } from '@unform/core';
function Input({ name, keyboard='default',label, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = '', error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: '_lastNativeText',
      getValue(ref) {
        return ref._lastNativeText || '';
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        ref._lastNativeText = value;
      },
      clearValue(ref) {
        ref.setNativeProps({ text: '' });
        ref._lastNativeText = '';
      },
    });
  }, [fieldName, registerField]);
  return (
    <View style={{
      flexDirection:'row', marginLeft:10,
      justifyContent:'space-between', alignItems:'center',
      backgroundColor:'orange', margin:5,
      borderRadius:10, borderWidth:1, borderColor:'black'
    }}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={styles.input} keyboardType={keyboard} placeholder={`Insira ${label}`} ref={inputRef} defaultValue={defaultValue} {...rest} />
    </View>
  );
}
const styles = StyleSheet.create({
  input:{
    borderWidth:2, borderColor:"black", borderRadius:10,
    textAlign:'center',
    backgroundColor:'white',
    color:'black',
    height:60,
    // margin:5,
    width:'60%'
  },
  label: {
    borderColor:'red',borderWidth:1,width:'40%',
    textAlign:'center',
    backgroundColor:'orange',
    fontSize:20,
    // marginLeft:40,
    color:'white',
    textShadowColor:"black",
    textShadowOffset: {width: 1, height:1}, textShadowRadius:5,
  }
})

export default Input;