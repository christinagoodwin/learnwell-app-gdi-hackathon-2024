import React from "react";
import "./Footer.css";
import ButtonLink from "../ButtonLink/ButtonLink";

function Footer({}) {
  return (
    <footer className="footer">
      <ButtonLink type="button" to="/" className="footer-btn">
        Take me home to pick a new topic
      </ButtonLink>
    </footer>
  );
}

export default Footer;
