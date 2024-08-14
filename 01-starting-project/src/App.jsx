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
    setselectedText(selectedBtn);
  }


  return (
    <>
      <Header />
      
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((item) => <CoreConcept {...item} />)}
          {/* <CoreConcept {...CORE_CONCEPTS[0]}/> */}
        </ul>
        </section>
        <section id ="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected = {selectedText == 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected = {selectedText == 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected = {selectedText == 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected = {selectedText == 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
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
    </>
  );
}

export default App;
