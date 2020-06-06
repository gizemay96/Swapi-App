import React, { Component } from 'react';
import './ListLayout.css'
import ListItemCard from '../../components/ListItemCard/ListItemCard';
import {Redirect} from 'react-router-dom';


class ListLayout extends Component {
  state = {
    list: [],
    redirectToDetail: false,
    redirectPath: '',
    redirectId: 0
  }


  componentDidMount() {
    this.fetchList()
  }

  fetchList = async () => {
    const baseUrl = 'https://swapi.dev/api';
    const response = await fetch(`${baseUrl}/${this.props.path}`);
    const data = await response.json();

    this.setState({ list: data.results });
  }

  routeChange=(url)=> {
    let id = url.split('/')[url.split('/').length-2];
    let path = this.props.pathDetail+`${id}`;
    return (e => {
      e.preventDefault();
      this.setState({
        redirectToDetail: true,
        redirectPath: path,
        redirectId: id
      })
    });
    
  }
 
 

  render() {
    if (this.state.redirectToDetail) {
      return (
        <Redirect to={{
          pathname: this.state.redirectPath,
          state: { id: this.state.redirectId },
          id: this.state.redirectId
        }} />
      )
    }
    return (
      <div className="list-grid">
        {
          this.state.list.map((item) => (
            <ListItemCard 
              key={item[this.props.titleKey]}
              title={item[this.props.titleKey]}
              text={item[this.props.textKey]}
              imgSrc={this.props.Src}
              buttonText={`Detail ${this.props.name}`}
              onButtonClick={this.routeChange(item.url)}
            />
          ))
        }
      </div>
    )
  }
}

export default ListLayout;
