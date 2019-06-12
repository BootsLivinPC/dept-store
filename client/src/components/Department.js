import React from "react";
import { Card, Header, Button } from "semantic-ui-react";
import axios from 'axios'
import { Link, } from "react-router-dom"



class Departments extends React.Component {
  state = { departments: [], };

  componentDidMount() {
   axios.get("/api/departments")
   .then( res => {
     this.setState({ departments: res.data, })
   })
  }

  deleteDept = (id) => {
    axios.delete(`/api/departments/${id}`)
    .then( res => {
      debugger
      const { departments, } = this.state
      this.setState({ departments: departments.filter(t => t.id !== id ), })
    })
    }

    editDept = (id) => {
      
    }

  renderDepartments = (editDept, deleteDept, id) => {
    const { departments, } = this.state;
    
    if (departments.length <= 0)
      return <h2>No departments</h2>
    return departments.map( department => (

      <Card key={department.id}>
        <Card.Content>
          <Card.Header>{ department.title }</Card.Header>
          <Card.Meta>{ department.department }</Card.Meta>
          <Card.Description>
            { department.description }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
         <Button size="tiny" as={Link} to={`/department/${department.id}`} color='blue'>
           View
         </Button>
         <Button size="tiny" onClick={() => deleteDept(id)} color='red'>
           Destroy
         </Button>
         <Button size="tiny" onClick={() => editDept(id)} color='green'>
           Edit
         </Button>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Header as="h1">Departments</Header>
        <br />
        <Button as={Link} color="blue" to="/department/new">
         Add Department
        </Button>
        <br/>
        <br/>
        <Card.Group>
          { this.renderDepartments() }
        </Card.Group>
      </div>
    )
  }
}

export default Departments;