import React from 'react';
import '../styles/form.scss';
import { Link } from 'react-router-dom';

export default function register() {
  return (
    <div class="form form--page">
      <div class="form__group form__group--page">
        <label class="form__label">First name</label>
        <input class="form__field" type="text" placeholder="First name" />
      </div>

      <div class="form__group form__group--page">
        <label class="form__label">Last name</label>
        <input class="form__field" type="text" placeholder="Last name" />
      </div>

      <div class="form__group form__group--page">
        <label class="form__label">Email</label>
        <input class="form__field" type="text" placeholder="Email" />
      </div>

      <div class="form__group form__group--page">
        <label class="form__label">Choose password</label>
        <input class="form__field" type="text" placeholder="Choose password" />
      </div>

      <div class="form__group form__group--page">
        <label class="form__label">Confirm Password</label>
        <input class="form__field" type="text" placeholder="Confirm Password" />
      </div>

      <div class="form__group form__group--page">
        <input class="form__btn" type="submit" value="Register" />
      </div>

      <footer>
        Already have an account? <Link to='/login'>Login</Link>
      </footer>
    </div>
  );
}
