import "../styles/_global.scss";

const Navbar = (props) => {
  return <div className="navbar"> {props.children} </div>;
};

export default Navbar;
