import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function CalculadorScreens() {

    const [numero1, setnumero1] = useState(0)

    /*Este es un metodo */
    function menos() {
        setnumero1(numero1 - 1)
    }
    function sumar() {
        setnumero1(numero1 + 1)
    }
    const [numero2, setnumero2] = useState(0)

    function limpiar() {
        setnumero1(0)
        setnumero2(0)
    }

    useEffect(() => {
        if (numero1 <= 0) {
            setnumero1(0)
        }
        if (numero1 >= 10)
            setnumero1(10)

        if (numero2 <= 0 || numero2 >= 10) {
            setnumero2(0)
        }
        




    }, [numero1, numero2])



    function final() {
        let suma = numero1 + numero2;
        Alert.alert("Suma", "La suma es;" + suma, [
            {
                text: "Borrar",
                onPress: () => limpiar()
            },
            {
                text: "Continuar"
            }
        ])
    }



    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50 }}>Calculadora</Text>
            <View style={styles.fila}>
                <Button title='Restar -1' onPress={menos} />
                <Text style={styles.txt}> {numero1} </Text>

                <Button title='Sumar +1' onPress={() => setnumero1(numero1 + 1)} />
            </View>

            <View style={styles.fila}>
                <Button title='-1' color={"#6111ac"} onPress={() => setnumero2(numero2 - 1)} />
                <Text style={styles.txt}> {numero2} </Text>
                <Button title='+1' color={"#1151ac"} onPress={() => setnumero2(numero2 + 1)} />
            </View>
            <View>
                <Button title='Total' onPress={final} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    fila: {
        flexDirection: "row"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        fontSize: 40,
        color: "#1147ac",

    },
    linea: {
        backgroundColor: "black",
        margin: 1,
        width: "50%",
        borderWidth: 1
    }
})