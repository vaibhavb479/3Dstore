import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#2E3840',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './broTees1.png',
  fullDecal: './broTees1.png',
});

export default state;