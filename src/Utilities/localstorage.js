// Use Local Storage to manage cart data
const addToLocalStorage = (id) => {
  let shoppingCart = {};

  // get the shopping cart

  const storedCart = localStorage.getItem("gymnastic");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    shoppingCart[id] = quantity + 1;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("gymnastic", JSON.stringify(shoppingCart));
};

const getStoredCart = () => {
  let shoppingCart = {};
  // get the shopping cart
  const storedCart = localStorage.getItem("gymnastic");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
    return shoppingCart;
  }
};

const removeFromLocalStorage = (id) => {
  // console.log("remove", id);
  const storedCart = localStorage.getItem("gymnastic");
  const shoppingCart = JSON.parse(storedCart);
  if (storedCart) {
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("gymnastic", JSON.stringify(shoppingCart));
    }
  }
};
const deleteFromLocalStorage = () => {
  localStorage.removeItem("gymnastic");
};

export {
  addToLocalStorage,
  getStoredCart,
  removeFromLocalStorage,
  deleteFromLocalStorage,
};

