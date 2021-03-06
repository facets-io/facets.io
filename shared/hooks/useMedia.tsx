import { useState, useEffect } from 'react';
import { responsiveThresholds } from '../constant';

/**
 * Taken from https://usehooks.com/useMedia/
 */
const useMedia = () => {
    const queries = Object.values(responsiveThresholds);
    // Array containing a media query list for each query
    const mediaQueryLists = process.browser ? queries.map(q => window.matchMedia(q)) : [];

    // Function that gets value based on matching media query
    const getValue = () => {
        // Get index of first media query that matches
        const index = mediaQueryLists.findIndex(mql => mql.matches);

        return queries[index];
    };

    // State and setter for matched value
    const [value, setValue] = useState(getValue);

    useEffect(() => {
        // Event listener callback
        // Note: By defining getValue outside of useEffect we ensure that it has ...
        // ... current values of hook args (as this hook callback is created once on mount).
        const handler = () => setValue(getValue);
        // Set a listener for each media query with above handler as callback.
        mediaQueryLists.forEach(mql => mql.addListener(handler));
        // Remove listeners on cleanup
        return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
    }, []);

    return value;
}

export default useMedia;