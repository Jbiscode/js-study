import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {/* // map을 이용해서 반복문을 돌릴 수 있음 : key를 추가해줘야 리액트가 내용물이 고유한지 확인할 수 있다고함
                        요소들을 동적으로 리스트에 출력할 때는, 모든 요소는 고유한 “키”를 받아서 리액트에게 리스트 아이템 아이템을 구분 짓도록 알려준다*/}
                {CORE_CONCEPTS.map((conceptItem) => (
                    <CoreConcept key={conceptItem.title} {...conceptItem}></CoreConcept>
                ))}
                {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}></CoreConcept>
                        <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
                        <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
                        <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept> */}
            </ul>
        </section>
    );
}
