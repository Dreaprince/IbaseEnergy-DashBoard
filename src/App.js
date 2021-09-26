import React from 'react'
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Dashboard from './component/Dashboard';
import CreateAcc from './component/CreateAcc';
import LoginForm from './component/LoginForm';
import ForgetPassword from './component/ForgetPassword';


 const App = () => {

  return (
    <>
    <GlobalStyle />
    <Switch>
            <Route path="/forgetPassword" component={ForgetPassword} />
            <Route path="/createAcc" component={CreateAcc} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" exact component={LoginForm}/>
    </Switch>
    </>
  );
}

export default App;
