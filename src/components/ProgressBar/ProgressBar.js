/**
 * ProgressBar
 * 
 * @param {number} value - Initial value of the progress bar.
 * @param {number} maxValue - Maximum progress bar value.
 * @param {boolean} showText - Present value text or not.
 * 
 * @throws {Error} If 'currentValue' is not a number or is less than zero.
 * @throws {Error} If 'maxValue' is not a number or is less than or equal to zero.
 * @throws {Error} If 'currentValue' is greater than 'maxValue'.
 * @throws {Error} If 'showText' is not a boolean.
 * 
 * @method create - Creates and returns the progress bar HTML element.
 * @method update - Updates the value of the progress bar and adjusts its width.
 * @method #createElementWithClass - Creates an HTML element with a specific class;
 * 
 * @param {HTMLElement} container - Container surrounding the progress bar;
 * @param {HTMLElement} bar - Element representing the progress bar;
 */

export class ProgressBar {
  constructor({value, maxValue, showText}) {
    this.#validateParameters(value, maxValue, showText);

    this.value = value;
    this.maxValue = maxValue;
    this.showText = showText;
  }

  create() {
    this.container = this.#createElementWithClass("div", "progress_container");
    
    if (this.showText) {
      this.label = this.#createElementWithClass("span", "label")
      this.container.appendChild(this.label);
    }

    this.bar = this.#createElementWithClass("div", "progress_bar");
    this.container.appendChild(this.bar);


    this.update(this.value, this.maxValue);

    return this.container;
  }

  update(newValue, newMaxValue) {
    if (newMaxValue && newMaxValue !== this.maxValue) this.maxValue = newMaxValue;
    
    this.value = newValue;

    const percentage = Math.floor((this.value / this.maxValue) * 100);
    const percentageString = `${percentage}%`

    if (percentage <= 100) {
      this.bar.style.width = percentageString;
    } else {
      this.bar.style.width = "100%";
      throw new Error("'currentValue' não pode ser maior que 'maxValue'.");
    }

    if (this.showText) {
      this.label.textContent = percentageString;
    }
  }

  #createElementWithClass(tag, className = "") {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  #validateParameters(currentValue, maxValue, showText) {
    if (typeof currentValue !== "number" || currentValue < 0) {
        throw new Error("O parâmetro 'currentValue' deve ser um número positivo.");
      }
      
      if (typeof maxValue !== "number" || maxValue <= 0) {
        throw new Error("O parâmetro 'maxValue' deve ser um número maior que zero.");
      }
      
      if (currentValue > maxValue) {
        throw new Error("'currentValue' não pode ser maior que 'maxValue'.");
      }
      
      if (showText && typeof showText !== "boolean") {
        throw new Error("O parâmetro 'showText' deve ser um valor booleano.");
      }
  }
}