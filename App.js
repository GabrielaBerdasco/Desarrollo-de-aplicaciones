import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, Button, View, FlatList, Modal } from 'react-native';
import AddItem from './Components/AddItem';
import ConfirmationModal from './Components/ConfirmationModal';
import generalStyle from './styles/generalStyle';

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

  const handleClearAll = () => {
    setModalVisible(!modalVisible)
    setItemList([])
  }

  return (
    <View style={generalStyle.container}>
      <AddItem 
        textInput={textInput}
        handleChangeText={handleChangeText}
        handleOnPress={handleOnPress}      
      />
      <FlatList 
        data = {itemList}
        renderItem = { ( {item} )=> (
          <View style={generalStyle.items}>
            <Text style={generalStyle.subText}>{item.value}</Text>
            <Button onPress={handleOnDelete(item)} title="X" />
          </View>
          ) 
        }
        keyExtractor={item => item.id}
      />
      <ConfirmationModal 
      modalVisible={modalVisible}
      itemSelected={itemSelected}
      handleConfirmDelete={handleConfirmDelete}
      handleClearAll={handleClearAll}
      />
      <StatusBar style="auto" />
    </View>
  );
}
