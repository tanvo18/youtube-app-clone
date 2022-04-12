export const setItemStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const getItemStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const removeItemStorage = (key) => {
  localStorage.removeItem(key);
};