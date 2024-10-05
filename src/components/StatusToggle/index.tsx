import React, { useState } from 'react';
import { ToggleWrapper, ToggleButton } from './styles';

const StatusToggle: React.FC<{ isScheduled: boolean; setIsScheduled: (value: boolean) => void }> = ({ isScheduled, setIsScheduled }) => {
  return (
    <ToggleWrapper>
      <ToggleButton active={isScheduled} onClick={() => setIsScheduled(true)}>
        Agendada
      </ToggleButton>
      <ToggleButton active={!isScheduled} onClick={() => setIsScheduled(false)}>
        Ocorrida
      </ToggleButton>
    </ToggleWrapper>
  );
};

export default StatusToggle;
