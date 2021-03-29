//public/components/Add.js
import React from "react";
import Button from "./Button";

import Modal from "react-modal";
import axios from "axios";
import { Link } from "react-router-dom";

var querystring = require("querystring");

class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      make: "",
      model: "",
      location: "",
      cost: "",
      value: "",
      purchase_date:"",
      messageFromServer: "",
      modalIsOpen: false,
    };

    this.onClick = this.onClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.insertNewExpense = this.insertNewExpense.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  openModal() {
    this.setState({
      modalIsOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      name: "",
      make: "",
      model: "",
      location: "",
      cost: "",
      value: "",
      purchase_date:"",
      messageFromServer: "",
    });
  }
  
  componentDidMount() {
   
  }

  componentWillReceiveProps(nextProps) {

    this.setState({
      year: nextProps.selectedYear,
    });

  }

  onClick(e) {
    this.insertNewExpense(this);
    this.props.onUpdate(this.state);
    //
  }

  insertNewExpense(e) {
    axios.post(
        "/insert-electronics",
        querystring.stringify({
          name: e.state.name,
          make: e.state.make,
          model: e.state.model,
          location: e.state.location,
          cost: e.state.cost,
          value: e.state.value,
          purchase_date: e.state.purchase_date
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(function (response) {
        e.setState({
          messageFromServer: response.data,
        });
      });
  }

  handleTextChange(e) {
    if (e.target.name == "name") {
      this.setState({
        name: e.target.value,
      });
    }
    if (e.target.name == "make") {
      this.setState({
        make: e.target.value,
      });
    }
  }

  render() {
    if (this.state.messageFromServer == "") {
      return (
        <div>
          
          <Button label="Add" onClick={this.openModal}>
            
          </Button>

          <Modal
            isOpen={this.state.modalIsOpen}
            appElement={document.getElementById('root')} 
            onRequestClose={this.closeModal}
            ariaHideApp={false}
            className="Modal"
          >
            
            <Button label="Close" onClick={this.closeModal}></Button>
            
            <fieldset>

              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleTextChange}
              ></input>

              <label htmlFor="amount">Make:</label>
              <input
                type="text"
                id="make"
                name="make"
                value={this.state.make}
                onChange={this.handleTextChange}
              ></input>
              
            </fieldset>

            <Button label="Add New Electronics" onClick={this.onClick}>
                Add New Expense
            </Button>

          </Modal>

        </div>
      );
    } else {
      return (
        <div>

          <Button label="Add" onClick={this.openModal}></Button>

          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Add Expense"
            className="Modal"
          >

            <h3>{this.state.messageFromServer}</h3>
            <Button label="Close Modal" onClick={this.closeModal}></Button>

          </Modal>
        </div>
      );
    }
  }
}
export default Add;
