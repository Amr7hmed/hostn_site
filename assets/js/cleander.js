import calendarNativeWebComponent from "https://cdn.skypack.dev/calendar-native-web-component@0.0.32";

const template = document.createElement("template");

template.innerHTML = `
  <style>
    .input-box {
        width: 100%;
        position: relative;
        box-sizing: border-box;
    }
  
    input {
        background: #ddd;
        width: 100%;
        border-radius: 4px;
        font-family: Nunito, sans-serif;
        border: none;
        padding: 1rem;
        box-sizing: border-box;
        box-shadow: inset 0 11px 8px -10px #999;
        font-weight: 300;
        font-size: .9rem;
        outline: none;
    }
    
    input.error {
        box-shadow: 0 0 3px #ff0000;
    }
    
    label {
        display: block;
        font-weight: 400;
        font-size: 1rem;
        margin-bottom: .5rem;
        margin-right: .3rem;
        text-transform: uppercase;
    }
    
    .required {
        width: .5rem;
        height: .5rem;
        margin-top: 5px;
    }
    
    .label-box {
        display: flex;
    }
  </style>
  <div class="input-box">
    <div id="label-box" class="label-box">
        <label id="label"></label>
    </div>
    <input type="text" id="input" />
  </div>
`;

class Input extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this._reflectValue();
  }

  static get observedAttributes() {
    return [
      "placeholder",
      "name",
      "label",
      "type",
      "pattern",
      "required",
      "value",
      "padding",
      "disabled"
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    switch (name) {
      case "placeholder":
        this.placeholder = newValue;
        break;
      case "type":
        this.type = newValue;
        break;
      case "pattern":
        this.pattern = newValue;
        break;
      case "name":
        this.name = newValue;
        break;
      case "label":
        this.label = newValue;
        break;
      case "required":
        this.required = newValue;
        break;
      case "disabled":
        this.disabled = newValue;
        break;
      case "value":
        this.value = newValue;
        break;
      case "padding":
        this.padding = newValue;
        break;
    }
  }

  set placeholder(placeholder) {
    const input = this.shadowRoot.getElementById("input");
    this._setAttribute(input, "placeholder", placeholder);
  }

  set type(type) {
    const input = this.shadowRoot.getElementById("input");
    this._setAttribute(input, "type", type);
  }

  set pattern(pattern) {
    const input = this.shadowRoot.getElementById("input");
    this._setAttribute(input, "pattern", pattern);
    this._validateInput(input, pattern);
  }

  set name(name) {
    const input = this.shadowRoot.getElementById("input");
    this._setAttribute(input, "name", name);

    const label = this.shadowRoot.getElementById("label");
    this._setAttribute(label, "for", name);
  }

  set label(labelText) {
    const label = this.shadowRoot.getElementById("label");
    label.innerText = labelText;
  }

  set required(required) {
    this._addRequiredIcon();
  }

  set disabled(disabled) {
    const input = this.shadowRoot.getElementById("input");
    input.setAttribute("disabled", "true");
  }

  set value(value) {
    const input = this.shadowRoot.getElementById("input");
    input.setAttribute("value", value);
  }

  set padding(padding) {
    const input = this.shadowRoot.getElementById("input");
    input.style.padding = padding;
  }

  _addRequiredIcon() {
    const icon = document.createElement("span");
    icon.innerText = "*";

    const labelBox = this.shadowRoot.getElementById("label-box");
    labelBox.appendChild(icon);
  }

  _reflectValue() {
    const input = this.shadowRoot.getElementById("input");
    input.addEventListener("keyup", () => {
      this.setAttribute("value", input.value);
    });
  }

  _setAttribute(element, qualifiedName, value) {
    if (qualifiedName && value) {
      element.setAttribute(qualifiedName, value);
    }
  }

  _validateInput(input, pattern) {
    input.addEventListener("keyup", (event) => {
      const inputValue = event.target.value;
      if (pattern) {
        const regex = new RegExp(pattern, "i");
        const found = inputValue.search(regex);
        this._addOrRemoveErrorClass(found, input);
      }
    });
  }

  _addOrRemoveErrorClass(found, input) {
    if (found !== -1) {
      input.removeAttribute("class");
      this.removeAttribute("has-error");
    } else {
      input.setAttribute("class", "error");
      this.setAttribute("has-error", "true");
    }
  }
}

