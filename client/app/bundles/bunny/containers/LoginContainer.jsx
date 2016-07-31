import React from 'react';
import Navigation from '../components/Navigation';

class LoginContainer extends React.Component {
  render() {
    return (
      <main>
        <Navigation signedIn={false} />
        <section>
          <form
            className="list-card login-form"
            method="POST"
            action="/session"
          >
            <fieldset>
              <label htmlFor="user_username">Username</label>
              <input
                className="input"
                type="text"
                id="user_username"
                name="user[username]"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="user_password">Password</label>
              <input
                className="input"
                type="password"
                id="user_password"
                name="user[password]"
              />
            </fieldset>

            <button type="submit">Sign in</button>
            or
            <button type="submit">Create a new account</button>
          </form>
        </section>
      </main>
    );
  }
}

export default LoginContainer;
