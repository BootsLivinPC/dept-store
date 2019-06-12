import React from "react";
import axios from "axios";
import { Button, Header, } from "semantic-ui-react";
import Products from "./Products"


class DeptView extends React.Component {
  state = { department: {}, };

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ department: res.data, });
      })
  }

  render() {
    const { title, description, hours, email, phone,  } = this.state.department;
    // const { ...department } = this.state;

    return (
      <div>
        <>
          <Header as="h1">{ title }</Header>
          <Header as="h3">{ description }</Header>
          <Header as="h5" color="grey">{ hours }</Header>
          <Header as="h5" color="grey">{ phone }</Header>
          <Header as="h5" color="grey">{ email }</Header>
          
        </>
        <br />
        <Products  id={this.state.department.id} />
        <br />
        <Button 
          color="black" 
          onClick={this.props.history.goBack}
          >
          Back
        </Button>
      </div>
    )
  }
}

export default DeptView;