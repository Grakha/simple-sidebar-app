import { useState } from 'react';

import { Route, Switch } from "react-router-dom";

// Components Router
import Main from "./main/main";
import Dashboard from "./dashboard/dashboard";
import Shortcuts from "./shortcuts/shortcuts";
import Overview from "./overview/overview";
import Events from "./events/events";
import Profile from "./profile/profile";
import Status from "./status/status";

// Components
import Sidebar from "./sidebar/sidebar";
import Navbar from "./navbar/navbar";



const App = () => {

  const [toggle, setToggle] = useState(true);

  const onToggleMenu = () => {
    setToggle(!toggle);
  }

  return (
    <div className={`d-flex ${toggle ? '' : 'toggled'}`} id="wrapper">

      <Sidebar />

      <div id="page-content-wrapper">

        <Navbar onToggleMenu={onToggleMenu} />

        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/shortcuts" exact component={Shortcuts} />
            <Route path="/overview" exact component={Overview} />
            <Route path="/events" exact component={Events} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/status" exact component={Status} />
          </Switch>
        </div>

      </div>

    </div>
  );
}

export default App;