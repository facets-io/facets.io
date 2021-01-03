import { useState } from 'react';
import AppContext from './AppContext';

export default function AppProvider({ children }) {

    const [hiddenFacets, setHiddenFacets] = useState([]);

    return <AppContext.Provider value={{
        hiddenFacets, setHiddenFacets
    }}>
        {children}
    </AppContext.Provider >
}