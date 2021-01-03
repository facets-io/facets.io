import { useState } from 'react';
import { allFacets } from '../constant';
import AppContext from './AppContext';

export default function AppProvider({ children }) {

    const [hiddenFacets, setHiddenFacets] = useState([allFacets.facet1]);

    return <AppContext.Provider value={{
        hiddenFacets, setHiddenFacets
    }}>
        {children}
    </AppContext.Provider >
}