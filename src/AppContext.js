import React from 'react';

const AppContext = React.createContext({
    hiddenElementsArray: [],
    onFacetAdd: (e) => { },
    // isAddingFacet: false,
    // setIsAddingFacet: () => { }
});

export default AppContext;