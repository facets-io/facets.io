
import { backendDocumentationIds, color } from "../constant"
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
        <FacetParagraph color={color.grayA}>
            The Facet Java Agent uses bytecode instrumentation to dynamically enable and disable methods at runtime within your application.
            This is achieved by transferring control back to the caller of the method via injected return statements.
            After integration you can toggle methods and endpoints in realtime without modifying or restarting you application.
        </FacetParagraph>
    </div>
}

export default JavaIntro;