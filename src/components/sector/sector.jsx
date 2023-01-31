import React from 'react';
import './sector.scss';

import { 
  TechBig,
  TechSmall,
  EngBig,
  EngSmall,
  HealthBig,
  HealthSmall,
} from '../images';

export default function sector() {
  return (
    <div className="sector">
      <h2>Choose your sector</h2>
      <p>jobs across multiple sectors. See the latest roles now</p>

      <div className="sector__types">
        <div className="sector__wrap">
          <picture className="sector__picture">
            <source srcset={TechBig} media="(min-width: 767px)" />
            <source srcset={TechSmall} />
            <img src={TechSmall} alt="" />
          </picture>
          <div className="sector__name">Technology</div>
          <ul className="sector__list">
            <li>
              <a href="">
                Accountancy jobs <span>5, 757</span>
              </a>
            </li>
            <li>
              <a href="">
                Acturial jobs <span>5, 757</span>
              </a>
            </li>
            <li>
              <a href="">
                Admin, Secretarial jobs <span>5, 757</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="sector__wrap">
          <picture className="sector__picture">
            <source srcset={EngBig} media="(min-width: 767px)" />
            <source srcset={EngSmall} />
            <img src={EngSmall} alt="" />
          </picture>
          <div className="sector__name">Engineering</div>
          <ul className="sector__list">
            <li>
              <a href="">
                Accountancy jobs <span>5, 757</span>
              </a>
            </li>
            <li>
              <a href="">
                Acturial jobs <span>5, 757</span>
              </a>
            </li>
            <li>
              <a href="">
                Admin, Secretarial jobs <span>5, 757</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="sector__wrap">
          <picture className="sector__picture">
            <source srcset={HealthBig} media="(min-width: 767px)" />
            <source srcset={HealthSmall} />
            <img src={HealthSmall} alt="" />
          </picture>
          <div className="sector__name">Health</div>
          <ul className="sector__list">
            <li>
              <a href="">
                Accountancy jobs <span>5, 757</span>
              </a>
            </li>
            <li>
              <a href="">
                Acturial jobs <span>5, 757</span>
              </a>
            </li>
            <li>
              <a href="">
                Admin, Secretarial jobs <span>5, 757</span>
              </a>
            </li>
          </ul>
        </div>

        <a href="">
          <div className="sector__browse">Browse all sectors</div>
        </a>

        <ul className="sector__mlist">
          <li>
            <a href="">
              Accountancy jobs <span>5, 757</span>
            </a>
          </li>
          <li>
            <a href="">
              Acturial jobs <span>5, 757</span>
            </a>
          </li>
          <li>
            <a href="">
              Admin, Secretarial jobs <span>5, 757</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
