import react from "react";
import { Text, Button, View, Modal } from 'react-native';
import generalStyle from "../styles/generalStyle";

const ConfirmationModal = ({ modalVisible, itemSelected, handleConfirmDelete, handleClearAll }) => {


    return (
        <Modal animationType='slide' visible={modalVisible}>
        <View>
          <View>
            <Text style={generalStyle.mainText}>¿Está seguro que desea eliminar esta tarea?</Text>
            <Text style={generalStyle.subText}>{itemSelected.value}</Text>
          </View>
          <View style={generalStyle.margins}>
            <Button 
              onPress={handleConfirmDelete} 
              title='CONFIRMAR'
            />
          </View>
          <View style={generalStyle.margins}>
              <Button
                onPress={handleClearAll}
                title='ELIMINAR TODAS LAS TAREAS'
              />
          </View>
        </View>
      </Modal>
    )
}


export default ConfirmationModal