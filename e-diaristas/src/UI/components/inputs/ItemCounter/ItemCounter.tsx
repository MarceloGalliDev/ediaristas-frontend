import React, {PropsWithChildren} from 'react';
// import {} from '@mui/material';
import { ItemCounterContainer, CircleButton } from './ItemCounter.styled';

export interface ItemCounterProps {
  label: string;
  plural: string;
  counter: 0;
  onInc: () => void;
  onDec: () => void;
}

const ItemCounter:React.FC<PropsWithChildren<ItemCounterProps>> = ({
  label, plural, counter, onInc, onDec,
}) => {
  return (
    <ItemCounterContainer>
      <CircleButton onClick={onDec}>
        <i className="twf-minus" />
      </CircleButton>
      <span>
        { counter } { counter > 1 ? plural : label}
      </span>
      <CircleButton onClick={onDec}>
        <i className="twf-plus" />
      </CircleButton>
    </ItemCounterContainer>
  );  
}

export default ItemCounter