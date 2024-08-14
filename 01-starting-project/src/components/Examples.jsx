import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples(){
    const [selectedText,setselectedText] = useState("");
    var tabContent;
    if (selectedText === ""){
        tabContent = <div id='tab-content'>Please Select a Tab</div>;
    }
    else{
        tabContent = <div id='tab-content'>
                        <h3>{EXAMPLES[selectedText].title}</h3>
                        <p>
                        {EXAMPLES[selectedText].description}
                        </p>
                        <pre>
                        <code>
                        {EXAMPLES[selectedText].code}
                        </code>
                        </pre>
                    </div>;
    }

    function handleSelect(selectedBtn){
    setselectedText(selectedBtn);
  }

    return(
        <>
        <Section title="Examples" id ="examples">
         <Tabs buttons = {<><TabButton isSelected = {selectedText == 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                            <TabButton isSelected = {selectedText == 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                            <TabButton isSelected = {selectedText == 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                            <TabButton isSelected = {selectedText == 'state'} onClick={() => handleSelect('state')}>State</TabButton></>}           
               ButtonsContainer = "menu">

        {tabContent} 
        </Tabs>
        </Section>
        </>
    )
}