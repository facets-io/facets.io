import styled from 'styled-components';

const CenteredBlockQuote = styled.blockquote`
    text-align: center;
`

export default ({ children }) => {
    return <CenteredBlockQuote>
        {children}
    </CenteredBlockQuote>
}