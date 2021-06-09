import {createContext} from 'react';

export const ValidationFormContext = createContext();

const validetionUrl = item => {
  return item.startsWith('https://');
};

const validationObj = {
  length: (minLength, maxLength, item) => {
    if (minLength > 0) {
      return item.length > minLength && item.length < maxLength ? true : false;
    }
  },
  fieldType: (type, item) => {
    switch (type) {
      case 'url': return validetionUrl(item);
      default: return true;
    }
  }
};

export const validation = (value, minLength = 0, maxLength = 10000, fieldType = false) => {
  validationObj.lengthIsValid = validationObj.length(minLength, maxLength, value);
  validationObj.fieldTypeValid = validationObj.fieldType(fieldType, value);
  // console.log(validationObj.fieldTypeValid)
  // console.log(validationObj.lengthIsValid)

  return validationObj.lengthIsValid && validationObj.fieldTypeValid ? true : false;
};
