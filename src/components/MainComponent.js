import React, { Component } from "react";
import Menu from './MenuComponent';
import DishDetail from "./DishDetailComponent";
import Contact from './ContactComponent';
import Header from "./HeaderComponent";
import Footer from './FooterComponent';
import About from "./AboutComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

class Main extends Component {
    
      onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
      }
    
      render() {
        const HomePage = () => {
          return(
              <Home 
                dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
              />
          );
        }

        const DishWithId = ({match}) => {
          return(
              <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
          );
        };

        const AboutPage = () => {
          return(
              <About leaders={this.props.leaders}
              />
          );
        }

        return (
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/about' component={AboutPage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path="/contact" component={Contact} />
              <Redirect to="/" />
            </Switch>
            <Footer />
          </div>
        );
      }
}

export default withRouter(connect(mapStateToProps)(Main));