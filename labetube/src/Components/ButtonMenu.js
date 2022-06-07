import "../style.css";
const ButtonMenu = (props) => {
  return (
    <nav className="menu-vertical">
      <ul>
        <li className="botoes-meunu-vertical">{props.texto}</li>
      </ul>
    </nav>
  );
};

export default ButtonMenu;
