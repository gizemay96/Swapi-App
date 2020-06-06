import React, { Component } from 'react';
import './PeopleDetail.css'
import DetailLayout from '../../layouts/DetailLayout/DetailLayout';


// function PeopleDetailPage () {
//     const infoKeys = ["gender","birth_year","height","skin_color","eye_color","hair_color"];
//     const id =1;
//     return(
//         <DetailLayout path={`people/${id}`} titleKey="name" arrInfoKeys={infoKeys} name="Person" detailId= {id} Src={`https://static.wikia.nocookie.net/bd99b8d9-bc1f-45d8-b395-eb506405e554`} />
//     )
//    }

class PeopleDetailPage extends Component {
    constructor(props) {
      super(props);
      this.state= {
        id: props.match.params ? (props.match.params.id).replace(":","") : 0
      }
    }
  
    render() {
        const infoKeys = ["gender","birth_year","height","skin_color","eye_color","hair_color"];
      return (
        <DetailLayout apiPath={`people/${this.state.id}`} titleKey="name" arrInfoKeys={infoKeys} name="Person" detailId= {this.state.id} Src={`https://static.wikia.nocookie.net/bd99b8d9-bc1f-45d8-b395-eb506405e554`} />
      );
    }
  }
   export default PeopleDetailPage;


    