import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Button, TextInput, ScrollView } from 'react-native';
import { Default, Ratsia } from './styles/Styles';
import NumericInput from 'react-native-numeric-input';


export default function App() {

  const [ratsia, setRatsia] = useState(false)
  const [bottle, setBottle] = useState(0)
  const [hours, setHours] = useState(0)
  const [weight, setWeight] = useState(0)

  let lights =  <Text style={Ratsia.red}>*<Text style={Ratsia.blue}>*</Text></Text>
 
  const iconColor = ratsia ? "white" : "black"
  const numInputBorderColor = ratsia ? "white" : "black"
  const buttons = ratsia ? "red" : "#b5e8db"
  const buttons2 = ratsia ? "blue" : "#b5e8db"
  const textColor = ratsia ? "white" : "black"
  const theme = ratsia ? Ratsia : Default;
  const title = ratsia ? <Text>{lights} AJOIT RATSIAAN! {lights}</Text> : "Alkometri"
  const buttonTitle = ratsia ? "Tavallinen" : "Lähde autolla hakemaan lisää olutta"
  const disclaimer = ratsia ? "Konstaapeli: Puhallustesti." : "Laskee veren alkoholipitoisuuden"

  function maxDrinks(){
    alert("You can't enter more than 48 drinks")
  }

  return (
    <ScrollView contentContainerStyle={
      theme.body
      }>
      <View style={theme.header}>
      <Text style={theme.heading}>{title}</Text>
      <Text style={theme.disclaimer}>{disclaimer}</Text>
      </View>
        <View style={theme.details}>
          <Text style={theme.label}>Paino (kg)</Text>
          <TextInput inputMode="numeric" keyboardType='number-pad' value={weight} onChangeText={v=>setWeight(Math.floor(Number(v)))} style={theme.input}/>
          <Text style={theme.label}>Juodut keppanat</Text>
          <NumericInput minValue={0} totalHeight={40} totalWidth={240} iconStyle={{color: iconColor}} borderColor={numInputBorderColor} textColor={textColor} rightButtonBackgroundColor={buttons2} leftButtonBackgroundColor={buttons} value={bottle} onChange={v=>setBottle(v)}/>
          <Text style={theme.label}>Kuinka monta tuntia sitten aloitit juomisen</Text>
          <NumericInput minValue={0} totalHeight={40} totalWidth={240} iconStyle={{color: iconColor}} borderColor={numInputBorderColor} textColor={textColor} rightButtonBackgroundColor={buttons} leftButtonBackgroundColor={buttons2} value={hours} onChange={v=>setHours(v)}/>

        </View>
        <Button style={{justifyContent: "flex-start"}} title={buttonTitle} onPress={()=> setRatsia(!ratsia)} />
    </ScrollView>
  )
}


