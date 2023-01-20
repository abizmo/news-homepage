import { type NextComponentType } from "next";

const Header: NextComponentType = () => (
  <header>
    <div>
      <a href="#">
        <svg className="icon">
          <use xlinkHref="/images/logo.svg#logo"></use>
        </svg>
      </a>
      <button>Menu</button>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
