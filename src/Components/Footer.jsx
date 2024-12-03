import { useContext } from "react"
import { ContextGlobal } from "../context/global.context"

const Footer = () => {
  const {state} = useContext(ContextGlobal)
  return (
    <footer className={state.theme === "light"?  "light": "dark"}>
      <p>Powered by</p>
      <img src="/images/DH.png" alt="DH-logo" />
      {/* <div>
          <img src="./images/ico-instagram.png" alt="instagram" color="green"  width={"15px"}/>
        </div> */}
    </footer>
  );
};

export default Footer;
