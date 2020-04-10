import React, { useRef, useEffect } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useField } from '@unform/core';
import styles from './Styles'

function EditInput({ name, label, reverseStyle, ...rest }) {
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
    <View style={reverseStyle?{...styles.boxContainerInput, flexDirection:'row-reverse'}:styles.boxContainerInput}>
      {label && <Text style={{...styles.boxTextContent}}>{label}</Text>}
      <TextInput style={reverseStyle?{...styles.boxTextInput,marginLeft:25}:{...styles.boxTextInput,marginRight:25}} placeholder={`Alterar ${name.replace(`${name[0]}`,`${name[0].toUpperCase()}`)}`} ref={inputRef} defaultValue={defaultValue} {...rest} />
    </View>
  );
}


export default EditInput;