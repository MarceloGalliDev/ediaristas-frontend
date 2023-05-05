import { styled } from '@mui/material/styles';
//import { } from '@mui/material/';
//import { BreadCrumbProps } from './BreadCrumb'

export const BreadCrumbContainer = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  list-style: none;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily};

  counter-reset: BreadCrumb-counter;

  ${({ theme }) => theme.breakpoints.up('md')} {
    gap: ${({ theme }) => theme.spacing(2)};
    margin: ${({ theme }) => theme.spacing(2, 0)};

    span:last-child {
      display: none;
    }
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 12px;
    text-align: center;
    margin: 0;

    span {
      display: none;
    }
  }
`;

export const BreadCrumbItem = styled('li', {
  shouldForwardProp: (props) => props !== "isSelected",
})<{isSelected?: boolean}>`

  ${({ theme }) => theme.breakpoints.down('md')} {
    flex: auto;
    padding: ${({ theme }) => theme.spacing(2,1)};
    background-color: ${({ theme, isSelected }) => theme.palette.grey[isSelected ? 200: 100]};
  };

  ${({ theme }) => theme.breakpoints.down('sm')} {
    ${({ theme }) => theme.spacing()}
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    counter-increment: BreadCrumb-counter;
    font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
    &::before {
      content: counter(BreadCrumb-counter);
      margin-right: ${({ theme }) => theme.spacing()};
    }
  }
`;