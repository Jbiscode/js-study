import { memo } from "react";
import { log } from "../../log.js";

const IconButton = memo(function IconButton({ children, icon, ...props }) {
  log("<IconButton /> rendered", 2);

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
});

export default IconButton;
// memo 함수를 사용하여 IconButton 컴포넌트를 메모이제이션.
// 이는 컴포넌트의 렌더링 성능을 향상시키는 데 도움.
// props가 변경되지 않았다면, React는 이전에 렌더링된 결과를 재사용하여 불필요한 렌더링을 방지
