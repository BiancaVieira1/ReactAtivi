import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import Api from './Api';

const image = { uri: "https://f.i.uol.com.br/fotografia/2020/04/14/15869039075e963b63207f2_1586903907_3x2_xl.jpg" };


export default function Cubatao() {
  const [dados, setDados] = useState("");

  const [cidade, setCidade] = useState('Cubatao')
  async function carregaDados(){
    const response = await Api.get(`weather?array_limit=10&fields=only_results,temp,city_name,description,time,wind_speedy,forecast,max,min,date&key=c6186edf&city_name=${cidade},SP`)
    setDados(response.data.forecast);
  
  }

  function limpar(){
    setDados("");
  } 
  return (
    <View style={styles.container}>

<ImageBackground  style={{
            position: "absolute",
            height: '100%',
            width: '100%'
          }}source={image}>
    </ImageBackground>

      <View style={styles.header}>
      <Text style={styles.textoTitulo}>Previsão de 10 dias </Text>
      <Text style={styles.textoTitulo}>Clique no botão abaixo.</Text>
    
     
      </View>
      <FlatList
          data={dados}
          renderItem={({item}) => {
            return (
              <View style={styles.tempo}>
                <Text>Data: {item.date}</Text>
                <Text>Max: {item.max}</Text>
                <Text>Min: {item.min}</Text>
                <Text>Min: {item.description}</Text>
              </View>
            );
          }}
        
        />

      <View style={styles.blocos}>
        <TouchableOpacity
        style={styles.btn}
        onPress={carregaDados}
        >
          <Text style={styles.btnTexto}>Pesquisar</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.btn}
        onPress={limpar}
        >
          <Text style={styles.btnTexto}>Limpar</Text>
        </TouchableOpacity>

      </View>
      
        
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempo:{
    marginRight: '40%',
    marginBottom: 20,
    width: '70%',
    padding: 30,
    borderRadius: 15,  
    backgroundColor: '#F2979F',
  },
  textoTitulo: {
    bottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
  },
  header: {
    margin: 40
  },
  blocos: {
    fontSize: 20,
  },
  texto: {
    color: '#fff',
    fontSize: 20,
    marginTop: '4%',
    textAlign: 'center'
  },
  input: {
    borderBottomWidth: 2,
    width: 265,
    height: 35,
    fontSize: 20,
    borderColor: '#4281F5'
  },
  btn: {
    width: 330,
    height: 40,
    backgroundColor: '#D56595',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  btnTexto: {
    fontSize: 24,
    color: '#fff'
  }
});