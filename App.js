import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: 'A perseverança é a mãe da boa sorte.',
      img: require('./assets/CookieClosed.jpg')
    }
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.frases =
      ['Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.',
        'Quanto mais duro eu trabalho, mais sorte eu tenho.',
        'Homens fracos acreditam na sorte, Homens fortes acreditam em causa e efeito.',
        'Não ser amado é falta de sorte, mas não amar é a própria infelicidade.',
        'Aquilo a que chamas sorte é o cuidado com os pormenores.',
        'O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.',
        'A perseverança é a mãe da boa sorte.',
        'Destino não é uma questão de sorte, mas uma questão de escolha'
      ]
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: this.frases[numeroAleatorio],
      img: require('./assets/CookieOpened.jpg')
    })
  }



  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/CookieClosed.jpg')}
          style={styles.img}
        />
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7d22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'dd7d22'
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7d22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
    


})
export default app;