import './styles/footer.css'

function Footer(props) {
  return (
    <footer className={props.darkMode ? "footer darkMode" : "footer"}>
      <p>Kamil Linstedt Ⓒ2022  </p>
    </footer>
  );
}

export default Footer;
