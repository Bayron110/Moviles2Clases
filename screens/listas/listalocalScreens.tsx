import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import datos from "../../assets/data/Futurama.json"
import Tarjeta from '../../components/Tarjeta'


export default function listalocalScreens() {
    const [lista, setlista] = useState([
        //Esto es un arrglo de documentos yeison 
        {
            "cedula": "1752222505",
            "Nombre": "Bayron",
            "Edad": 25,

        },
        {
            "cedula": "1702140512",
            "Nombre": "Valeria",
            "Edad": 55,
        },
        {
            "cedula": "1716451195",
            "Nombre": "Juan",
            "Edad": 15,
        },
    ])

    return (
        <View>
            <Text style={styles.txt}>lista local</Text>
            <FlatList
                data={datos}
                renderItem={({ item }) =>

                    <Tarjeta informacion = {item}/>

                    //LO de abajo es una manera ambigua por asi decirlo

                    //<View>
                        //<Text style={styles.txt}>Nombre: {item.name.first}</Text>
                        //<Text style={styles.txt}>Cedula: {item.age}</Text>
                        //<Image style={styles.img} source={{uri:item.images.main}}/>
                    //</View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 20
    },
    img:{
        width:200,
        height:200
    }
})