import { Controller } from "@hotwired/stimulus"
import { useIntersection, useResize } from 'stimulus-use'

export default class Autoclick extends Controller {
  options = {
    treshold: 0, //default
  }

  static messagesContainer;
  static topMessage;
  static throttling = false;

  connect() {
    console.log('connected to Autoclick controller');
    useIntersection(this, this.options)
    useResize(this)
  }

  appear(entry) {
    // triggered when the element appears within the viewport
    if (!Autoclick.throttling) {
      Autoclick.throttling = true;
      Autoclick.messagesContainer = document.getElementById("messages-container");
      Autoclick.topMessage = Autoclick.messagesContainer.children[0];
      Autoclick.throttle(this.element.click(), 300);

      setTimeout(() => {
        Autoclick.topMessage.scrollIntoView({
          behavior: "auto",
          block: "end",
        });
        console.log("Scrolling");
        Autoclick.throttling = false;
      }, 250);
    }
  }

  disappear(entry) {
  
  }

  resize({ height, width }) {
    // trigered when the element is resized
  }

  /**
   * Throttle the click function
   * @param {Function} func The function to throttle.
   * @param {Number} wait The time to wait before executing the function.
   */
  static throttle (func, wait) {
    let timeout = null;
    let previous = 0;

    let later = function () {
      previous = Date.now();
      timeout = null;
      func();
    };

    return function () {
      let now = Date.now();
      let remaining = wait - ( now - previous );

      if ( remaining <=0 || remaining > wait ) {
        if (timeout) {
          clearTimeout(timeout);
        }
        later();
      } else if ( !timeout ) {
        timeout = setTimeout(later, remaining);
      }
    }
  }
}