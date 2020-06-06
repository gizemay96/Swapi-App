import React, { Component } from "react";
import "./DetailLayout.css";
import ListItemDetailCard from "../../components/ListItemDetailCard/ListItemDetailCard";

class DetailLayout extends Component {
  state = {
    info: [],
  };

  componentDidMount() {
    this.fetchList();
  }

  fetchList = async () => {
    const baseUrl = "https://swapi.dev/api";
    const response = await fetch(`${baseUrl}/${this.props.apiPath}`);
    const data = await response.json();

    this.setState({ info: data });
  };

  render() {
    return (
      <div className="container">
        <div className="detail-card">
          {
            <ListItemDetailCard
              key={this.state.info.name}
              title={this.state.info[this.props.titleKey]}
              infoKeys={this.props.arrInfoKeys}
              info={this.state.info}
              imgSrc={this.props.Src}
              buttonText={`Like ${this.state.info[this.props.titleKey]}`}
              onButtonClick={() =>
                alert(`Thx For Like ${this.state.info[this.props.titleKey]}`)
              }
            />
          }
        </div>
      </div>
    );
  }
}

export default DetailLayout;
