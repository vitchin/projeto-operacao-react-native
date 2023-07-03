import {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [operador, setOperador] = useState("");
  const [primeiroValor, setPrimeiroValor] = useState("");
  const [segundoValor, setSegundoValor] = useState("");

  function resultado(){

    if(operador == "+"){
      const v1 = parseFloat(primeiroValor);
      const v2 = parseFloat(segundoValor);
      const valor = v1 + v2;
      alert("Operação de soma: "+valor);
    }
    else if(operador == "-"){
      const v1 = parseFloat(primeiroValor);
      const v2 = parseFloat(segundoValor);
      const valor = v1 - v2;
      alert("Operação de subtração: "+valor);
    }
    else if(operador == "/"){
      const v1 = parseFloat(primeiroValor);
      const v2 = parseFloat(segundoValor);
      const valor = v1 / v2;
      alert("Operação de divisão: "+valor);
    }
    else if(operador == "*"){
      const v1 = parseFloat(primeiroValor);
      const v2 = parseFloat(segundoValor);
      const valor = v1 * v2;
      alert("Operação de multiplicação: "+valor);
    }
    else if(operador == ""){
      alert("Campo vazio!");
    }
    else{
      alert("Valor inválido");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Projeto calcular</Text>

    <Text style={styles.subtitulo}>Digite algum operador:</Text>
    
    <TextInput style={styles.inputOperador}
    value={operador} onChangeText={(operador)=> setOperador(operador)}
    placeholder="Ex: +, -, *, /"/>

    <Text style={styles.subtitulo}>1º valor:</Text>

    <TextInput style={styles.inputValor} 
    value={primeiroValor} onChangeText={(primeiroValor)=> setPrimeiroValor(primeiroValor)}
    placeholder="Digite um número"/>

    <Text style={styles.subtitulo}>2º valor:</Text>
    
    <TextInput style={styles.inputValor} 
    value={segundoValor} onChangeText={(segundoValor)=> setSegundoValor(segundoValor)}
    placeholder="Digite um número"/>
    
    <TouchableOpacity style={styles.botao} onPress={resultado}>
      <Text style={styles.textBotao}>CALCULAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 20
  },
  titulo: {
    fontSize: 22,
    textAlign: "center",
    margin: 5,
    fontWeight: 500,
    color: "#000",
  },
  subtitulo: {
    color: "#000",
    marginLeft: 10,
    marginTop: 0,
    marginBottom: 0,
    fontSize: 16,
    fontWeight: 500,
  },
  inputOperador: {
    margin: 5,
    padding: 10,
    width: 120,
    backgroundColor: "#36477A",
    borderRadius: 10,
    fontSize: 16,
    color: "#fff",
  },
  inputValor: {
    margin: 5,
    padding: 10,
    backgroundColor: "#36477A",
    borderRadius: 10,
    fontSize: 16,
    color: "#fff",
  },
  botao: {
    margin: 5,
    padding: 20,
    textAlign: "center",
    backgroundColor: "#5334F6",
    borderRadius: 10,
    fontSize: 16,
  },
  textBotao:{
    color:'#fff',
    fontSize: 16,
    fontWeight: 600,
  },
});
