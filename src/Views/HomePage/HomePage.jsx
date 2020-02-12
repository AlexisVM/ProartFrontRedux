import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../_actions';

import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
;
// core components
import Navbar from "../../_components/Navbars/Navbar.js";
import Footer from "../../_components/Footer/Footer.js";
import Sidebar from "../../_components/Sidebar/Sidebar.js";
import FixedPlugin from "../../_components/FixedPlugin/FixedPlugin.js";



import styles from "../../Assets/jss/material-dashboard-react/layouts/adminStyle.js";

import bgImage from "../../Assets/img/sidebar-2.jpg";
import logo from "../../Assets/img/logo-iberica.png";



class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users,classes } = this.props;
        console.log(user)
        return (
              <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText={""}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}
        {getRoute() ? <Footer /> : null}
        <FixedPlugin
          handleImageClick={handleImageClick}
          handleColorClick={handleColorClick}
          bgColor={color}
          bgImage={image}
          handleFixedClick={handleFixedClick}
          fixedClasses={fixedClasses}
        />
      </div>
    </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(withStyles(styles)(HomePage));
export { connectedHomePage as HomePage };
