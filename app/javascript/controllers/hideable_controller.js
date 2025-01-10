import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="hideable"
export default class extends Controller {
  static targets = ['element']
  connect() {
    console.log(this.element)
    setTimeout(() => {
      this.hideElement()
    }, 3000)
  }

  hideElement() {
    this.element.style.display = 'none'
  }
}
