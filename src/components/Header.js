import PropTypes from "prop-types";
// import { red, black } from "colorette";
import Button from "./Button";
import {useLocation} from 'react-router-dom'

const Header = ({ title, onAdd, showAddTask }) => {

  const location = useLocation()
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && <Button
        color={showAddTask ? "#C70039 " : "green"}
        text={showAddTask ? "Close" : "Add"}
        onClick={onAdd}
      />}
    </header>
  );
};
Header.defaultProps = {
  title: "Default Task Tracker"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

// CSS in JS
//   const headingStyle = {
//       color : 'red',
//       backgroundColor : 'black'
//   }

export default Header;
