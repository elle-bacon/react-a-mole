export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }
  
  export const initialState = [0, 0, 0, 0, 0, 0, 0, 0, 0]