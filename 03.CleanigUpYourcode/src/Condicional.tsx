import { FC, ReactElement } from "react";

interface Props {
  children: ReactElement | String;
  isTrue?: Boolean;
  isFalse?: Boolean;
}

const RenderIf: FC<Props> = ({ children, isTrue, isFalse }) => {
  if (isTrue === true) {
    return <>{children}</>;
  }
  if (isFalse === false) {
    return <>{children}</>;
  }
  return null;
};

export default RenderIf;
