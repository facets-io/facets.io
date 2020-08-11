import React, { useState } from 'react';
import AppContext from './AppContext';
import { useSnackbar } from 'notistack';

const AppProvider = ({ children, hiddenElementsArray }) => {

    const { enqueueSnackbar } = useSnackbar();
    const [addedFacets, setAddedFacets] = useState(["Default-Facet"]);
    const [isAddingFacet, setIsAddingFacet] = useState(false);
    const [canDeleteElement, setCanDeleteElement] = useState(false);

    // const [shouldDisplay, setShouldDisplay] = useState(false);
    const [newlyAddedFacet, setNewlyAddedFacet] = useState("Default-Facet");
    // String "Key", Array Values
    const [addedElements, setAddedElements] = useState(new Map());

    const onFacetAdd = (label) => {
        if (addedFacets.includes(label)) {
            enqueueSnackbar(`Please choose a unique name for your Facet.`, { variant: "error" });
            return;
        }
        setAddedFacets([label, ...addedFacets]);
        setNewlyAddedFacet(label);
        enqueueSnackbar(`Facet "${label}" was created!`, { variant: "success" });
        window.selectedDOM = 'main';
        setIsAddingFacet(false);
    }

    return <AppContext.Provider value={{
        hiddenElementsArray, onFacetAdd, addedFacets,
        isAddingFacet, setIsAddingFacet, newlyAddedFacet,
        setNewlyAddedFacet, addedElements, setAddedElements,
        canDeleteElement, setCanDeleteElement
    }}>
        {children}
    </AppContext.Provider>
};

export default AppProvider;
