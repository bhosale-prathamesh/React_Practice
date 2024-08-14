import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

export default function Examples(){
    const [selectedText,setselectedText] = useState("components");

    function handleSelect(selectedBtn){
    setselectedText(selectedBtn);
  }

    return(
        <>
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
        </>
    )
}