import { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import { EXAMPLES } from './data';

import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';



function App() {
  const [selectedText,setselectedText] = useState("components");
  var dynamicContent = "Test";
  function handleSelect(selectedBtn){
    // dynamicContent = selectedBtn;
    setselectedText(selectedBtn);
    console.log(selectedText);
    
  }


  return (
    <div>
      <Header />
      
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]}/>
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
        <section id ="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
        </section>
        <div id='tab-content'>
          <h3>{EXAMPLES[selectedText].title}</h3>
          <p>
            {EXAMPLES[selectedText].description}
          </p>
          <pre>
            <code>
            {EXAMPLES[selectedText].code}
            </code>
          </pre>
        </div>
      </main>
    </div>
  );
}

export default App;
