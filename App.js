import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Default, Ratsia } from './styles/Styles';
import NumericInput from 'react-native-numeric-input';
import { CheckBox } from '@rneui/base';


export default function App() {

  const [ratsia, setRatsia] = useState(false)
  const [bottle, setBottle] = useState(0)
  const [hours, setHours] = useState(0)
  const [weight, setWeight] = useState(0)
  const [male, setMale] = useState(false)
  const [female, setFemale] = useState(false)
  const [gender, setGender] = useState(0)
  const [result, setResult] = useState(0)
  const [resultText, setResultText] = useState("")

  const litres = bottle * 0.33
  const promille = litres * 8 * 4.5
  const burn = weight/10
  const final = promille - (burn*hours)

  const calculate = () => {

    if (bottle==0) {
      setResult(0)
    }

    if (final<=0) {
      setResult(0)
    }

    if (weight==0) {
      alert("Pistä paino sille kuuluvaan kenttään")
    }

    if (weight>0 && gender>0) {
        setResult(final/ (weight*gender))

      if (result>0.51 && ratsia==false) {
        setResultText("Ite kyllä lopettaisin jo.")
      } else if (result<0.51 && result>0 && ratsia==false) {
        setResultText("Pikku hiprakka on kyl ihan jees")
      } else if (result==0 && ratsia==false) {
        setResultText("Hyvä. Ei kannatakkaan juoda.")
      }

      if (result>0.51 && ratsia==true) {
        setResultText("Putkaan ja kortti poies.")
      } else if (result<0.51 && result>0 && ratsia==true) {
        setResultText("Lukemaa oli, mutta alta rangaistavuuden.")
      } else if (result==0 && ratsia==true) {
        setResultText("Nollaa näyttää, jatka vaan.")
      }

    }

      
      
  }
  
  function genderMale(){
    setGender(0.7)
    setFemale(false)
  }

  function genderFemale(){
    setGender(0.6)
    setMale(false)
  }

  let lights =  <Text style={Ratsia.red}>*<Text style={Ratsia.blue}>*</Text></Text>
 
  const buttons = ratsia ? "red" : "#b5e8db"
  const buttons2 = ratsia ? "blue" : "#b5e8db"
  const textColor = ratsia ? "white" : "black"
  const theme = ratsia ? Ratsia : Default;
  const title = ratsia ? <Text>{lights} AJOIT RATSIAAN! {lights}</Text> : "Alkometri"
  const buttonTitle = ratsia ? "Tavallinen" : "Lähde autolla hakemaan lisää olutta"
  const disclaimer = ratsia ? "Konstaapeli: Puhallus tohon vaan." : "Laskee veren alkoholipitoisuuden"

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
          <TextInput 
            inputMode="numeric"
            keyboardType='number-pad' 
            value={weight} 
            onChangeText={v=>setWeight(Math.floor(Number(v)))} 
            style={theme.input}
          />
            <Text style={theme.label}>Juodut keppanat</Text>
            <NumericInput 
            minValue={0} 
            totalHeight={40} 
            totalWidth={240} 
            iconStyle={{color: textColor}} 
            borderColor={textColor} 
            textColor={textColor} 
            rightButtonBackgroundColor={buttons2} 
            leftButtonBackgroundColor={buttons} 
            value={bottle} 
            onChange={v=>setBottle(v)}
          />
          <Text style={theme.label}>Kuinka monta tuntia sitten aloitit juomisen</Text>
          <NumericInput 
            minValue={0} 
            totalHeight={40} 
            totalWidth={240} 
            iconStyle={{color: textColor}} 
            borderColor={textColor} 
            textColor={textColor} 
            rightButtonBackgroundColor={buttons} 
            leftButtonBackgroundColor={buttons2} 
            value={hours} 
            onChange={v=>setHours(v)}
          />
          <CheckBox 
            title="Mies" 
            checked={male}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={genderMale}
          />
          <CheckBox 
            title="Nainen" 
            checked={female}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={genderFemale}
          />
        </View>
        <View style={theme.results}>
          <TouchableOpacity onPress={()=>calculate()}>
            <View style={theme.nappi}>
              <Text style={theme.calc}>Laske promillet</Text>
            </View>
          </TouchableOpacity>
          <Text style={theme.result}>
            {result.toFixed(3)} promillea
          </Text>
          <Text style={theme.mustaValkoinen}>
            {resultText}
          </Text>
        </View>
        
        <View style={theme.ratsia}>
         <Button title={buttonTitle} onPress={()=> setRatsia(!ratsia)} />
        </View>
        
    </ScrollView>
  )
}


