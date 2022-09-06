const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={props.className}
      type={props.type}
      data-content={props.dataContent}
      id={props.id}
    >
      {props.children}
    </button>
  );
};

export default Button;
