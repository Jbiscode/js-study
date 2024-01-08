import { useState } from "react";

import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton/TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function HandleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
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
        <Section id="examples">
            <Tabs
                // buttonsContainer="menu"
                buttons={
                    <>
                        <TabButton isSelected={selectedTopic === "components"} onClick={() => HandleSelect("components")}>
                            Components
                        </TabButton>
                        <TabButton isSelected={selectedTopic === "jsx"} onClick={() => HandleSelect("jsx")}>
                            JSX
                        </TabButton>
                        <TabButton isSelected={selectedTopic === "props"} onClick={() => HandleSelect("props")}>
                            Props
                        </TabButton>
                        <TabButton isSelected={selectedTopic === "state"} onClick={() => HandleSelect("state")}>
                            State
                        </TabButton>
                    </>
                }
            >
                {tabContent}
            </Tabs>
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
        </Section>
    );
}
