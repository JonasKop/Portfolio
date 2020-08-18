import { css } from 'styled-components';
import t from '../../theme';

const buttonStyle = css`
  border: 1px solid ${t.colorAccent};
  border-radius: 4px;
  padding: 12px 20px;
  color: ${t.colorAccent};
  cursor: pointer;
  transition: 0.2s;

  :hover {
    background: ${t.colorAccent};
    color: ${t.colorBackground};
    text-decoration: none;

    path {
      fill: ${t.colorBackground};
    }
  }
`;

export default buttonStyle;
