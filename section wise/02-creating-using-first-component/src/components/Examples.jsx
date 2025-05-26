import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
export default function Examples(){
  
        const [selectedTopic , setSelectedTopic] = useState();

   function handleSelect(selectedButton) {
    // selectedButton =>z 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
   }
   console.log("app tabButton is renderring");

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
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic ==='components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic ==='jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic ==='props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic ==='state'} onSelect={() => handleSelect('state')}>State</TabButton>
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
          
        </section>
    );
}