import isFinite from 'lodash/isFinite';

export const isCorrectNumber = value => {
  return isFinite(value);
};

export const valuesHandler = (value, text = 'No info') => {
  const modifiedValue = Number(value);

  if (isCorrectNumber(modifiedValue)) {
    return modifiedValue;
  }

  return text;
};

export const titlesHandler = value => {
  return value ? value : 'No info';
};
