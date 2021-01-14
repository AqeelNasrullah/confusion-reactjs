import React, { Component } from "react";
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Header from "./HeaderComponent";
import Footer from './FooterComponent';
import About from "./AboutComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from 'react-router-dom';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
            selectedDish: null
        };
      }
    
      onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
      }
    
      render() {
        const HomePage = () => {
          return(
              <Home 
              />
          );
        }

        const AboutPage = () => {
          return(
              <About 
              />
          );
        }

        return (
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/about' component={AboutPage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route exact path="/contact" component={Contact} />
              <Redirect to="/" />
            </Switch>
            <Footer />
          </div>
        );
      }
}

export default Main;