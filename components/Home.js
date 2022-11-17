import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, } from "react-native";

const image = { uri: "https://f.i.uol.com.br/fotografia/2020/04/14/15869039075e963b63207f2_1586903907_3x2_xl.jpg" };

export default function Home({navigation}){
    return(

        <View style={styles.bloco}>

<ImageBackground  style={{
            position: "absolute",
            height: '100%',
            width: '100%'
          }}source={image}>
    </ImageBackground>
        
            <Text style={styles.texto}>PREVISÃO DO TEMPO</Text>

            <Text style={styles.texto}>Cidades litorâneas: </Text>

            <View>
                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Mongagua")}>
                    <Text style={styles.textBtn}>Mongaguá</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Itanhaem")}>
                    <Text style={styles.textBtn}>Itanhaém</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("SaoVicente")}>
                    <Text style={styles.textBtn}>São Vicente</Text>
                </TouchableOpacity>


                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Santos")}>
                    <Text style={styles.textBtn}>Santos</Text>
                </TouchableOpacity>

                
                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Cubatao")}>
                    <Text style={styles.textBtn}>Cubatão</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    bloco: {
        flex: 1,
        backgroundColor: '#7FFFD4',
        alignItems: 'center',
        justifyContent: 'center',  
    },
    texto:{
        fontStyle: 'verdana',
        bottom: 16,
        fontSize: 30,
        textAlign: 'center',
        color: '#fff'
    },
    btn: {
        backgroundColor: '#D56595',
        marginTop: 20,
        width: 180,
        height: 50,
        marginLeft: '5%',
        borderRadius: 10,
        
    cursor:'pointer',
    overflow: 'hidden',
    outline:'none',
    },
    textBtn: {
        fontSize:20,
        color: '#fff',
        textAlign: 'center',
        top: 9
    },
});
