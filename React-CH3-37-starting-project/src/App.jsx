// CORE_CONCEPTS 내에서 불러와서 필요없어짐
// import componentsImg from "./assets/components.png";
import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {
    const [selectedTopic, setSelectedTopic] = useState();
    // let tabContent = "Please click a tab button to see the content.";
    function HandleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        // console.log(selectedTopic);
    }

    let tabContent = <p>Please select a topic</p>;
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }
    return (
        <div>
            <Header></Header>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}></CoreConcept>
                        <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
                        <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
                        <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={selectedTopic==="components"} onSelect={() => HandleSelect("components")}>Components</TabButton>
                        <TabButton isSelected={selectedTopic==="jsx"} onSelect={() => HandleSelect("jsx")}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic==="props"} onSelect={() => HandleSelect("props")}>Props</TabButton>
                        <TabButton isSelected={selectedTopic==="state"} onSelect={() => HandleSelect("state")}>State</TabButton>
                    </menu>
                    {/* 상황에 따라서 다른 컴포넌트를 불러오는 방법 : 삼항연산자 */}
                    {/* {!selectedTopic ? (
                        <p>Please select a topic</p>
                    ) : (
                        <div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </div>
                    )} */}
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
