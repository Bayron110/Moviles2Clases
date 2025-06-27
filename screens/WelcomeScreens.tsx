import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeScreens({ navigation }: any) {
    return (
        <View>
            <Text>WelcomeScreens</Text>
            <Button
                title='Ir a Login'
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    )
}

const styles = StyleSheet.create({})