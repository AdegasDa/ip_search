import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const IPItem = ({ip} : {ip: string}) => {
  const [hover, setHover] = useState(true);

  return (
    <Pressable onHoverIn={() => setHover(true)} onHoverOut={() => setHover(false)}>
      <Text
        style={{
          marginTop: 8,
          textAlign: 'center',
          width: '100%',
          borderRadius: 2,
          paddingVertical: 4,
          color: hover ? '#111' : '#333',
          backgroundColor: hover ? '#fff' : '#D3D3D3',
          fontWeight: hover ? 'semibold' : 'normal',
        }}
      >
        {ip}
      </Text>
    </Pressable>
  );
}

export default IPItem

const styles = StyleSheet.create({})