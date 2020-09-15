// import external dependencies
//import 'jquery';

// Import everything from autoload
import './autoload/**/*';

// import library
import PureCounter from '@srexi/purecounterjs';
import WOW from 'wowjs';

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home';
import aboutUs from './routes/about';
import slider from './components/slider';
import burger from './components/burger';
import header from './components/header';
import preloader from './components/preloader';
import wp_block_gallery from './components/wp-block-gallery';
import gmap from './components/gmap';

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Home page
  home,
  // About Us page, note the change from about-us to aboutUs.
  aboutUs,
});

// Load Events
jQuery(document).ready(() => {
  routes.loadEvents();
  header.init();
  preloader.init();
  burger.init();
  wp_block_gallery.init();
  gmap.init();
  slider.init();
  new WOW.WOW().init();
});

setTimeout(()=>{
  PureCounter;
  window.dispatchEvent(new Event('resize'));
}, 1000)
