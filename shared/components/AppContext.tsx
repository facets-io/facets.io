import React from 'react'

const pages = {
    Home: 'Home',
    Pricing: 'Pricing',
    Documentation: 'Documentation',
    Blog: 'Blog',
    Contact: 'Contact',
    Dashboard: 'Dashboard'
}

const AppContext = React.createContext({});

export default AppContext;
export { pages };