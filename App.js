import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Default, Ratsia } from './styles/Styles';
import NumericInput from 'react-native-numeric-input';
import { RadioButton} from 'react-native-paper';



export default function App() {

  const [ratsia, setRatsia] = useState(false)
  const [bottle, setBottle] = useState(0)
  const [hours, setHours] = useState(0)
  const [weight, setWeight] = useState(0)
  const [result, setResult] = useState(0)
  const [resultText, setResultText] = useState("")
  const [gender, setGender] = useState(0.7)

  const litres = bottle * 0.33
  const promille = litres * 8 * 4.5
  const burn = weight/10
  const final = promille - (burn*hours)

  const calculate = () => {

    if (bottle==0) {
      setResult(0)
    }

    if (weight==0) {
      alert("Pistä paino sille kuuluvaan kenttään")
    }

    if (weight>0 && gender>0) {
      setResult(final/ (weight*gender))

      if (result<0 || final<0) {
        setResult(0)
      }

      if (result>0.51 && ratsia==false) {
        setResultText("Ite kyllä lopettaisin jo.")
      } else if (result<0.51 && result>0 && ratsia==false) {
        setResultText("Pikku hiprakka on kyl ihan jees")
      } else if (result==0 && ratsia==false) {
        setResultText("Hyvä. Ei kannatakkaan juoda.")
      }

      if (result>1.2 && ratsia==true) {
        setResultText("Törkeän rattijuopomuksen raja ylitetty. Sinua epäillään törkeästä rattijuopomuksesta, sekä liikenteen vaarantamisesta.")
      } else if (result>0.50 && ratsia==true) {
        setResultText("Putkaan ja kortti poies.")
      } else if (result<0.51 && result>0 && ratsia==true) {
        setResultText("Lukemaa oli, mutta alta rangaistavuuden.")
      } else if (result==0 && ratsia==true) {
        setResultText("Nollaa näyttää, jatka vaan.")
      }
    }   
  }

  const lights = <Text style={Ratsia.red}>*<Text style={Ratsia.blue}>*</Text></Text>  

  const buttons = ratsia ? "red" : "#b5e8db"
  const buttons2 = ratsia ? "blue" : "#b5e8db"
  const textColor = ratsia ? "white" : "black"     
  const theme = ratsia ? Ratsia : Default;
  const title = ratsia ? <Text>{lights} AJOIT RATSIAAN! {lights}</Text> : "Alkometri"
  const buttonTitle = ratsia ? "Tavallinen" : "Lähde autolla hakemaan lisää olutta"
  const disclaimer = ratsia ? "Konstaapeli: Pitkä puhallus tohon vaan." : "Laskee veren alkoholipitoisuuden"

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={theme.body}>
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
          </View>
          <RadioButton.Group onValueChange={v => setGender(v)} value={gender}>
            <View>
              <Text style={theme.mustaValkoinen}>Mies</Text>
              <RadioButton value={0.7} />
            </View>
            <View>
              <Text style={theme.mustaValkoinen}>Nainen</Text>
              <RadioButton value={0.6} />
            </View>
          </RadioButton.Group>
          <View style={theme.results}>
            <TouchableOpacity onPress={()=>calculate()}>
              <View style={theme.nappi}>
                <Text style={theme.calc}>Laske promillet</Text>
              </View>
            </TouchableOpacity>
            {result>0 && 
            <Text style={theme.result}>
              {result.toFixed(3)} promillea
            </Text>
            }
            <Text style={theme.result}>
              {resultText}
            </Text>
          </View>
          <View style={theme.ratsia}>
          <Button title={buttonTitle} onPress={()=> setRatsia(!ratsia)} />
          </View>
        </View>
    </ScrollView>
  )
}


