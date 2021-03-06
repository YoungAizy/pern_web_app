import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./routes/LandingPage"
import Home from "./routes/Home";
import DetailsPage from "./routes/DetailsPage";
import UpdatePage from "./routes/UpdatePage";
import { ContextProvider } from './Context API/Context';
import SignIn from './routes/SignIn';
import Footer from './components/Footer'
import ProtectedRoute from './routes/ProtectedRoute';

const App = ()=> {
  return (
    <ContextProvider>

    <div>
        <Router>
          <Route exact path="/" component={Landing} />
          <ProtectedRoute exact path="/dashboard" component={Home}/>
          <Route path="/signin" component={ SignIn}/>
          <Route exact path="/restaurants/:id" component={ DetailsPage }/>
          <Route exact path="/restaurants/:id/update" component={ UpdatePage }/>
        </Router>
        <Footer />
    </div>
    </ContextProvider>
  );
}

export default App;
