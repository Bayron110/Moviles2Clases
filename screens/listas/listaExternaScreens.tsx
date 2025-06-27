import { SectionList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card';

export default function listaExternaScreens() {

  const [datos, setdatos] = useState([])

  async function leer(){
    const resp = await fetch('https://jritsqmet.github.io/web-api/assets/data/api2/sections/crash-s.json');
      const json = await resp.json();
      setdatos(json);
  }

  useEffect(() => {
leer()

console.log(datos);

  }, [])
  
  return (
    <View>
      <Text>lista Externa</Text>
      <SectionList //Tambien nos permite leer listas
      sections={datos}
      renderItem={({item})=>
    <Card informacion={item}/>
      }

      SectionSeparatorComponent={({section:{title}}:any)=>
      <Text style={{fontSize:40}}>{title}</Text>
      }
      />
    </View>
  )
} 

const styles = StyleSheet.create({
  txt:{
    fontSize:20,
  }
})