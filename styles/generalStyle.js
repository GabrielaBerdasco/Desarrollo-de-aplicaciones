import { StyleSheet } from "react-native";


const generalStyle = StyleSheet.create({
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
    },
    margins: {
        margin: 10
    }
  });

  export default generalStyle