// next function is for getting data from localhost and returning it as an array
export function getDataToArray(dataName) {
  return JSON.parse(localStorage.getItem(dataName));
}
// next function recieves object and after stringifying it set it to localhost
export function setDataObject(storageName, dataObject) {
  localStorage.setItem(storageName, JSON.stringify(dataObject));
}

export const asyncLocalStorage = {
  setItem: async function (key, value) {
    return Promise.resolve().then(() => {
      localStorage.setItem(key, JSON.stringify(value));
    });
  },
  getItem: async function (key) {
    return Promise.resolve().then(() => {
      JSON.parse(localStorage.getItem(key));
    });
  },
};
