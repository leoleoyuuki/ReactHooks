import { StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useEffect, useState, useRef } from 'react';
 
 
 
export default function App() {
  const[valor,setValor]=useState("Ayoub")
 
  // useEffect(()=>{
  //   console.log("Iniciando...")
  // })
 
  // useEffect(()=>{console.log("Iniciando 02 Effect"+valor)},[valor])
 
  // const dados =useRef()
  // dados.current = "Ayoub"
 
  // useEffect(()=>{
  //   console.log(dados.current);
  // })
  const dados = useRef()
  const input = useRef()
 
 
  function salvar(){
    dados.current = valor;
  }
 
  return (
    <View style={styles.container}>
      <Text>TURMA 2TDSPF</Text>
      <Text>{valor}</Text>
      <Button title="CLIQUE AQUI" onPress={()=>setValor(valor+2)} />
      <TextInput
      ref={input}
        placeholder=" DIGITE SEU NOME "
        style={{borderWidth:1,width:300,height:50,borderRadius:15}}
      />
      <Button title = "LIMPAR" onPress={()=>input.current.clear()}/>
      <Button title = "INCLUIR FOCUS" onPress={()=>input.current.focus()}/>
      <Button title = "SALVAR A REFERENCIA" onPress={salvar}/>
      <Button title = "MOSTRAR VALOR SALVO NA REF" onPress={()=>{
        console.log(dados.current)
      }}/>
      <Button title="SET NATIVE PROPS" onPress={()=>{
        input.current.setNativeProps({
          borderColor: 'red',
          borderWidth: 3,
          borderRadius: 15
        })
      }} />
      <StatusBar style="auto" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:15
  },
});
 