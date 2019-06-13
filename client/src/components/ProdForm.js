import React from 'react';
import { Form, } from "semantic-ui-react";
import axios from 'axios';
import HeaderText from '../styles/HeaderText'

class ProdForm extends React.Component {
  defaultValues = { title: "", price: "", description: "", category: "", };
  state = { ...this.defaultValues, };

  handleSubmit = (e) => {
    e.preventDefault();
    const product = { ...this.state, };
    axios.post(`/api/department/${this.props.department.id}/products`, product)
    .then( res => {
      this.props.history.push(`/department/${this.props.department.id}/products`)
    })
    this.setState({ ...this.defaultValues, });
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  render() {
    const { title, category, description, price,  } = this.state;

    return (
      <div>
        <HeaderText fsize="lrg">New Product</HeaderText>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Title"
              name="title"
              placeholder="title"
              value={title}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Description"
              name="description"
              placeholder="Description"
              value={description}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Category"
              name="category"
              placeholder="Category"
              value={category}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Price"
              name="price"
              placeholder="Price"
              type="number"
              value={price}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default ProdForm;