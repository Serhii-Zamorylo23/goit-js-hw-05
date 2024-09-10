class StringBuilder {
  constructor(initialValue) {
    this._value = initialValue;
  }
  append(str) {
    this._value += str;
  }
  prepend(str) {
    this._value = str + this._value;
  }
  pad(str) {
    this.append(str);
    this.prepend(str);
  }
  getValue() {
    return this._value;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder); // '.^'

builder.prepend('^');
console.log(builder); // '^.^'

builder.pad('=');
console.log(builder); // '=^.^='