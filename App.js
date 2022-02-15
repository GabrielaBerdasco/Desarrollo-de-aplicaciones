import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, FlatList, Modal } from 'react-native';

export default function App() {

  const [textInput, setTextInput] = useState("")
  const [itemList, setItemList] = useState([])

  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const handleChangeText = (text) => {
    setTextInput(text)
  }

  const handleOnPress = () => {
    setItemList([
      ...itemList,
      {
        value: textInput,
        id: Math.random().toString(),
      },
    ])
    setTextInput("")
  }

  const handleOnDelete = (item) => () => {
    setModalVisible(!modalVisible)
    setItemSelected(item)
  }

  const handleConfirmDelete = () => {
    const { id } = itemSelected
    setItemList(itemList.filter( item => item.id !== id ))
    setModalVisible(!modalVisible)
    setItemSelected({})
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainText}>Hola! Elabora una lista de tares</Text>
        <TextInput 
          style={styles.input} 
          value={textInput}
          placeholder="Tarea" 
          onChangeText={handleChangeText}
        />
        <Button 
          title="AGREGAR" 
          onPress={handleOnPress}
        />
      </View>
      <FlatList 
        data = {itemList}
        renderItem = { ( {item} )=> (
          <View style={styles.items}>
            <Text style={styles.subText}>{item.value}</Text>
            <Button onPress={handleOnDelete(item)} title="X" />
          </View>
          ) 
        }
        keyExtractor={item => item.id}
      />
      <Modal animationType='slide' visible={modalVisible}>
        <View>
          <View>
            <Text style={styles.mainText}>¿Está seguro que desea eliminar esta tarea?</Text>
            <Text style={styles.subText}>{itemSelected.value}</Text>
          </View>
          <View>
            <Button 
              onPress={handleConfirmDelete} 
              title='CONFIRMAR'
            />
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomColor: 'violet',
    borderBottomWidth: 1,
    marginBottom: 3
  },
  mainText: {
    color: "darkcyan",
    fontWeight: "bold",
    fontSize: 20,
  },
  subText: {
    color: "black",
    margin:5,
    fontStyle: "italic",
    fontSize: 18
  },
  items: {
    width:250,
    padding: 25,
    marginVertical: 15,
    backgroundColor: "seashell",
    borderColor: "violet",
    borderWidth: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
  }
});
