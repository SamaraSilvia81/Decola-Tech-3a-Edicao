import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking
} from 'react-native';

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';

const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/100232025?v=4';
const urlToMyGitHub = 'https://github.com/SamaraSilvia81/';

const colorDarkProgressGit = 'https://color-hex.org/colors/006d32.png';
const colorLightProgressGit = 'https://cdn.crispedge.com/2bc545.png';

const App = () => {
 
  const handlePressGoToGitHub = async () =>{ // essa função só ocorre quando clicamos no button, por isso é assíncrono.
    console.log('Verificando Link');
    const res = await Linking.canOpenURL(urlToMyGitHub) //Linking é uma API para abrir links.
    if(res){
      console.log('Link aprovado');
      console.log('Abrindo Link...');
      await Linking.openURL(urlToMyGitHub);
    }
  };

  return (
    <SafeAreaView style = {style.container}> 
    <StatusBar backgroundColor={colorGitHub} barStyle='light-content'/>
      <View style = {style.content}>
        <Image 
          accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
          style = {style.avatar} 
          source={{uri:imageProfileGitHub}}
        /> 
        <Text 
          accessibilityLabel='Nome: Samara Silvia'
          style = {[style.defaultText,style.name]}>
          Samara Silvia
        </Text>
        <Text 
          accessibilityLabel='Nickname: SamaraSilvia81'
          style = {[style.defaultText,style.nickname]}>
          SamaraSilvia81
        </Text>
        <Text 
          accessibilityLabel='Descrição: Programadora em formação | @samarasilvia13 '
          style = {[style.defaultText,style.description]}>
          Programadora em formação | @samarasilvia13
        </Text>

        <View style = {style.content3} >

        <View style = {style.content2} >
            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

          </View>

          <View style = {style.content2} >
            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

          </View>

          <View style = {style.content2} >

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

          </View>
     
          <View style = {style.content2} >

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            </View>

            <View style = {style.content2} >
            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorLightProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

          </View>
          
          <View style = {style.content2} >
            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

            <Image 
              accessibilityLabel='Samara com luz ambiente e fundo decorativo de planta e jarro com frutas'
              style = {style.darkProgress} 
              source={{uri:colorDarkProgressGit}}
            /> 

          </View>

        </View>

       <Pressable onPress={handlePressGoToGitHub}>
          <View style={style.button}>
            <Text style={[style.defaultText,style.textButton]}> Open in GitHub </Text>
          </View>
        </Pressable>

      </View>

    </SafeAreaView>
  );
};

//SaveAreaView - Protege o componente de sair para um área que ele não tem acesso.
// Flex-Box - Forma de alinhar os componentes na tela.
// Style - Aceita um estilo ou array de estilo.

export default App;

const style = StyleSheet.create({
  container:{ // columms
    backgroundColor: colorGitHub,
    flex:1, // Expandir a view para tela inteira.
    justifyContent:'center', // ou podia colocar o alignItems
    // flexDirection:'row', /// Se eu quiser mudar a estrutura de coluna para linha.
  },
  content:{ // Fica após o container e abrange o conteúdo do site/app.
    alignItems:'center',
    padding:20,
  },
  content2:{ // Fica após o container e abrange o conteúdo do site/app.
    flexDirection:'row',
    padding:1,
  },
  content3:{ // Fica após o container e abrange o conteúdo do site/app.
    padding:20,
  },
  avatar:{
    height:200, // obrigatório
    width:200, // obrigatório
    borderRadius:100, // metade dos px da imagem.
    borderColor: 'white',
    borderWidth:2,
  },
  defaultText:{
    color:colorFontGitHub,
  },
  name:{
    marginTop:20,
    fontSize:24,
    fontWeight:'bold',
  },
  nickname:{
    fontSize:18,
    color: colorDarkFontGitHub,
  },
  description:{
    fontSize:14,
    fontWeight:'bold',
    marginBottom:6,
  },
  button:{
    marginTop:20,
    backgroundColor:colorDarkFontGitHub,
    borderRadius:10,
    padding:20,
  },
  textButton:{
    fontSize:16,
    fontWeight:'bold',
  },
  darkProgress:{
    height:10, // obrigatório
    width:10, // obrigatório
    borderRadius:2.5, // metade dos px da imagem.
    marginLeft:2,
  },
  lightProgress:{
    height:15, // obrigatório
    width:15, // obrigatório
    borderRadius:5, // metade dos px da imagem.
  }
});