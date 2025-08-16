import { STORAGE_KEYS } from "./constants";

export function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error(`Error saving data from Local Storage: ${error.message}`);
     }
}

export function getFromStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
      
    } catch (error) {
        console.error(`Error getting data from Local Storage: ${error.message}`);
        return null;
  }
  
}

export function removeFromStorage(key) {
    return localStorage.removeItem(key)

}

export function addToWishlist(id) {
    const wishlistItems = getFromStorage(STORAGE_KEYS.WISHLIST) || [];
    if (!wishlistItems.includes(id)) {
        wishlistItems.push(id);
        saveToStorage(STORAGE_KEYS.WISHLIST, wishlistItems);
    }

    
}