import React from "react";
import { Card, Button, } from "semantic-ui-react";
import axios from 'axios'
import { Link, } from "react-router-dom"
import HeaderText from '../styles/HeaderText'
import StyledButton from '../styles/StyledButton'
import StyledCard from '../styles/StyledCard'


class Departments extends React.Component {
  state = { departments: [],  };

  componentDidMount() {
   axios.get("/api/departments")
   .then( res => {
     this.setState({ departments: res.data, })
   })
  }

  deleteDept = (id) => {
    console.log(id)
    axios.delete(`/api/departments/${id}`)
    .then( res => {
      const { departments, } = this.state
      this.setState({ departments: departments.filter(t => t.id !== id ), })
    })
    }

    editDept = (id) => {
      
    }

  renderDepartments = (id) => {
    const { departments, } = this.state;
    if (departments.length <= 0)
      return <h2>No departments</h2>
    return departments.map( department => (

      <StyledCard key={department.id}>
        <Card.Content>
          <HeaderText>{ department.title }</HeaderText>
          <Card.Meta>{ department.department }</Card.Meta>
          <Card.Description>
            { department.description }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
         <Button size="tiny" as={Link} to={`/department/${department.id}`} color='blue'>
           View
         </Button>
         <Button size="tiny" onClick={() => this.deleteDept(id)} color='red'>
           Destroy
         </Button>
         <Button size="tiny" onClick={() => this.editDept(id)} color='green'>
           Edit
         </Button>
        </Card.Content>
      </StyledCard>
    ))
  }

  render() {
    return (
      <div>
        <HeaderText size="lrg">Departments</HeaderText>
        <br />
        <Card.Group>
          { this.renderDepartments() }
        </Card.Group>
        <br/>
        <br/>
        <StyledButton as={Link} to="/department/new">
         Add Department
        </StyledButton>
      </div>
    )
  }
}

export default Departments;