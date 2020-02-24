import * as React from 'react';
import { Image } from 'react-native';

  export default function IconImage({source, focused}) {
    const color= focused ? 'orange' : undefined
    return (
      <Image
        source={source}
        style={{height:30, width:30, tintColor:color}}
      />
    );
}
