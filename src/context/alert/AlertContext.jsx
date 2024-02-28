import { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(null);

    const showAlert = (message, statusCode = null) => { // Modify showAlert to accept statusCode
        setAlert({ message, statusCode }); // Pass statusCode to setAlert
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };

    return (
        <AlertContext.Provider value={{ alert, showAlert }}>
            {children}
        </AlertContext.Provider>
    );
};
