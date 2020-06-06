import React, {Component} from "react";
import DetailLayout from "../../layouts/DetailLayout/DetailLayout";


class PlanetDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params ? props.match.params.id.replace(":", "") : 0,
    };
  }

  render() {
    const infoKeys = [
      "climate",
      "population",
      "rotation_period",
      "gravity",
      "terrain",
    ];
    return (
      <DetailLayout
        apiPath={`planets/${this.state.id}`}
        titleKey="name"
        arrInfoKeys={infoKeys}
        name="Planet"
        detailId={this.state.id}
        Src={`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aa905e08-e78e-4479-b3a9-81d4c444ce69/d8rezth-65e6bf74-a742-49d3-b4ff-1f4c28bf6617.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYWE5MDVlMDgtZTc4ZS00NDc5LWIzYTktODFkNGM0NDRjZTY5XC9kOHJlenRoLTY1ZTZiZjc0LWE3NDItNDlkMy1iNGZmLTFmNGMyOGJmNjYxNy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.79N3Cs7AJ2Qi1FH6yqZc9mONjM6O5zzpjCZ5_uOaqXM`}
      />
    );
  }
}
export default PlanetDetailPage;
