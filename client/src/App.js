import React from 'react';
import { Route, Switch, } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch'
import Department from './components/Department'
import NavBar from './components/NavBar'
import DeptForm from './components/DeptForm'
import DeptView from './components/DeptView'
import Products from './components/Products'
import ProdForm from './components/ProdForm'
import {Container, } from 'semantic-ui-react'

const App = () => (
  <>
  <NavBar />
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/department" component={Department} />
      <Route exact path="/department/new" component={DeptForm} />
      <Route exact path="/department/:department_id/product/new" component={ProdForm} />
      <Route exact path="/department/:id" component={DeptView} />
      <Route exact path="/department/:department.id/products" component={Products} />
      <Route component={NoMatch} />

    </Switch>
  </Container>
  </>
)
//do i need the department infront of the id?



export default App;