customElements.define("text-input", Input);

const template2 = document.createElement("template");

template2.innerHTML = `
  <style>
      .date-picker {
        width: 300px;
      }
    </style>
  <div class="date-picker">
    <date-picker 
        id="date-picker"
        header-text-color="#fff"
        selected-text-color="#fff"
        primary-color="#01123F"
        secondary-color="#E9C061"
        month-name-background="#E9B947"
        show-fill-days="false"
        disable-days-before-today="true"
        day-names-background="#01123F"></date-picker>
  </div>
`;

class ChooseDate extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template2.content.cloneNode(true));
  }

  connectedCallback() {
    const datePicker = this.shadowRoot.getElementById("date-picker");
    datePicker.disabledDates = [
      { year: 2021, day: 1, month: 8 },
      { year: 2021, day: 2, month: 8 },
      { year: 2021, day: 3, month: 8 },
      { year: 2021, day: 4, month: 8 },
      { year: 2021, day: 5, month: 9 },
      { year: 2021, day: 11, month: 9 },
      { year: 2021, day: 12, month: 9 },
      { year: 2021, day: 13, month: 9 },
      { year: 2021, day: 22, month: 9 },
      { year: 2021, day: 24, month: 9 }
    ];
    this.handleSelectedDay();
    datePicker.additionalStyle = `
            .calendar > * {
              line-height: 2rem;
            }
            
            header {
                padding: .5rem 1rem;
            }
            
            .days-in-month i, .days-in-month {
                padding: .4rem; 
            }
            
            .calendar #days-in-month i.padding-single-digit {
                padding: .4rem .7rem;
            }
            
            .calendar .days-in-month i.active {
                padding: .3rem; 
            }
            
            .days-in-month {
              border: 1px solid #ddd;
            }
        `;
  }

  handleSelectedDay() {
    const datePicker = this.shadowRoot.getElementById("date-picker");
    const observer = new MutationObserver((mutationsList) => {
      const selectedDate = mutationsList[0].target.selectedDate;
      this.setAttribute("selected-date", this.convertDateFormat(selectedDate));
    });

    observer.observe(datePicker, {
      attributes: true,
      attributeFilter: ["selected-date"]
    });
  }

  convertDateFormat(date) {
    let dateConverted = "";
    const dateSplit = date.split(".");

    if (dateSplit.length === 3) {
      dateConverted = `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`;
    }

    return dateConverted;
  }

  static get observedAttributes() {
    return ["your-attribute"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    if (name === "your-attribute") {
      this.yourAttribute = newValue;
    }
  }

  set data(data) {
    this._data = data;
    console.log("data", this._data);
  }
}

customElements.define("choose-date", ChooseDate);

const fillDateInput = () => {
  const datePicker = document.getElementById("date-picker");
  const dateInput = document.getElementById("date-input");
  let datePickerOpen = false;

  dateInput.addEventListener("click", () => {
    if (datePickerOpen) {
      datePicker.style.display = "none";
    } else {
      datePicker.style.display = "block";
    }

    datePickerOpen = !datePickerOpen;
  });

  const observer = new MutationObserver((mutationsList) => {
    const selectedDate = mutationsList[0].target.getAttribute("selected-date");
    const date = new Date(selectedDate);
    dateInput.value = `${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()}`;
    datePicker.style.display = "none";
    datePickerOpen = !datePickerOpen;
  });

  observer.observe(datePicker, {
    attributes: true,
    attributeFilter: ["selected-date"]
  });
};
fillDateInput();
