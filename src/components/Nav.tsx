import styled from 'styled-components';
import { NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './icon';

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;

  > ul {
    display: flex;

    > li {
      width: 33.33333%;
      text-align: center;

      > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4px 0;

        .icon {
          width: 24px;
          height: 24px;
        }

        &.active {
          color: #3C3C3C;

          .icon {
            fill: #e6ac00;
          }
        }
      }
    }
  }
`;
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" className={(navData) => navData.isActive ? 'active' : ''}>
                        <Icon name="tag" fill=""/>
                        标签页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" className={(navData) => navData.isActive ? 'active' : ''}>
                        <Icon name="money" fill=""/>
                        记账页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" className={(navData) => navData.isActive ? 'active' : ''}>
                        <Icon name="chart" fill=""/>
                        统计页
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    );
};
export default Nav;