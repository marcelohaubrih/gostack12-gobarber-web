import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription>
        <FiAlertCircle />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>não foi possivel fazer o login</p>
        </div>
        <button type="button">
          <FiXCircle size={24} />
        </button>
      </Toast>
      <Toast type="sucess" hasDescription={false}>
        <FiAlertCircle />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>não foi possivel fazer o login</p>
        </div>
        <button type="button">
          <FiXCircle size={24} />
        </button>
      </Toast>
      <Toast type="error" hasDescription>
        <FiAlertCircle />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>não foi possivel fazer o login</p>
        </div>
        <button type="button">
          <FiXCircle size={24} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
