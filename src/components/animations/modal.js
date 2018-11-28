import posed from 'react-pose';
import styled from 'styled-components';

const ModalPose = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

const ModalBackgroundPose = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

export const Modal = styled(ModalPose)`
  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100vw;
  margin: 0 auto;
  background: white;
  z-index: 10;
`;

export const ModalBackground = styled(ModalBackgroundPose)`
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
`;
