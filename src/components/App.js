//public/components/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import DataTable from './data-table';


import Logo from './Logo';
import Add from './Add';

import Update from './Update';
import Delete from './Delete';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { electronics: [] };
    this.changeValue = this.changeValue.bind(this);
  }

  componentDidMount(){
    this.getElectronics();
  }

  componentWillReceiveProps(nextProps){
    this.getElectronics();
  }

  changeValue = () => {
    this.getElectronics();
  }


  getElectronics = () => {
    axios.get('/getAllElectronics')
    .then(res => {
        this.setState({ electronics: res.data });
    })
    .catch(function (error) {
        console.log(error);
    })
  }

  dataTable() {
    return this.state.electronics.map((data, i) => {
        return <DataTable obj={data} key={i} />;
    });
  }


render() {
    return (
      <div>

        <Logo/>
        <Add onUpdate={this.changeValue}/>

        <table>
          <thead>
            <tr><th>ID</th><th>Name</th><th>Make</th><th>Model</th><th>Location</th><th>Cost</th><th>Value</th><th>Date</th></tr>
          </thead>
          <tbody>
             {this.dataTable()}
          </tbody>
        </table>
      </div>
    );
  }
}
