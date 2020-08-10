import React, { useState } from 'react';
import AppContext from './AppContext';
import { useSnackbar } from 'notistack';

const AppProvider = ({ children, hiddenElementsArray }) => {

    const { enqueueSnackbar } = useSnackbar();
    const [addedFacets, setAddedFacets] = useState([]);
    const [isAddingFacet, setIsAddingFacet] = useState(false);

    const onFacetAdd = (label) => {
        setAddedFacets([label, ...addedFacets]);
        enqueueSnackbar(`Facet ${label} was created!`, { variant: "success" });
        setIsAddingFacet(false);
    }

    return <AppContext.Provider value={{ hiddenElementsArray, onFacetAdd, addedFacets, isAddingFacet, setIsAddingFacet }}>{children}</AppContext.Provider>
};

export default AppProvider;
