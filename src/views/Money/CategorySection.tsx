import styled from 'styled-components';

const CateGorySection = styled.section`
  font-size: 24px;

  > ol {
    display: flex;
    background: #c4c4c4;

    > li {
      width: 50%;
      text-align: center;
      padding: 18px 0;
      position: relative;

      &.selected::after {
        content: '';
        height: 3px;
        display: block;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;
export {CateGorySection}