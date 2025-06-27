import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Card(props: any) {
    //console.log(props);

    const [modal, setmodal] = useState(false)

    return (
        <View>
            <TouchableOpacity onPress={() => setmodal(!modal)}>
                <Text>Card</Text>
                <Text>{props.informacion.name}</Text>
                <Image style={styles.image} source={{ uri: props.informacion.image }} />
            </TouchableOpacity>


            <Modal visible={modal} transparent animationType="fade">
    <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
            <Text style={styles.title}>{props.informacion.name}</Text>
            <Text style={styles.description}>{props.informacion.description}</Text>
            <Text style={styles.attributes}>{props.informacion.atributos}</Text>
            <Image style={styles.imagemodal} source={{ uri: props.informacion.image }} />
            <TouchableOpacity style={styles.closeButton} onPress={() => setmodal(!modal)}>
                <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
        </View>
    </View>
</Modal>

        </View>

    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        resizeMode: "contain"
    },
    modal: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.95)",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"

    },
    mdl: {
        width: "50%",
        height: "50%"
    },
    txt: {
        fontSize: 20,
        alignSelf: "center",
        color:"white"
    },
    imagemodal: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        alignSelf: "center"
    },
     modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "#1e1e1e",
        borderRadius: 20,
        padding: 20,
        width: "85%",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 10,
        textAlign: "center",
    },
    description: {
        fontSize: 16,
        color: "#cccccc",
        marginBottom: 10,
        textAlign: "center",
    },
    attributes: {
        fontSize: 14,
        color: "#aaaaaa",
        marginBottom: 15,
        textAlign: "center",
    },
   
    closeButton: {
        backgroundColor: "#ff5252",
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 10,
        marginTop: 10,
    },
    closeButtonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },
})