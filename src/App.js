import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      data: [],
    };
  }

  onInputChange = ({ target }) => {
    const { type, name } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const { cardName, cardDescription,
        cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3 } = this.state;
      const noventa = 90;
      const duzentosEDez = 210;
      if ((cardName && cardDescription && cardImage && cardRare !== '')
        && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= duzentosEDez
        && Number(cardAttr1) >= 0 && Number(cardAttr1) <= noventa
        && Number(cardAttr2) >= 0 && Number(cardAttr2) <= noventa
        && Number(cardAttr3) >= 0 && Number(cardAttr3) <= noventa) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  };

  onSaveButtonClick = () => {
    const { cardTrunfo, cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare } = this.state;
    if (cardTrunfo) this.setState({ hasTrunfo: true });
    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      data: [...prevState.data, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
      }],
    }
    ));
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      data,
    } = this.state;
    return (
      <div>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          hasTrunfo={ hasTrunfo }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {
          data.map((e) => (<Card
            key={ e.cardName }
            cardName={ e.cardName }
            cardDescription={ e.cardDescription }
            cardAttr1={ e.cardAttr1 }
            cardAttr2={ e.cardAttr2 }
            cardAttr3={ e.cardAttr3 }
            cardImage={ e.cardImage }
            cardRare={ e.cardRare }
            cardTrunfo={ e.cardTrunfo }
          />))
        }
      </div>
    );
  }
}

export default App;
