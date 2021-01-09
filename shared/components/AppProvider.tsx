import { useState } from 'react';
import { allFacets } from '../constant';
import AppContext from './AppContext';

export default function AppProvider({ children }) {



    const [hiddenFacets, setHiddenFacets] = useState([allFacets.facet1]);
    const [currentPage, setCurrentPage] = useState();

    return <AppContext.Provider value={{
        hiddenFacets, setHiddenFacets, currentPage, setCurrentPage
    }}>
        {children}
    </AppContext.Provider >
}
