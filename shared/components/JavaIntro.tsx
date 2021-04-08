
import { backendDocumentationIds } from "../constant"
import FacetH1 from "./FacetH1";
import FacetParagraph from "./FacetParagraph"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const MapCodeBlock = () => {
    const codeString = `    byte    ->  Byte.MIN_VALUE
    short   ->  Short.MIN_VALUE
    int     -> Integer.MIN_VALUE
    long    -> Long.MIN_VALUE
    float   -> Float.MIN_VALUE
    double  -> Double.MIN_VALUE
    char    -> Character.MIN_VALUE
    boolean -> false
    void    -> void
    other   -> null`;

    return (
        <SyntaxHighlighter showLineNumbers language="language-markup" style={atomDark}>
            {codeString}
        </SyntaxHighlighter>
    );
};

const JavaIntro = () => {
    return <div>
        <FacetH1 id={backendDocumentationIds.introduction}>Introduction</FacetH1>
        <FacetParagraph>
            The Facet Java SDK can be used with the Spring Framework. Facet's Java-Agent allows <b>enabling</b> and <b>disabling</b> methods and endpoints in your application.
            When a method is disabled, a default value is returned, which is usually the minimum value of the class. This is how values are mapped:
            <MapCodeBlock />
            On this page; get up and running with Facet's SDK, so that it will automatically switch methods and endpoints to enable/disable.
        </FacetParagraph>
    </div>
}

export default JavaIntro;