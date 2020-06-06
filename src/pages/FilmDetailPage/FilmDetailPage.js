import React, { Component } from "react";
import DetailLayout from "../../layouts/DetailLayout/DetailLayout";

class FilmDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params ? props.match.params.id.replace(":", "") : 0,
    };
  }

  render() {
    const infoKeys = ["episode_id", "director", "producer", "release_date"];
    return (
      <DetailLayout
        apiPath={`films/${this.state.id}`}
        titleKey="title"
        arrInfoKeys={infoKeys}
        name="title"
        detailId={this.state.id}
        Src={`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e7ae2ac9-924a-4ab2-ba16-c4b52c22c817/d9ts6wa-caf224fd-dc7b-41b4-82ce-81cb17b7d3db.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZTdhZTJhYzktOTI0YS00YWIyLWJhMTYtYzRiNTJjMjJjODE3XC9kOXRzNndhLWNhZjIyNGZkLWRjN2ItNDFiNC04MmNlLTgxY2IxN2I3ZDNkYi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.oqu9ig4FnhKpzG2H-Fmjw5tpQCrfeJzulbLt5Irvt4k`}
      />
    );
  }
}
export default FilmDetailPage;
