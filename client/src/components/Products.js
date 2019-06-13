import React from "react";
import {Link,} from "react-router-dom"
import { Card, } from "semantic-ui-react";
import axios from "axios";
import HeaderText from "../styles/HeaderText"
import StyledCard from "../styles/StyledCard"
import StyledButton from "../styles/HeaderText"
// import styled, { keyframes } from 'styled-components';

//use hooks instead of class component
//still can't figure out why cDM() doesnt have dept.id but
//render does. 
class Products extends React.Component {
  state = { products: [
    {id:17, department_id: 1, title: "test", category: "test", price: 4.99 }
  ], loading: false }

  componentDidMount() {
   axios.get(`/api/departments/${this.props.pId}/products`)
   .then( res => {
      this.setState({ products: res.data, })
   })
  }

  renderProducts = () => {
    const { products } = this.state;
    console.log(this.props.department.id)
    if (products.length <= 0)
      return <h2>No Products</h2>
    return products.map( product => (
      <StyledCard key={product.id}>
        <Card.Content>
          <Card.Header>{ product.title }</Card.Header>
          <Card.Meta>{ product.category }</Card.Meta>
          <Card.Description>
            { product.description }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <StyledButton
        as={Link} 
        to={`/department/${this.props.department.id}/product/new`}>
         Add Product
        </StyledButton>
        </Card.Content>
      </StyledCard>
    ))
  }

  render() {
    return (
      <div>
        <HeaderText fSize="med">Products</HeaderText>
        <br />
        <Card.Group>
          { this.renderProducts() }
        </Card.Group>
      </div>
    )
  }
}

export default Products;