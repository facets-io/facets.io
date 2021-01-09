import React from 'react'

const pages = {
    Pricing: 'Pricing',
    Documentation: 'Documentation',
    Blog: 'Blog',
    Contact: 'Contact'
}

const AppContext = React.createContext({});

export default AppContext;
export { pages };