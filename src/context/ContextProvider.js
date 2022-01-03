import React,{createContext, useState} from 'react';
import useFirebase from '../hooks/useFirebase';

export const GetContext = createContext();

const ContextProvider = ({children}) => {
    const [singleCourse,setSingleCourse] = useState({});
    const value = {
        authContext:useFirebase(),
        setSingleCourse:setSingleCourse,
        singleCourse:singleCourse
    }
    return (
        <>
            <GetContext.Provider value={value}>
                {children}
            </GetContext.Provider>
        </>
    );
};

export default ContextProvider;