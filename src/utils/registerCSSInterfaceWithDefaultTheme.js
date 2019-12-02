import CSSInterface from 'react-with-styles-interface-css';
// import aphroditeInterface from "react-with-styles-interface-aphrodite";

import registerInterfaceWithDefaultTheme from './registerInterfaceWithDefaultTheme';

export default function registerCSSInterfaceWithDefaultTheme() {
  registerInterfaceWithDefaultTheme(CSSInterface);
  // registerInterfaceWithDefaultTheme(aphroditeInterface);
}
