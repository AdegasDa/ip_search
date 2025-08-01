import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import IPItem from '@/components/IPItem';

const ipAddresses = [
  "192.168.1.1",
  "10.0.0.1",
  "172.16.0.1",
  "192.168.0.101",
  "10.0.0.255",
  "172.16.254.1"
];

const ipaddresses = () => {

  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filteredIPs = useMemo(() => {
    if (search.trim().length == 0) return ipAddresses; 

    return ipAddresses.filter(
      ip => (
        ip.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <View style={{
        flex: 1,
        padding: 20,
        marginTop: 100,
        alignItems: "center",
      }}>
      
      <Text style={{fontSize: 30, fontWeight: "semibold"}}>IP Adresses Search</Text>
      
      <TextInput 
        style={{ width: '100%', height: 36, textAlign: "center", marginTop: 60, borderColor: '#000', borderWidth: 1, borderRadius: 16, backgroundColor: "#fff"}}
        placeholder={isFocused ? '' : 'Search IP...'}
        value={search}
        onChangeText={setSearch} 
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}/>

      <FlatList
        style={{marginTop: 18, flex: 1, width: '100%'}}
        data={filteredIPs}
        keyExtractor={(item) => item}
        renderItem={({item}) => {
          return <IPItem ip={item}/>
        }}>

      </FlatList>

    </View>
  )
}

export default ipaddresses

const styles = StyleSheet.create({})