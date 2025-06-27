import { SectionList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Modo from '../../components/Modo';

export default function listaPScreens() {
    const [datos, setdatos] = useState<{ title: string; data: any[] }[]>([]);

    async function leer() {
        const resp = await fetch('https://jritsqmet.github.io/web-api/peliculas3.json');
        const json = await resp.json();
        //setdatos(json.peliculas);
        //Comvertir a un arreglo cuanto te da error
        //Metodo dos 
        const transformado = [
            {
                title: 'Películas',
                data: json.peliculas
            }
        ];
        setdatos(transformado);
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
                renderItem={({ item }) =>
                    <Modo informacion={item} />
                }
                SectionSeparatorComponent={({ section: { title } }: any) =>
                    <Text style={{ fontSize: 40 }}>{title}</Text>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 20,
    }
})