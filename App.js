// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import "react-native-gesture-handler";

import * as React from "react";
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import InicioScreen from "./pages/InicioScreen";
import MiPerfilScreen from "./pages/MiPerfilScreen";
import MiPropiedadScreen from "./pages/MiPropiedadScreen";
import VisitasScreen from "./pages/VisitasScreen";
import AyudaScreen from "./pages/AyudaScreen";
import ReservasScreen from "./pages/ReservasScreen";
import EscanearQRScreen from "./pages/EscanearQRScreen";
import MapaScreen from "./pages/MapaScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={require("./Imagenes/drawerWhite.png")}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function HomeScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="InicioScreen">
      <Stack.Screen
        name="InicioScreen"
        component={InicioScreen}
        options={{
          title: "Home", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#f4511e", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function MiPerfilScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="MiPerfilScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#f4511e", //Set Header color
        },
        headerTintColor: "#fff", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="MiPerfilScreen"
        component={MiPerfilScreen}
        options={{
          title: "Mi Perfil", //Set Header Title
        }}
      />
      {/* <Stack.Screen
        name="MiPropiedadScreen"
        component={MiPropiedadScreen}
        options={{
          title: "Third Page", //Set Header Title
        }}
      /> */}
    </Stack.Navigator>
  );
}

function MiPropiedadScreenStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MiPropiedadScreen"
        component={MiPropiedadScreen}
        options={{
          title: "Mi Propiedad", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#f4511e", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function VisitasScreenStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="VisitasScreen"
        component={VisitasScreen}
        options={{
          title: "Visitas", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#f4511e", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function ReservasScreenStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ReservasScreen"
        component={ReservasScreen}
        options={{
          title: "Reservas", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#f4511e", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function EscanearQRScreenStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EscanearQRScreen"
        component={EscanearQRScreen}
        options={{
          title: "Escanear QR", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#f4511e", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function AyudaScreenStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AyudaScreen"
        component={AyudaScreen}
        options={{
          title: "Ayuda", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#f4511e", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function MapaScreenStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MapaScreen"
        component={MapaScreen}
        options={{
          title: "Mapa", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#f4511e", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 5 },
        }}
      >
        <Drawer.Screen
          name="Inicio"
          options={{
            drawerIcon: (config) => (
              <Ionicons reverse name="md-globe" color="#517fa4" size={25} />
            ),
          }}
          component={HomeScreenStack}
        />
        <Drawer.Screen
          name="Mi Perfil"
          options={{
            drawerIcon: (config) => (
              <Ionicons reverse name="md-person" color="#517fa4" size={25} />
            ),
          }}
          component={MiPerfilScreenStack}
        />
        <Drawer.Screen
          name="Mi Propiedad"
          options={{
            drawerIcon: (config) => (
              <Ionicons reverse name="ios-home" color="#517fa4" size={25} />
            ),
          }}
          component={MiPropiedadScreenStack}
        />
        <Drawer.Screen
          name="Visitas"
          options={{
            drawerIcon: (config) => (
              <Ionicons reverse name="ios-people" color="#517fa4" size={25} />
            ),
          }}
          component={VisitasScreenStack}
        />
        <Drawer.Screen
          name="Reservas"
          options={{
            drawerIcon: (config) => (
              <Ionicons reverse name="ios-paper" color="#517fa4" size={25} />
            ),
          }}
          component={ReservasScreenStack}
        />
        <Drawer.Screen
          name="Escanear QR"
          options={{
            drawerIcon: (config) => (
              <Ionicons reverse name="md-barcode" color="#517fa4" size={25} />
            ),
          }}
          component={EscanearQRScreenStack}
        />
        <Drawer.Screen
          name="Ayuda"
          options={{
            drawerIcon: (config) => (
              <Ionicons
                reverse
                name="md-information-circle"
                color="#517fa4"
                size={25}
              />
            ),
          }}
          component={AyudaScreenStack}
        />
        <Drawer.Screen
          name="Mapa"
          options={{
            drawerIcon: (config) => (
              <Ionicons reverse name="md-map" color="#517fa4" size={25} />
            ),
          }}
          component={MapaScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
