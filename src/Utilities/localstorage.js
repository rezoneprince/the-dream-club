
const addToLocalStorage = (id) => {
  let shoppingCart = {};

  

  const storedCart = localStorage.getItem("gymnastic");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }


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
 
  const storedCart = localStorage.getItem("gymnastic");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
    return shoppingCart;
  }
};

const removeFromLocalStorage = (id) => {

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

