import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import WelcomeScreens from "../screens/WelcomeScreens";
import LoginScreens from "../screens/LoginScreens";
import CalculadorScreens from "../screens/CalculadorScreens";
import IMCScreens from "../screens/IMCScreens";
import FormularioScreens from "../screens/FormularioScreens";
import RegistroUsuarioScreens from "../screens/RegistroUsuarioScreens";
import DireccionVScreens from "../screens/DireccionVScreens";

import EncuentaScreens from "../screens/EncuentaScreens";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import listalocalScreens from "../screens/listas/listalocalScreens";
import listaExternaScreens from "../screens/listas/listaExternaScreens";
import listaPScreens from "../screens/listas/listaPScreens";



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName="Top">
            <Tab.Screen
                name="Calculadora"
                component={CalculadorScreens}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="calculator" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen
                name="IMC"
                component={IMCScreens}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome5 name="theater-masks" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen name="Formulario" component={FormularioScreens} />
            <Tab.Screen name="Registro" component={RegistroUsuarioScreens}/>
            <Tab.Screen name="Direccion" component={DireccionVScreens}/>
            <Tab.Screen name="Encuenta" component={EncuentaScreens}/>

            <Tab.Screen name="Top" component={MyTop}/>
        </Tab.Navigator>
    );
}


const Top = createMaterialTopTabNavigator()
 function MyTop(){
    return(
        <Top.Navigator initialRouteName="Externa">
            <Top.Screen name="Local" component={listalocalScreens}/>
            <Top.Screen name="Externa" component={listaExternaScreens}/>
            <Top.Screen name="Prueba" component={listaPScreens}/>
        </Top.Navigator>
    )
 }

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreens} />
            <Stack.Screen name="Login" component={LoginScreens} />
            <Stack.Screen name="Tabs" component={MyTabs} />
        
        </Stack.Navigator>
    );
}

export default function NavegadorPrincipal() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}