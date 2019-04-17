import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';


Modal.setAppElement('#root');

const ModalAdapter = ({ className, ...props }) => {
  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;
  return (
    <Modal
      portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
      {...props}
    />
  )
}

const StyledModal = styled(ModalAdapter)`

  &__overlay {
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0px;
    display: flex;
    justify-content: center;
    left: 0px;
    position: fixed;
    right: 0px;
    top: 0px;
  }

  &__content {
    background: #2d2d2d;
    border: 1px solid #6d6d6d;
    border-radius: 4px;
    margin: auto;
    overflow: auto;
    outline: none;
    padding: 20px;
    position: absolute;
    top: 25rem;
    -webkit-overflow-scrolling: touch;
  }
`;

export default StyledModal;