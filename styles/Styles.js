import { StyleSheet, TouchableWithoutFeedback } from "react-native";
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
        flex:1
    },
    result: {
        textAlign: "center",
        marginTop: 30,
        fontSize: 20

    },
    calc: {
        textAlign:"center",
        borderWidth:1,
        width: 240,
        height: 40,
        backgroundColor: "white"
    },
    ratsia: {
        justifyContent: "flex-end",
        flex:0.25
    },
    nappi:{
        alignItems: "center",
        height: 40
    },
    mustaValkoinen: {
        color:"black"
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
      ...Default.input
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
    calc: {
        ...Default.calc,
        borderColor: "white",
        color: "black"
    },
    ratsia: {
        ...Default.ratsia
    },
    nappi:{
        alignItems: "center",
        height: 40
    },
    mustaValkoinen: {
        color:"white"
    }
});

export {Ratsia, Default}
  



