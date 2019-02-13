import styled from 'styled-components';

const AdminProductsNav = styled.nav`
  background: #E10098;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 50px;
`;

const AdminProductsNavContainer = styled.div`
  margin-right: 50px;
  color: #fff;
`;

const AdminProductsLink = styled.a`
  color: #fff;
`;

const AdminProductsHeader = styled.header`
  padding: 30px 50px;
`;

const AdminProductsHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AdminProductsButton = styled.a`
  background: #E10098;
  border-radius: 4px;
  padding: 13px 30px;
  color: #fff;
  transition: all .3s;

  &:hover {
    background: #C81685;
  }
`;

export {
  AdminProductsNav,
  AdminProductsNavContainer,
  AdminProductsLink,
  AdminProductsHeader,
  AdminProductsHeaderContainer,
  AdminProductsButton
}