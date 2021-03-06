import styled from "styled-components";

const Backdrop = props => <Backdropp onClick={props.click} />;
export default Backdrop;

const Backdropp = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
  top: 0;
  left: 0;
`;
