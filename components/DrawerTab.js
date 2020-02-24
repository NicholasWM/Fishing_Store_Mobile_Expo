import * as React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

const menu_icon = require('../assets/images/menu_icon.png')
export default function DrawerTab({navigation, route, INITIAL_ROUTE_NAME}) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
  switch (routeName) {
    default:
      return (
        <View style={{width:"100%",flexDirection:'row',justifyContent: 'space-between', alignItems: 'center', borderColor:'red', borderWidth:2}}>
          <TouchableOpacity
            style={{borderColor:'red', borderWidth:2}}
            onPress={navigation.openDrawer}
          >
            <Image source={menu_icon} style={{width: 30, height: 30}}/>
          </TouchableOpacity>
        </View>
      )
  }
}
