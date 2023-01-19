import { useState } from 'react';
import { Text, View, Button, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Default, Ratsia } from './styles/Styles';
import NumericInput from 'react-native-numeric-input';
import { RadioButton} from 'react-native-paper';

export default function App() {

  const [ratsia, setRatsia] = useState(false)
  const [bottle, setBottle] = useState(0)
  const [hours, setHours] = useState(0)
  const [weight, setWeight] = useState(0)
  const [result, setResult] = useState(0)
  const [gender, setGender] = useState(0.7)
  const [isRan, setRan] = useState(false)

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

      setRan(true)
      
      setResult(final/ (weight*gender))

      if (result<0 || final<0) {
        setResult(0)
      }
    }   
  }
 
  /*Changing colors, and some text depending on one condition*/ 

  const lights = <Text style={Ratsia.red}>*<Text style={Ratsia.blue}>*</Text></Text>  
  const buttons = ratsia ? "red" : "#b5e8db"
  const buttons2 = ratsia ? "blue" : "#b5e8db"
  const flipColor = ratsia ? "white" : "black"   
  const redBlack = ratsia ? "blue" : "black"
  const redBlue = ratsia ? "red" : "black"  
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
            iconStyle={{color: flipColor}} 
            borderColor={flipColor} 
            textColor={flipColor} 
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
            iconStyle={{color: flipColor}} 
            borderColor={flipColor} 
            textColor={flipColor} 
            rightButtonBackgroundColor={buttons} 
            leftButtonBackgroundColor={buttons2} 
            value={hours} 
            onChange={v=>setHours(v)}
          />
          <RadioButton.Group onValueChange={v => setGender(v)} value={gender}>
            <View style={theme.radios}>
              <Text style={[theme.mustaValkoinen, {paddingTop:20}]}>Mies</Text>
              <RadioButton uncheckedColor={redBlack} color={redBlue} value={0.7} />
            </View>
            <View style={theme.radios}>
              <Text style={theme.mustaValkoinen}>Nainen</Text>
              <RadioButton uncheckedColor={redBlack} color={redBlue} value={0.6} />
            </View>
          </RadioButton.Group>
          <TouchableOpacity onPress={()=>calculate()}  style={theme.nappi}>
              <Text style={theme.nappiText}>Laske promillet</Text>
          </TouchableOpacity>
        </View>
        <View style={theme.results}>

          {(result==0 && isRan) && 
          <Text style={[theme.result, {color:"green"}]}>
            {result.toFixed(3)} promillea
          </Text>
          }
          {(result>0 && isRan && result<0.5) && 
          <Text style={[theme.result, {color:"yellow"}]}>
            {result.toFixed(3)} promillea
          </Text>
          }
          {(result>=0.5 && isRan && result<1.2) && 
          <Text style={[theme.result, {color:"orange"}]}>
            {result.toFixed(3)} promillea
          </Text>
          }
          {(result>1.2 && isRan) && 
          <Text style={[theme.result, {color:"red"}]}>
            {result.toFixed(3)} promillea
          </Text>
          }

          { (result>1.2 && ratsia==false) && 
          <Text style={theme.resultText}>Noniin ja sitten otetaan vaan vettä tästä eteenpäin.</Text>
          }
          { (result>0.5 && result<1.2 && ratsia==false) && 
          <Text style={theme.resultText}>Ite kyl lopettaisin.</Text>
          }
          { (result>0 && result<0.5 && ratsia==false) && 
          <Text style={theme.resultText}>Pikku hiprakka on ihan jees.</Text>
          }
          { (result==0 && ratsia==false && isRan) && 
          <Text style={theme.resultText}>Hyvä. Ei kannatakkaan ryypätä.</Text>
          }

          { (result>1.2 && ratsia==true) && 
          <Text style={theme.resultText}>Törkeän rattijuopomuksen raja ylitetty. Sinua epäillään törkeästä rattijuopomuksesta, sekä liikenteen vaarantamisesta.</Text>
          }
          { (result>=0.5 && result<1.2 && ratsia==true) && 
          <Text style={theme.resultText}>Sakot, putkaan, ja kortti poies.</Text>
          }
          { (result>0 && result<0.5 && ratsia==true) && 
          <Text style={theme.resultText}>Lukemaa oli, mutta alta rangaistavuuden.</Text>
          }
          { (result==0 && ratsia==true && isRan) && 
          <Text style={theme.resultText}>Nollaa näyttää, jatka vaan.</Text>
          }
        </View>
        <View style={theme.ratsia}>
          <Button title={buttonTitle} onPress={()=> setRatsia(!ratsia)} />
        </View>
      </View>
    </ScrollView>
  )
}


