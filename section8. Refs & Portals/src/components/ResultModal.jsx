import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  refDialog
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(refDialog, () => ({
    open: () => {
      dialog.current.showModal();
    },
  }));

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>실패 !</h2>}
      {!userLost && <h2>SCORE : {score}</h2>}
      <p>
        목표시간은 <strong>{targetTime}</strong>초 였습니다.
      </p>
      <p>
        당신은 <strong>{formattedTime}</strong> 초 남기고 눌렀습니다.
      </p>
      <form action="dialog" onSubmit={onReset}>
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
