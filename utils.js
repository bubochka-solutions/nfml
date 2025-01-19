const checkObject = (object, queryObject) => {
  const { including, excluding } = queryObject;

  if (!including && !excluding) {
    throw new Error(
      'queryObject has incorrect form. It should have one of these fields: ' +
      'including, excluding'
    );
  }

  if (typeof including === 'object') {
    const result = Object.keys(including).every(
      (key) => object[key] === including[key]
    );

    if (!result) return false;
  }

  if (typeof excluding === 'object') {
    const result = Object.keys(excluding).every(
      (key) => object[key] !== excluding[key]
    );

    if (!result) return false;
  }

  return true;
};

const findElementLogic = (object, queryObject, returnImmediately) => {
  const resultStack = [];

  // `null` has a type of `object`, so we need to perform check for this
  // thing in first place. JS, thank you so much!
  if (object === null) {
    return (returnImmediately) ? null : resultStack;
  }

  const performDeeperSearch = (element) => {
    const result = findElementLogic(element, queryObject, returnImmediately);

    if (returnImmediately && result !== null) {
      return result;
    }

    resultStack.push(...result);
  };

  if (Array.isArray(object)) {
    for (const element of object) {
      if (typeof element === 'object') {
        performDeeperSearch(element);
      }
    }
  } else if (typeof object === 'object') {
    if (checkObject(object, queryObject)) {
      if (returnImmediately) {
        return object;
      }

      resultStack.push(object);
    }

    const objectsToExamine = Object.values(object).filter(
      (element) => typeof element === 'object'
    );

    for (const element of objectsToExamine) {
      performDeeperSearch(element);
    }
  }

  return (returnImmediately) ? null : resultStack;
};


export const findElement = (object, queryObject) =>
  findElementLogic(object, queryObject, true);

export const findMultipleElements = (object, queryObject) =>
  findElementLogic(object, queryObject, false);

export const kebabToCamelCase = (string) =>
  string.replace(/-./g, (x) => x[1].toUpperCase());

export const capitalize = (string) =>
  string[0].toUpperCase() + string.slice(1);
