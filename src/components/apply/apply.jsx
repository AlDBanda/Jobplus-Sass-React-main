import React from 'react';
import '../listings/listings.scss';

import { StarSaved, Money, Location, Timer } from '../images';

export default function apply() {
  return (
    <section>
      <div class="listing__card listing__card--apply">
        <header class="listing__header">
          <h1 class="listing__title">Regulatory Affairs Senior Manager</h1>
          <img class="listing__saved" src={StarSaved} alt="" />
          <p class="listing__company">
            Posted by <span>Koco Media</span>
          </p>
        </header>

        <ul class="listing__items">
          <li>
            <img src={Money} alt="" />
            <b>Salary negotiable</b>
          </li>
          <li>
            <img src={Location} alt="" />
            Heyes, <b>Uxbridge</b>
          </li>
          <li>
            <img src={Timer} alt="" />
            Contract, full-time
          </li>
        </ul>

        <div class="form">
          <input class="form__btn" type="submit" value="Apply now" />
        </div>
      </div>

      <div class="listing__more">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestiae
          delectus culpa dolore sequi debitis eligendi veniam reprehenderit,
          deleniti voluptate perferendis consectetur quibusdam iure suscipit,
          quaerat quia, natus eum vel.
        </p>

        <h1>Required skills</h1>

        <ul class="listing__skills">
          <li>salesforce</li>
          <li>SFDC</li>
          <li>Development</li>
          <li>Development</li>
          <li>Development</li>
          <li>Development</li>
          <li>Development</li>
          <li>Development</li>
          <li>Development</li>
        </ul>
      </div>

      <div class="form">
        <input class="form__btn" type="submit" value="Apply now" />
      </div>
    </section>
  );
}
