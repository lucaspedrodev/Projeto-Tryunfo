import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="nome">
          nome
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="descrição">
          <textarea
            data-testid="description-input"
            name="descrição"
            id="a"
            cols="30"
            rows="10"
          >
            carta
          </textarea>
        </label>
        <label htmlFor="Atributo 1">
          Atributo 1
          <input type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor=" Atributo 2">
          Atributo 2
          <input type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="Atributo 3">
          Atributo 3
          <input type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="Imagem">
          Imagem
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="nome">
          nome
          <select data-testid="rare-input" name="" id="">
            <option value="normal"> normal </option>
            <option value="raro"> raro </option>
            <option value="muito raro"> muito raro </option>
          </select>
        </label>
        <label htmlFor="Super Trunfo">
          Super Trunfo
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="button" data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
