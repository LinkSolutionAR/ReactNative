import React, { useEffect } from "react";
import { View, Text, Button, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./screens/MainTabScreen";

import { DrawerContent } from "./screens/DrawerContent";
import SupportScreen from "./screens/SupportScreen";
import SettingsScreen from "./screens/SettingsScreen";
import BookmarkScreen from "./screens/BookmarkScreen";

import { AuthContext } from "./components/context";

import RootStackScreen from "./screens/RootStackScreen";
import { ActivityIndicator } from "react-native-paper";

import constGlobal from "./constGlobal";

const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(
    () => ({
      signIn: (userName, password) => {
        let userToken;
        let LoginValidado = false;
        for (var i = 0; i < constGlobal.USER_LIST.length; i++) {
          var tupla = constGlobal.USER_LIST[i];
          if (userName == tupla.USER_key && password == tupla.PASSWORD_key) {
            userToken = "dfgdfg";
            LoginValidado = true;
          }
        }
        if (!LoginValidado) {
          Alert.alert("ERROR", "Usuario o Contraseña incorrecto!");
        }
        dispatch({ type: "LOGIN", id: userName, token: userToken });
      },

      signOut: () => {
        dispatch({ type: "LOGOUT" });
      },
      signUp: () => {
        setUserToken("fgkj");
        setIsLoading(false);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(() => {
      // setIsLoading(false);
      dispatch({ type: "RETRIEVE_TOKEN", token: "dfklj" });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken != null ? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
