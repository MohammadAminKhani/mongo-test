import React,{Component} from 'react'
import {render} from 'react-dom'
import {Link,Switch,BrowserRouter,Route} from 'react-router-dom'
import {App1} from './components/fn1.js'

window.React = React

const About = () => <h1>About</h1>
const Menu = () =>
<div>
<h1>Menu</h1>
<Link to='/about'>about</Link><br/>
<Link to='/table'>table</Link><br/>
</div>


render(
  <BrowserRouter>
  <Switch>
  <Route exact path="/" component={Menu}/>
  <Route exact path="/table" component={App1} />
  <Route exact path="/table/:x" component={App1} />
  <Route exact path="/about" component={About} />
  </Switch>
  </BrowserRouter>
,document.querySelector("#root") )

