import React from 'react';
import { Form, Header, } from "semantic-ui-react";
import axios from 'axios';

class DeptForm extends React.Component {
  defaultValues = { title: "", phone: "", description: "", hours: "", email: "", };
  state = { ...this.defaultValues, };

  handleSubmit = (e) => {
    e.preventDefault();
    const department = { ...this.state, };
    axios.post("/api/departments", department)
    .then( res => {
      this.props.history.push("/department")
    })
    this.setState({ ...this.defaultValues, });
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  render() {
    const { title, email, description, phone, hours } = this.state;

    return (
      <div>
        <Header as="h1">New Product</Header>
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
              label="hours"
              name="hours"
              placeholder="hours"
              value={hours}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Phone"
              name="phone"
              placeholder="phone"
              type="number"
              value={phone}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Email"
              name="email"
              placeholder="email"
              
              value={email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default DeptForm;