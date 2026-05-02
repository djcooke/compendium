function storageAvailable() {
  // Simpler version of recommendation here:
  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#feature-detecting_localstorage
  try {
    const storage = window.localStorage;
    if (!storage) {
      return false;
    }
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
}
