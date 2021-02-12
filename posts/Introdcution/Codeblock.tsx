import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = () => {
    const codeString = `function reticulateSplines(){
    var useNewAlgorithmFlag = false;
  
    if( useNewAlgorithmFlag ) {
        return enhancedSplineReticulation();
    } else {
        return oldFashionedSplineReticulation();
    }
  }`;
  
    return (
      <SyntaxHighlighter
        showLineNumbers
        language="language-markup"
        style={atomDark}
      >
        {codeString}
      </SyntaxHighlighter>
    );
  };

  export default CodeBlock;