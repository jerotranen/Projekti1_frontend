import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import { JaseneksiBackground, Content, NavLinkApply} from "./style"

const Jaseneksi = () => (
    <JaseneksiBackground>
      <Content>
        <div style={{ margin: '10px 0' }}></div>
        <p>Valitse alla olevista vaihtoehdoista itseäsi koskeva vaihtoehto.</p>
        <div style={{ margin: '35px 0' }}></div>
        <div>
            <NavLinkApply to="https://docs.google.com/forms/d/e/1FAIpQLSdN9yaGazcC_d1WBxSDxNSVSfYgQ_iVEp8MvIUN5cfdoxmECQ/viewform?usp=sf_link">
              Teknillisen opiskelijat
            </NavLinkApply>
            <div style={{ margin: '35px 0' }}></div>
            <NavLinkApply to="https://docs.google.com/forms/d/e/1FAIpQLSeuSpuOEtjlIG9IShKaF9fMV8rEwNhZFz-jlb-P0GvHe3543w/viewform?usp=sf_link">
              Muut
            </NavLinkApply>
      </div>
      </Content>
    </JaseneksiBackground>
  );

export default Jaseneksi;