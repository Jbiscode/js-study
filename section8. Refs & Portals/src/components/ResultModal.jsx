import {useRef, forwardRef, useImperativeHandle } from "react";

const ResultModal = forwardRef(function ResultModal({result, targetTime },refDialog) {
  const dialog = useRef();

  useImperativeHandle(refDialog, () => ({
    open: () => {
      dialog.current.showModal();
    },
  }));

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        목표시간은 <strong>{targetTime}</strong>초 였습니다.
      </p>
      <p>당신은 X 초 남기고 눌렀습니다.</p>
      <form action="dialog">
        <button>close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;