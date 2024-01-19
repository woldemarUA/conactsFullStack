'use strict';
import { ImageContainer } from './logo.js';
import { HomeScreen } from './homeScreen.js';

export const MainScreen = (parentEl) => {
  const logo = ImageContainer('logo-center-bg', ' ./img/logo.png');
  logo.onclick = () => HomeScreen(parentEl, 'main');

  parentEl.appendChild(logo);
};
