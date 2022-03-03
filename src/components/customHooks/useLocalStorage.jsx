import { useState } from 'react';

export function useLocalStorage (key, initialValue) {
    const [storedValue, setStoredValue] = useState(()=>{
        try{
            const items = localStorage.getItem(key);
            return items ? JSON.parse(items) : initialValue;
        }catch(error){
            return initialValue;
        }

    })

    const setValue = value => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue]
}