import React from 'react';

const AppContext = React.createContext({
    hiddenElementsArray: []
});


const AppProvider = ({children, hiddenElementsArray}) => {
    console.log('HEYA',hiddenElementsArray);
    return <AppContext.Provider value={{ hiddenElementsArray }}>{children}</AppContext.Provider>
};

export default AppProvider;