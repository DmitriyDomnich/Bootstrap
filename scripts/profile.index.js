import { onWindowResize } from './components/search-bar.js';
import './components/Scroller.js';
import './components/AfkChecker.js';
import './components/ClientInfo.js';
import './components/Preventer.js';
import './components/ProgressBar.js';
import './components/ThemeSwitch.js';

window.onresize = (e) => {
  onWindowResize(e);
};
