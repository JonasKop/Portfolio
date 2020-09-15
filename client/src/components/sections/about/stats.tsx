import React, { ReactElement } from 'react';
import styled from 'styled-components';
import t from '../../../theme';

const content = [
  {
    title: 'UI/UX',
    percentage: 60,
  },
  {
    title: 'Frontend',
    percentage: 90,
  },
  {
    title: 'Backend',
    percentage: 95,
  },
];

const Container = styled.div`
  padding ${t.paddingMedium};
  display: grid;
  grid-gap: ${t.gapMedium};
`;

const SubContainer = styled.div`
  text-align: left;
`;

const Outer = styled.div`
  left: 0;
  right: 0;
  height: 30px;
  border-radius: 4px;
  border: 1px solid ${t.colorAccent};
`;

interface InnerProps {
  percentage: number;
}

const Inner = styled.div<InnerProps>`
  background: ${t.colorAccent};
  height: 100%;
  width: ${({ percentage }) => percentage}%;
`;

interface StatProps extends InnerProps {
  title: string;
}

function Stat({ title, percentage }: StatProps): ReactElement {
  return (
    <SubContainer key={title}>
      <h6>{`${title} ${percentage}%`}</h6>
      <Outer>
        <Inner percentage={percentage} />
      </Outer>
    </SubContainer>
  );
}

export default function Stats(): ReactElement {
  return <Container>{content.map(Stat)}</Container>;
}
