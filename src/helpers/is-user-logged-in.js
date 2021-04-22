import PropTypes from 'prop-types';
import { Children } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function IsUserLoggedIn({ user, loggedInpath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!user) {
          return Children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInpath,
                state: { from: location },
              }}
            />
          );
        }
      }}
    />
  );
}

IsUserLoggedIn.propTypes = {
  user: PropTypes.object,
  children: PropTypes.object.isRequired,
  loggedInpath: PropTypes.string.isRequired,
};
