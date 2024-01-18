import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { Content, NavLinkInstagram, InstagramImage} from "./style"

const Contact = () => (
    <Content>
      <h1>Yhteystiedot ja somet</h1>
      <p>Email: teknillinenskimbakerho@utu.fi</p>
      <p>
        <NavLinkInstagram to="https://www.instagram.com/teknillinenskimbakerho/">
          <InstagramImage
            src="https://e7.pngegg.com/pngimages/953/528/png-clipart-instagram-icon-logo-desktop-computer-icons-instagram-miscellaneous-text.png"
            alt="Instagram"
          />
          teknillinenskimbakerho
        </NavLinkInstagram>
      </p>
    </Content>
  );

export default Contact;