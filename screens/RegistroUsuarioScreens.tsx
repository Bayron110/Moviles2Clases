import { Alert, Button, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'


export default function RegistroUsuarioScreens() {
    const [password1, setpassword1] = useState("")
    const [password2, setpassword2] = useState("")
    const [visible, setvisible] = useState(false)

    function verificar() {
        if (password1 == password2) {
            Alert.alert("Aviso" , " Contraseñas Correctas")
        } else {
            Alert.alert("Alerta" , " Las Contraseñas no coinciden")
        }
    }


    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>Registro Usuario</Text>
            <View >
                <Text style={styles.txt}>Ingrese su Nombre </Text>
                <TextInput placeholder='Ingre su Nombre' />
                <Text style={styles.txt}>Ingrese su Apellido </Text>
                <TextInput placeholder='Ingre su Apellido' />
                <Text style={styles.txt}>Ingrese su Email </Text>
                <TextInput placeholder='Ingre su Email' />
                <Text style={styles.txt}>Ingrese su Telefono </Text>
                <TextInput placeholder='Ingre su Telefono' 
                keyboardType="numeric"
                />
                <Text style={styles.txt}>Ingrese su Contraseña  </Text>
                <TextInput placeholder='Ingre su Contraseña'
                    onChangeText={(text) => setpassword1(text)} />
                <Text style={styles.txt}>Confirme su Contraseña </Text>
                <TextInput placeholder='Confirme su Contraseña'
                    onChangeText={(text) => setpassword2(text)} />
                <TextInput />
                <Text style={styles.txt}>Aceptar términos y suscripción a newsletter.</Text>
                <Switch
                    value={visible}
                    onValueChange={() => setvisible(!visible)} 
                />

                <Button title='Guardar' onPress={() => verificar()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontSize: 20,
        color: "#070e09"
    }
})