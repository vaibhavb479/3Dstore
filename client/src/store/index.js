import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#F5EBEB",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./sameer.png",
  fullDecal: "./sameer.png",
});

export default state;
