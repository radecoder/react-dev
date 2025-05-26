import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from './Section.jsx';

export default function Examples(){
  const [selectedTopic , setSelectedTopic] = useState();

   function handleSelect(selectedButton) {
    // selectedButton =>z 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
   }
  //  console.log("app tabButton is renderring");

   let tabContent =  <p>please select topic</p>;
   if (selectedTopic){
    tabContent= (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div> );
   }    
     return(
        <Section title="Examples" id='examples'>
          <menu>
            <TabButton isSelected={selectedTopic ==='components'} onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic ==='jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic ==='props'} onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic ==='state'} onClick={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
            {/* {!selectedTopic ? <p>please select topic</p> : null}
            {selectedTopic ? <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div> : null}
          
          
          
          or   */}

          

            {/* {!selectedTopic ? <p>please select topic</p> : <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>} 
          
          
          or   */}

           {/* {!selectedTopic && <p>please select topic</p>}
            {selectedTopic && (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div> )} 
          
          or see on top */}
          
        </Section>
    );
}