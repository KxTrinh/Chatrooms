import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  initialize() {
    this.resetScrollWithoutThreshold(messages);
  }

  // On start
  connect() {
    console.log("Scroll controller connected")
    const messages = document.getElementById("messages");
    messages.addEventListener("DOMNodeInserted", this.resetScroll);
    this.resetScrollWithoutThreshold(messages);
    // this.resetScroll(messages);
  }

  // On Stop
  disconnect() {
    console.log("Disconnected")
  }

  // Custom function
  resetScroll() {
    const bottomOfScroll = messages.scrollHeight - messages.clientHeight;
    const upperScrollThreshold = bottomOfScroll - 500;
    // Scroll down if we're not withing the threshold
    if (messages.scrollTop > upperScrollThreshold) {
      messages.scrollTop = messages.scrollHeight - messages.clientHeight;
    }
  }
  
  resetScrollWithoutThreshold(messages) {
    messages.scrollTop = messages.scrollHeight - messages.clientHeight;
  }
}