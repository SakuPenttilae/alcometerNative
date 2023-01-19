import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const Default = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "aquamarine",
        marginTop: Constants.statusBarHeight,
        justifyContent: "space-evenly"
    },
    heading: {
        fontSize: 30,
        textAlign: "center",
        marginTop: 30
    },
    disclaimer: {
        fontSize: 20,
        textAlign: "center",
        marginTop: 15
    },
    input: {
        borderWidth: 1,
        width: 240,
        height: 40,
        textAlign: "center",
        backgroundColor: "white"
    },
    label: {
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: "center"
    },
    header: {
        flex: 1
    },
    details: {
        flex: 3,
        alignItems: "center"
    },
    results: {
        flex:2
    },
    result: {
        textAlign: "center",
        paddingTop: 20,
        fontSize: 20,
    },
    resultText: {
        textAlign: "center",
        paddingTop: 20,
        fontSize: 20,
        paddingBottom: 20
    },
    nappiText: {
        fontWeight: "bold"
    },
    ratsia: {
        justifyContent: "flex-end",
        flex:0.5
    },
    nappi:{
        alignSelf: "center",
        width: 240,
        height: 40,
        borderWidth:1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    mustaValkoinen: {
        color:"black"
    },
    radios: {
       alignItems:"center"
    }

});

const Ratsia = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#010101",
        marginTop: Constants.statusBarHeight,
    },
    heading: {
        ...Default.heading,
        color: "white"
    },
    disclaimer: {
        ...Default.disclaimer,
        color: "white"
    },
    input: {
      ...Default.input,
      borderColor: "red"
    },
    red: {
       color:"red",
    },
    blue: {
        color:"blue"
    },
    header: {
        ...Default.header,
    },
    details: {
        ...Default.details
    }, 
    label: {
        ...Default.label,
        color:"white"
    },
    results: {
        ...Default.results
    },
    result: {
        ...Default.result,
        color:"white"
    }, 
    resultText: {
        textAlign: "center",
        paddingTop: 20,
        fontSize: 20,
        paddingBottom: 20,
        color: "white"
    },
    nappiText: {
        ...Default.nappiText,
    },
    ratsia: {
        ...Default.ratsia
    },
    nappi:{
       ...Default.nappi,
       borderColor: "blue",
    },
    mustaValkoinen: {
        color:"white"
    },
    radios: {
        ...Default.radios
    }
});

export {Ratsia, Default}
  



