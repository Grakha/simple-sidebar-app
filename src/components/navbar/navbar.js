import { useState } from 'react';

//Component
import Dropdown from "../dropdown/dropdown";


const links = [
  { name: "Home" },
  { name: "Link" },
  { name: "" }
];

const Navbar = (props) => {

  const [currentIndex, setCurrentIndex ] = useState(null);

  const handleActiveItem = (index) => {
    setCurrentIndex(index);
  }

  const renderLinks = links.map((link, index) => {

    const active = index === currentIndex ? 'active' : '';

    return(
      <li onClick={(e) => handleActiveItem(index)} className={`nav-item ${active}`} key={index}>
        { link.name !== ''
          ? <a onClick={(e) =>  e.preventDefault() } className="nav-link" href="!#">{link.name}</a>
          : <Dropdown active={active} />}
      </li>
    );
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <button onClick={props.onToggleMenu} className="btn btn-primary" id="menu-toggle">Toggle Menu</button>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          { renderLinks }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
