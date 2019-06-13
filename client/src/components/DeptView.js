import React from "react";
import axios from "axios";
import Products from "./Products"
import HeaderText from "../styles/HeaderText"
import StyledButton from '../styles/StyledButton'


class DeptView extends React.Component {
  state = { department: {}, products: [], };

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ department: res.data, });
      })

    // axios.get(`/api/departments/${this.props.match.params.id}/products`)
    //   .then( res => {
    //     debugger
    //      this.setState({ products: res.data, })
    //   })
    //   .catch( err => {
    //     debugger
    //   })
  }

  render() {
    const { title, description, email, phone,  } = this.state.department;
    // const { ...department } = this.state;

    return (
      <div>
        <>
          <HeaderText fSize="lrg">{ title }</HeaderText>
          <HeaderText fSize="med">{ description }</HeaderText>
          {/* <HeaderText fSize="sml">{ hours }</HeaderText> */}
          <HeaderText fSize="sml">{ phone }</HeaderText>
          <HeaderText fSize="sml">{ email }</HeaderText>
          
        </>
        <br />
        <Products  pId={this.props.match.params.id} department={this.state.department} />
        <br />
        <StyledButton 
          color="black" 
          onClick={this.props.history.goBack}
          >
          Back
        </StyledButton>
      </div>
    )
  }
}




export default DeptView;