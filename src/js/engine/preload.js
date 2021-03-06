import Preload from "preload-it";
import { RESOURCE_TO_PRELOAD } from "./constants";
import { preloadAnimation } from "../ui/ui";
const preloader = Preload();

function preloadFunc(onCompleteCb) {
  this.fetch(RESOURCE_TO_PRELOAD);

  this.oncomplete = () => {
    onCompleteCb();
  };

  this.onprogress = (event) => {
    preloadAnimation(event.progress);
  };

  this.onfetched = (item) => {
    // console.log(item);
  };

  this.onerror = (item) => {
    console.log(item);
  };
}

export const preloadHandler = preloadFunc.bind(preloader);
