import { useState, useRef, useEffect } from 'react';


const options = [
  { item: "Dropdown", value: null},
  { item: "Action", value: "action"},
  { item: "Reducer", value: "reducer"},
  { item: "Hooks", value: "hooks"},
  { item: "", value: ""}
];

const Dropdown = (props) => {

  const ref = useRef();
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [selectOption, setSelectOption] = useState(options[0]);


  const onToggleDropdown = (e) => {
    e.preventDefault();
    setToggleDropdown(!toggleDropdown);
  }

  useEffect(() => {
     const onBodyClick = (e) => {
        if(ref.current && ref.current.contains(e.target)) {
          return;
        }
        setToggleDropdown(false);
     }

      document.body.addEventListener('click', onBodyClick);

      return () => {
        document.body.removeEventListener('click', onBodyClick);
      };
  },[]);

  const renderOptions = options.map(option => {
    if(option.value === selectOption.value) {
      return null;
    }

    const listOptions = <li onClick={() => setSelectOption(option)} className="dropdown-item" key={option.value}>{option.item}</li>;
    return option.item.indexOf("Dropdown") === 0 ? "" : listOptions;
  });


  return (
    <div className={`dropdown ${toggleDropdown ? 'show' : ''}`} ref={ref}>
      <a onClick={(e) => onToggleDropdown(e)}
         className={`nav-link dropdown-toggle ${props.active}`}
         href="!#"
         id="navbarDropdown">
        { selectOption.item }
      </a>
      <ul className={`dropdown-menu dropdown-menu-right ${toggleDropdown ? 'show' : ''}`} >
        { renderOptions }
      </ul>
    </div>
  );
};

export default Dropdown;
