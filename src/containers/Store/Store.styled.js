import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #E10098;
  font-size: 12px;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const NavLink = styled.a`
  color: #FFF;
`;

const InputSearch = styled.input`
  border: none;
  padding: 12px 0 12px 12px;
  margin: 10px 5px 10px 0;
  width: 70%;
`;

const ButtonSearch = styled.button`
  background: transparent;
  border 1px solid #FFF;
  border-radius: 3px;
  cursor: pointer;
  color: #fff;
  height: 39px;
  padding: 0 32px;
  transition: all .3s;

  &:hover {
    background: #fff;
    color: #E10098;
  }
`;


export {
  NavWrapper,
  NavContainer,
  NavLink,
  InputSearch,
  ButtonSearch
}