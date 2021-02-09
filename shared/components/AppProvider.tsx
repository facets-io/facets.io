import { useState } from 'react';
import { allFacets, color } from '../constant';
import AppContext from './AppContext';
import { SnackbarProvider } from 'notistack';
import FacetSnackbar from './FacetSnackbar';

const snackbarConfig = {
    autoHideDuration: 5000,
    vertical: 'top',
    horizontal: 'left'
}

export default function AppProvider({ children }) {

    const [hiddenFacets, setHiddenFacets] = useState([allFacets.facet1]);
    const [currentPage, setCurrentPage] = useState();
    const [estimatedCost, setEstimatedCost] = useState('$ 0.00');

    const pricingTier = [
        {
            name: 'First 1 Thousand',
            cost: 0,
            costText: 'free',
            limit: 1000
        }
        ,
        {
            name: 'Next 5 Thousand',
            cost: 0.05,
            costText: '$0.05 per request',
            limit: 5000
        }
        ,
        {
            name: 'Next 250 Thousand',
            cost: 0.0033,
            costText: '$0.0033 per request',
            limit: 250000,
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
            return '$ 0.00'
        }
        if (remainingRequests > pricingTier[1].limit) {
            remainingRequests -= pricingTier[1].limit
            cost += (pricingTier[1].limit * pricingTier[1].cost)
        } else {
            cost += (remainingRequests * pricingTier[1].cost)
            return `$ ${cost.toFixed(2)}`
        }
        cost += (remainingRequests * pricingTier[2].cost)
        if (cost < 5000) {
            return `$ ${cost.toFixed(2)}`
        }
        return 'Enterprise';
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


