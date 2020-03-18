import React, {useEffect, useState} from 'react'
import {Text, View, TouchableOpacity, Image} from 'react-native'
import {Camera} from 'expo-camera'
const cameraIcon = require('../../assets/images/camera.png')

export default function CameraComponent({navigation, route}){
    const [hasPermission, setHasPermission] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back)
    const [cameraRef, setCameraRef] = useState(null)
    const {setterImage} = route.params
    useEffect(()=> {
        (async ()=>{
            const {status} = await Camera.requestPermissionsAsync()
            setHasPermission(status == 'granted')
        })()
    },[])

    const snap = async () => {
        if (cameraRef) {
            let photo = await cameraRef.takePictureAsync();
            setterImage(photo)
            navigation.goBack()
        }
    };

    if(hasPermission == null){
        return <View/>
    }
    if(hasPermission == false){
        return <Text>No access to Camera</Text>
    }
    return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} 
                type={type}
                ref={ref => setCameraRef(ref)}
                >
                <View
                style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                    justifyContent:'center'
                }}>
                <TouchableOpacity
                    style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    margin:20
                    }}
                    onPress={() => {
                        snap()
                    }}>
                        <Image style={{height:100, width:100}}source={cameraIcon}/>
                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Snap </Text>
                </TouchableOpacity>
                </View>
            </Camera>
        </View>
    )
}