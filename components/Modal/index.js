import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    Modal
} from 'react-native';


import return_arrow from '../../assets/images/return_arrow.png'
const ModalForma = (props)=>{

    const { visibleModal, setterModal, titulo, conteudo, footer, logs, cb } = props
    
    return (
        <Modal
            style={{ flex: 1 }}
            animationType='fade'
            transparent={false}
            visible={visibleModal}
            onRequestClose={() => {
                setterModal(false)
            }}>
            <View style={{ marginTop: 22, flex: 1 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 10 }}>
                    <TouchableOpacity
                        style={{ height: 30, width: 30 }}
                        onPress={() => {
                            !!cb ? cb():null
                            setterModal(false);
                        }}>
                        <Image
                            style={{ height: 30, width: 30 }}
                            source={return_arrow} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 25 }}>{titulo}</Text>
                </View>
                <Text>{logs}</Text>
                {conteudo}
                {footer}
    
            </View>
        </Modal>
    
    );
}
export default ModalForma
