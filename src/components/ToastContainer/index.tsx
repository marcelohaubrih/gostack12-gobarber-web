import React from 'react';
import { useTransition } from 'react-spring';
import Toast from './Toast';
import { Container } from './styles';
import { ToastMessage } from '../../hooks/Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', transform: 'rotateX(120deg)' },
      enter: { right: '0%', transform: 'rotateX(360deg)' },
      leave: { right: '-120%', transform: 'rotateX(120deg)' },
    },
  );
  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
