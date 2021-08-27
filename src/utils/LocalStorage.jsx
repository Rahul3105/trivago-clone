/**
 * 
 * @param {'key'} key 
 * @returns {String}
 */


export const getLocalStorage = (key) => {
    try {
        let data = localStorage.getItem(key);
        return JSON.parse(data);
    } catch (err) {
        return undefined;
    }
}


export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
export const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
}