import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, Navbar, AddTimeTable, AddTeachersRooms, SavedTimeTables } from '../../components/';
import ComponentWrappers from '../../ComponentWrappers';

const welcome = () => <h3>Welcome to TT</h3>;

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={welcome} />
          <Route path="/addnew" component={AddTimeTable} />
          <Route path="/saved" component={SavedTimeTables} />
          <Route exact path="/teachers" component={AddTeachersRooms} />
          <Route exact path="/rooms" component={AddTeachersRooms} />
        </Switch>
      </div>
    );
  }
}

export default ComponentWrappers(Home);
