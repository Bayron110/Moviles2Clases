import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

//Util para mandar datos antes de ir al flat list
export default function Tarjeta( props : any) {
    //Buenas practicas con el log es quitarlo o comentarlo
    //console.log(props.informacion.name.first);

    function mostrarMas(data:any){
        Alert.alert("Mas Información", data.name.first +" trabaja como: " + data.occupation)
    }
    
    return (
        <View>
        <TouchableOpacity onPress={()=>mostrarMas(props.informacion)} style={styles.btn}>
            <Image style={styles.img} source={{uri:props.informacion.images.main}}/>
            <Text style={styles.txt}>{props.informacion.name.first} {props.informacion.name.last}</Text>
            <Text style={styles.txt}>{props.informacion.name.middle}</Text>
            <Text style={styles.txt}>{props.informacion.species}</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor:"#09dc49",
        margin:5,
        borderRadius:20,
        alignItems:"flex-end",
        
    },
    img:{
        width:200,
        height:200,
        resizeMode:"contain"
    },
    txt: {
        fontSize: 20,
        alignSelf:"flex-start"
    }
})