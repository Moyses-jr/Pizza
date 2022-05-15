import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList , TextInput } from 'react-native';

const pizzas = [
  {tipo: "salgada", sabor: "Calabresa com azeitonas pretas"},
  {tipo: "salgada", sabor: "Ahláfonte"},
  {tipo: "salgada", sabor: "De casa"},
  {tipo: "salgada", sabor: "Portuguesa"},
  {tipo: "salgada", sabor: "Marguerita"},
  {tipo: "doce", sabor: "Creme de avelã"},
  {tipo: "doce", sabor: "Brigadeiro"},
  {tipo: "doce", sabor: "Califónia"}
];

export default function App() {
  const [tipo,setTipo] = useState("salgada");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={"Tipo de Pizza"}
        onChangeText={setTipo}
        value={tipo}
      />
      <FlatList
        data={pizzas.filter((pizza) => pizza.tipo === tipo)}
        renderItem={({item}) => <Text style={styles.item}>{item.sabor}</Text>}
      />
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
  },
  item: {
    backgroundColor: "#99CCFF",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});
