import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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
type Props = {
    value: '-' | '+',
    onChange: (value: '-' | '+') => void
}
const CateGorySection: React.FC <Props> = (props) => {
    const category = props.value;
    const categoryMap = {
        '-': '支出',
        '+': '收入'
    };
    type Keys = keyof (typeof categoryMap)
    const [categoryList] = useState<Keys[]>(['-', '+']);
    return (
        <Wrapper>
            <ol>
                {categoryList.map(x =>
                    <li key={x} className={category === x ? 'selected' : ''}
                        onClick={() => {
                            props.onChange(x);
                        }}
                    >{categoryMap[x]}
                    </li>)}
            </ol>
        </Wrapper>
    );
};
export {CateGorySection};