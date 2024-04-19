import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";


export default function NewProject({onAddClick}) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const duedate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = duedate.current.value;

    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredDueDate.trim().length === 0
    ) {
      modal.current.open();
      return;
    }

    onAddClick({
      title: enteredTitle,
      description: enteredDescription,
      duedate: enteredDueDate,
    })
  }

  return (
    <>
    <Modal ref={modal} buttonCaption="닫기">
      <h2>입력값을 확인하세요</h2>
      <p>뭔가를 빠트린거같아요!</p>
    </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">취소</button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}>
              등록
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={duedate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
