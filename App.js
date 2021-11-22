import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function App() {
  return (
    <>
      <View>
        <Text style={estilos.titulo}>React native ejercicio 1 - Cruceta</Text>
      </View>
      <View style={estilos.container}>
        <View style={estilos.rectanguloRed}></View>
        <View style={estilos.rectanguloRed2}></View>
        <View style={estilos.rectanguloGreen}></View>
        <View style={estilos.rectanguloGreen2}></View>
        <View style={estilos.cuadroBlue}></View>
        <View style={estilos.cuadroBlue2}></View>
        <View style={estilos.cuadroBlue3}></View>
        <View style={estilos.cuadroBlue4}></View>
        <View style={estilos.cuadroYellow}></View>
        <View style={estilos.cuadroYellow2}></View>
        <View style={estilos.cuadroYellow3}></View>
        <View style={estilos.cuadroYellow4}></View>
        <View style={estilos.cuadroRed}></View>
        <View style={estilos.cuadroRed2}></View>
        <View style={estilos.cuadroRed3}></View>
        <View style={estilos.cuadroRed4}></View>
        <View style={estilos.cuadroGreen}></View>
        <View style={estilos.cuadroGreen2}></View>
        <View style={estilos.cuadroGreen3}></View>
        <View style={estilos.cuadroGreen4}></View>
        <View style={estilos.cuadroMorado}>
          <View
            style={{
              width: 120,
              height: 120,
              backgroundColor: '#F3811C',
              borderRadius: 60,
              borderStartWidth: 60,
              borderLeftColor: '#F0A30A',
              elevation: 100, //z-index
            }}>
            <View
              style={{
                width: 80,
                height: 80,
                backgroundColor: 'blue',
                borderRadius: 60,
                elevation: 100,
                right: 40,
                top: 20,
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: 'white',
                  borderRadius: 60,
                  elevation: 100,
                  top: 15,
                  left: 15,
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text style={estilos.parrafo}>Alumna: Darián Lucia Celaya Silva </Text>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    height: 300,
  },
  titulo: {
    elevation: 99,
    paddingVertical: 8,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  parrafo: {
    elevation: 99,
    fontSize: 13,
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 110,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: '#20232a',
    textAlign: 'left',
  },

  rectanguloRed: {
    width: 320,
    height: 30,
    backgroundColor: 'red',
    elevation: 98, //z-index
  },
  rectanguloRed2: {
    width: 320,
    height: 30,
    backgroundColor: 'red',
    position: 'absolute',
    marginTop: 290,
    elevation: 98, //z-index
  },
  rectanguloGreen: {
    width: 30,
    height: 290,
    backgroundColor: 'green',
    elevation: 98, //z-index
  },
  rectanguloGreen2: {
    width: 30,
    height: 290,
    backgroundColor: 'green',
    position: 'absolute',
    marginTop: 30,
    marginLeft: 290,
    elevation: 98, //z-index
  },
  cuadroBlue: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    position: 'absolute',
    elevation: 99, //z-index
  },
  cuadroBlue2: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    position: 'absolute',
    marginLeft: 270,
    elevation: 99, //z-index
  },
  cuadroBlue3: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    position: 'absolute',
    marginLeft: 270,
    marginTop: 270,
    elevation: 99, //z-index
  },
  cuadroBlue4: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    position: 'absolute',
    marginTop: 270,
    elevation: 99, //z-index
  },
  cuadroYellow: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
    position: 'absolute',
    elevation: 97, //z-index
    marginLeft: 25,
    marginTop: 25,
  },
  cuadroYellow2: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
    position: 'absolute',
    elevation: 97, //z-index
    marginLeft: 245,
    marginTop: 25,
  },
  cuadroYellow3: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
    position: 'absolute',
    elevation: 97, //z-index
    marginLeft: 245,
    marginTop: 250,
  },
  cuadroYellow4: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
    position: 'absolute',
    elevation: 97, //z-index
    marginLeft: 25,
    marginTop: 250,
  },
  cuadroRed: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    position: 'absolute',
    marginLeft: 50,
    marginTop: 50,
    elevation: 96, //z-index
  },
  cuadroRed2: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    position: 'absolute',
    marginLeft: 220,
    marginTop: 50,
    elevation: 96, //z-index
  },
  cuadroRed3: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    position: 'absolute',
    marginLeft: 50,
    marginTop: 220,
    elevation: 96, //z-index
  },
  cuadroRed4: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    position: 'absolute',
    marginLeft: 220,
    marginTop: 220,
    elevation: 96, //z-index
  },
  cuadroGreen: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    position: 'absolute',
    marginLeft: 75,
    marginTop: 75,
    elevation: 95, //z-index
  },
  cuadroGreen2: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    position: 'absolute',
    marginLeft: 195,
    marginTop: 75,
    elevation: 95, //z-index
  },
  cuadroGreen3: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    position: 'absolute',
    marginLeft: 195,
    marginTop: 195,
    elevation: 95, //z-index
  },
  cuadroGreen4: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    position: 'absolute',
    marginLeft: 75,
    marginTop: 195,
    elevation: 95, //z-index
  },
  cuadroMorado: {
    width: 120,
    height: 120,
    backgroundColor: 'purple',
    position: 'absolute',
    marginLeft: 100,
    marginTop: 100,
    elevation: 95, //z-index
  },
});
