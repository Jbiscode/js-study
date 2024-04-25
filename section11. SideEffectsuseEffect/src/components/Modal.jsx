import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

// onClose 함수를 받아서 dialog의 onClose 이벤트에 연결해준다. ESC로 닫았을때도 modal을 false로 바꿔주기 위함이다.
function Modal({ open, onClose, children }) {
  const dialog = useRef();
  // 여기서는 무한 루프를 방지하기 위한것이 아니라, 특정값을 동기화시키고자 하기때문에 useEffect를 사용한다.
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);
  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
