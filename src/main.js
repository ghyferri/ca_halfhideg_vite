// import css files
import "./styles/reset.css";
import "./styles/style.css";

//import swiper module
import { swiper } from "./scripts/swiper.js";
import {getAddress, loadMap} from "./scripts/mapbox.js"

loadMap()
getAddress()