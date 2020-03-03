
import React from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';

import styles from './Style'
export default (props )=> {
    const { titulo}= props
    return(
    <TouchableOpacity
        style={styles.corpoBTN}
        onPress={() => {
            props.setterModal(true);
        }}>
        <Text style={styles.textoBTN}>{titulo}</Text>
    </TouchableOpacity>
)}