import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/form.scss';

export default function login() {
  return (
    <div class="form form--page">
      <div class="form__group form__group--page">
        <label class="form__label">Email</label>
        <input class="form__field" type="text" placeholder="Email" />
      </div>

      <div class="form__group form__group--page">
        <label class="form__label">Password</label>
        <input class="form__field" type="text" placeholder="Password" />
      </div>

      <div class="form__group form__group--page">
        <input class="form__btn" type="submit" value="Login" />
      </div>

      <footer>
        Dont have an account? <Link to='/register'>Register</Link>
      </footer>
    </div>
  );
}
