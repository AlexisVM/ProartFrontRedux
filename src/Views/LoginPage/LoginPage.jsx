import React from 'react';
//design
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Linking from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
//redux
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Linking color="inherit" href="https://ibericacontemporanea.com.mx/" target="_blank">
        Iberica Contemporanea
      </Linking>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = {
  image:{
    backgroundImage: 'url(https://ibericacontemporanea.com.mx/wp-content/uploads/2019/06/Inauguracion.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  wrapper: {
    height: '100vh',
  },
  form:{
    height:'100vh',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justify: 'center',
  },
  avatar: {
    backgroundColor: "#F50057",
  },
  button:{
    marginTop: "8%",
    marginBottom: "8%",
  }
}

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        // reset login status
        this.props.logout();
        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        console.log(this.state);
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.login(email, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { email, password, submitted } = this.state;
        return (
          <React.Fragment>
            <Grid container style={styles.wrapper} >
              <Grid item xs={false} sm={4} md={8} style={styles.image}>
              </Grid>
              <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square >
                <Grid container spacing={3} direction="column" justify="center" alignItems="center" style={styles.form} >
                  <Grid item>
                    <Avatar style={styles.avatar} ><LockOutlinedIcon /></Avatar>
                  </Grid>
                  <Grid item>
                      <Typography component="h1" variant="h5">Iniciar Sesión</Typography>
                  </Grid>
                  <Grid item>
                      <form name="form" onSubmit={this.handleSubmit} >
                          <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                              <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Correo Electrónico"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={this.handleChange}
                                autoFocus
                              />{/*email*/}
                          </div>
                          <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                              <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                value={password}
                                onChange={this.handleChange}
                                autoComplete="current-password"
                              />{/*password*/}
                          </div>
                          <div className="form-group">
                            <Button
                              fullWidth
                              variant="contained"
                              color="primary"
                              style={styles.button}
                              onClick={this.handleSubmit}
                            >
                              Sign In
                            </Button>
                              {loggingIn &&
                                  <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                              }
                              <Link to="/register" className="btn btn-link">¿No tienes Cuenta? Regístrate</Link>
                          </div>
                      </form>
                      <Box mt={5}><Copyright /></Box>

                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            </React.Fragment>

        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);

export { connectedLoginPage as LoginPage };
