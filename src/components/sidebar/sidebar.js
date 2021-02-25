import { Link } from 'react-router-dom';

const links = [
  { url: "/dashboard", name: "Dashboard" },
  { url: "/shortcuts", name: "Shortcuts" },
  { url: "/overview", name: "Overview" },
  { url: "/events", name: "Events" },
  { url: "/profile", name: "Profile" },
  { url: "/status", name: "Status" }
];

const Sidebar = () => {

  const listSideBar = links.map((link, index) => {
    return (
      <Link to={link.url} className="list-group-item list-group-item-action bg-light" key={index+1}>
        { link.name }
      </Link>
    );
  });

  return (
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Start Bootstrap </div>
        <div className="list-group list-group-flush">
          { listSideBar }
        </div>
      </div>
  );
};

export default Sidebar;
