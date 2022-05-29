import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/use-auth';
import pandaWave from '../img/panda_wave.png';

export default function Login() {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();

  const { from } = location.state || { from: { pathname: '/' } };
  console.log({ from });
  const logIn = () => {
    auth.signIn(() => {
      history.replace(from);
    });
  };

  return (
    <div className="card">
      <div>
        <div className="card-body d-flex flex-row">
          <section className="w-50">
            <h5 className="card-title">Special title treatment</h5>
            <img src={pandaWave} alt="Panda shows you the LogIn form" />
          </section>

          <form className="w-50">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button onClick={logIn} type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="card-footer text-muted">Create account</div>
      </div>
    </div>
  );
}
