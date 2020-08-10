import React, { useState } from 'react';
import AppContext from './AppContext';

const AppProvider = ({ children, hiddenElementsArray }) => {

    const [addedFacets, setAddedFacets] = useState([]);
    const [isAddingFacet, setIsAddingFacet] = useState(false);

    const onFacetAdd = (label) => {
        setAddedFacets([label, ...addedFacets]);
        setIsAddingFacet(false);
    }

    return <AppContext.Provider value={{ hiddenElementsArray, onFacetAdd, addedFacets, isAddingFacet, setIsAddingFacet }}>{children}</AppContext.Provider>
};

export default AppProvider;
