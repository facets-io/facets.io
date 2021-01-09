import { useState } from 'react';
import { allFacets } from '../constant';
import AppContext from './AppContext';
import { SnackbarProvider } from 'notistack';
import FacetSnackbar from './FacetSnackbar';

const snackbarConfig = {
    autoHideDuration: 5000,
    vertical: 'bottom',
    horizontal: 'left'
}

export default function AppProvider({ children }) {

    const [hiddenFacets, setHiddenFacets] = useState([allFacets.facet1]);
    const [currentPage, setCurrentPage] = useState();

    return <AppContext.Provider value={{
        hiddenFacets, setHiddenFacets, currentPage, setCurrentPage
    }}>
        {/* @ts-ignore */}
        <SnackbarProvider
            style={{ height: '100%' }}
            maxSnack={4}
            disableWindowBlurListener
            autoHideDuration={snackbarConfig.autoHideDuration}
            iconVariant={{
                error: '✖️',
                warning: '⚠️',
            }}
            anchorOrigin={{
                vertical: snackbarConfig.vertical,
                horizontal: snackbarConfig.horizontal,
            }}
            content={(key, message) => (
                //@ts-ignore
                <FacetSnackbar id={key} {...message} />
            )}>
            {children}
        </SnackbarProvider>
    </AppContext.Provider >
}
