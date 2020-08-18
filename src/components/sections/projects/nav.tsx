import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Arrow from '../../../resources/illustrations/arrow';
import t from '../../../theme';
import buttonStyle from '../../button';

const ArrowButton = styled.button`
  padding: ${t.paddingSmall};
  ${buttonStyle};
  ${({ visible }) => (visible ? '' : 'transition: 0s;')};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

const ArrowContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${t.gapRegular};
  justify-content: center;
  padding-top: ${t.paddingPhone};
`;

interface NavProps {
  active: number;
  setActive: (ind: number | ((ind: number) => number)) => void;
  size: number;
}

export default function Nav({ active, setActive, size }: NavProps): ReactElement {
  return (
    <ArrowContainer>
      <ArrowButton
        visible={active !== 0}
        onClick={() => setActive((a: number) => (a === 0 ? a : a - 1))}
      >
        <Arrow rotate />
      </ArrowButton>

      <ArrowButton
        visible={active !== size - 1}
        onClick={() => setActive((a: number) => (a + 1 === size ? a : a + 1))}
      >
        <Arrow rotate={false} />
      </ArrowButton>
    </ArrowContainer>
  );
}
