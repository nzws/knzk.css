import { h } from 'hyperapp';
import { Icon } from './icon';

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-primary">
    <a className="navbar-brand" href="">
      knzk.css
      <small className="ml-1">v2</small>
    </a>

    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <span className="navbar-text">
          A Custom-CSS generator for broadcasting
        </span>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://github.com/yuzulabo/knzk.css"
            target="_blank"
          >
            <Icon name="github" type="b" /> Source
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
