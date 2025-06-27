import { ActivityIndicator, Alert, Button, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Divider } from 'react-native-paper'

export default function FormularioScreens() {
    const [usuario, setusuario] = useState("")
    const [edad, setedad] = useState(0)

        //Funcion para guardas datos Json
    const [datos, setdatos] = useState({"usuario":"", "edad":0})

    const [visible, setvisible] = useState(false)

    function guardar(){

        if(usuario.trim() =="" ){
            Alert.alert("Alerta"+ "   Datos en Blanco")
            console.log("datos en blanco");
            

        }

        setdatos({
            "usuario": usuario.trim(),
            "edad": edad
        })
    }
    return (
        <View style={styles.container}>
            <Text>Formulario</Text>
            <TextInput
                placeholder='Ingresar usuario'
                style={styles.input}
                onChangeText={(texto)=> setusuario(texto)} />
            <TextInput
                placeholder='Ingresar edad'
                style={styles.input}
                onChangeText={(texto)=> setedad(+texto)} />

                <Button title='Guardar' onPress={()=>guardar()}/>

                    <Divider/>
                    <Text style={{fontSize:30}}> Ver datos</Text>
                    <Switch
                    value={visible}
                    onValueChange={()=> setvisible(!visible)} //Logica de Progrmacion 1 ! es un operador terniario
                    />
                    <View style={styles.linea}/>
                    {visible == true
                    ?<View>
                        <Text style={styles.txt}>{datos.usuario}</Text>
                        <Text style={styles.txt}>{datos.edad}</Text>
                    </View>
                    
                    :
                    //Es para dar una señal de carga asta que el Seitvh cambie
                    <ActivityIndicator/ >
                    }
                    
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
    input: {
        fontSize:30,
        backgroundColor:"#42f054",
        width:"60%",
        margin: 10
    },
    linea:{
        borderWidth:1,
        width:"90%",
        backgroundColor:"#350594",
        margin:20
    },
    txt:{
        fontSize:30
    }
})