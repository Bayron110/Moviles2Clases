import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import React from 'react'

export default function LoginScreens({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={[styles.txt, { fontSize: 100 }]}>Login</Text>
            <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("Tabs")}>
                <View style={styles.fila}>
                    <Text style={styles.txt}>Ir a Calculadora</Text>
                    <SimpleLineIcons name="login" size={54} color="#078d0a" />
                </View >
                <Image style={styles.img} source={require("../assets/imagenes/pumpkin.png")} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: "#281ee6",
        justifyContent: "center", //Ocupa toda la pantalla cuando trabaja con el flex
        flex: 1, // con el flex 1 ocupamos toda la pantalla
    },
    txt: {
        color: "#fafafa",
        fontSize: 40
    },
    btn: {
        backgroundColor: "#c9ed3b",
        borderRadius: 20,
        width: "80%",
        height: 120,
        alignItems: "center",/*De acuerod a como programamos cual aliegn me sirve para el centrado de texto */
        padding:20
    },
    img: {
        width: "50%",
        height: 150
    },
    fila:{
        flexDirection:"row-reverse"
    },
})