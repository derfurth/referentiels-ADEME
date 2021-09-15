import {Navigation} from 'app/Navigation';
import {EpcisPage} from 'app/pages/Epcis/EpcisPage';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteProps,
  Switch,
} from 'react-router-dom';
import {Footer, Header} from 'ui';
import {FooterDescription, FooterNavigation} from 'ui/Footer';
import {AuthRoutes} from 'app/pages/Auth/AuthRoutes';
import {CollectiviteRoutes} from 'app/pages/collectivite/CollectiviteRoutes';
import Home from 'app/pages/Home';
import {useConnected} from 'core-logic/hooks';

import 'app/app.css';
import 'app/DesignSystem/core.css';
import 'app/DesignSystem/variables.css';
import 'app/DesignSystem/buttons.css';
import {Toasters} from 'app/Toasters';
import {ScrollToTop} from 'app/ScrollToTop';
import {createTheme, MuiThemeProvider} from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000091',
    },
  },
});

export const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Toasters />
        <Switch>
          <HomeRoute exact path="/">
            <Header nav={<Navigation />} />
            <Home />
          </HomeRoute>

          <Route path={'/auth'}>
            <Header nav={<Navigation />} />
            <AuthRoutes />
          </Route>

          <Route path={'/epcis'}>
            <Header nav={<Navigation />} />
            <EpcisPage />
          </Route>

          <Route path={'/collectivite/:epciId'}>
            <Header nav={<Navigation />} />
            <CollectiviteRoutes />
          </Route>
        </Switch>
        <Footer
          description={<FooterDescription />}
          navigation={<FooterNavigation />}
        />
      </Router>
    </MuiThemeProvider>
  );
};

const HomeRoute = ({children, ...rest}: RouteProps) => {
  const connected = useConnected();

  return (
    <Route
      {...rest}
      render={({location}) =>
        !connected ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/epcis',
              state: {from: location},
            }}
          />
        )
      }
    />
  );
};

/**
 * doesn't work because of auth async nature, user is not
 * connected until he is, and the redirect to '/' is instant
 */
/*
const ProtectedRoute = ({children, ...rest}: RouteProps) => {
  const connected = useConnected();

  return (
    <Route
      {...rest}
      render={({location}) =>
        connected ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: {from: location},
            }}
          />
        )
      }
    />
  );
};
*/
