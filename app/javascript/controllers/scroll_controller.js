import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // On strrt
  connect() {
    console.log("Scroll controller connected")
    const messages = document.getElementById("messages");
    messages.addEventListener("DOMNodeInserted", this.resetScroll);
    this.resetScroll(messages);
  }

  // On Stop
  disconnect() {
    console.log("Disconnected")
  }

  // Custom function
  resetScroll() {
    messages.scrollTop = messages.scrollHeight - messages.clientHeight;
  }
}