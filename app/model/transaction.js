'use strict';
export function Transaction(value, tax, type, date) {
  this.value = value;
  this.tax = tax;
  this.type = type;
  this.date = date;
}
