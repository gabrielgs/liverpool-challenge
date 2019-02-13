import styled from 'styled-components';

const ProductWrapper = styled.section`
  padding: 70px 50px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
`;

export {
  ProductWrapper,
  ProductGrid
};