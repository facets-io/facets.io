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
    const [estimatedCost, setEstimatedCost] = useState('free');

    const pricingTier = [
        {
            name: 'First 1 Million',
            cost: 0,
            limit: 1000000
        }
        ,
        {
            name: 'Next 250 Million',
            cost: 0.000001,
            limit: 250000000
        }
        ,
        {
            name: 'Next 1 Billion',
            cost: 0.0000009,
            limit: 1000000000,
        },
        {
            name: 'Enterprise',
        },
        {
            name: 'Self Hosted',
            cost: 0,
            limit: 1000000000,
        }
    ]

    const calculate = (requestNumber) => {
        let remainingRequests = requestNumber;
        let cost = 0;
        if (remainingRequests > pricingTier[0].limit) {
            remainingRequests -= pricingTier[0].limit;
        } else {
            setEstimatedCost('$ free/mo')
            return
        }
        if (remainingRequests > pricingTier[1].limit) {
            remainingRequests -= pricingTier[1].limit
            cost += (pricingTier[1].limit * pricingTier[1].cost)
        } else {
            cost += (remainingRequests * pricingTier[1].cost)
            setEstimatedCost(`$ ${cost.toFixed(2)}/mo`)
            return
        }
        cost += (remainingRequests * pricingTier[2].cost)
        if (cost > 4500) {
            setEstimatedCost(`Enterprise Plan`)
            return
        }
        setEstimatedCost(`$ ${cost.toFixed(2)}/mo`)
    }

    return <AppContext.Provider value={{
        hiddenFacets, setHiddenFacets, currentPage, setCurrentPage,
        estimatedCost, setEstimatedCost, calculate, pricingTier
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


