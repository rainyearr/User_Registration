import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import { UserList } from './UserList'
import { CreateUser } from './CreateUser'
import { EditUser } from './EditUser'


function App() {
  return (
    <div>
      <nav className = "navbar bg-light navbar-expand-lg navbar-light">
        <ul className = "navbar-nav mr-auto">
          <li className = "navbar-item">
            <Link to = "/" className="nav-link">Todos</Link>
          </li>
          <li className = "navbar-item">
            <Link to = "/create" className="nav-link">Create Todosss</Link>
          </li>
        </ul>
      </nav>
    <Switch>
      <Route exact path="/" component={UserList}/>
      <Route path="/edit/:id" component={EditUser}/>
      <Route path="/create" component={CreateUser}/>
    </Switch>
    </div>
  );
}

export default App;
