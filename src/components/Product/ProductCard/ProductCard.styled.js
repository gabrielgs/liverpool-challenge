import styled from 'styled-components';

const ProductCardWrapper = styled.article`
  background: #FFF;
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(200, 200, 200, 0.5);
  padding: 7px;
`;

const ProductCardFigure = styled.figure`
  margin: 0;
`;

const ProductCardImage = styled.img`
  vertical-align: middle;
  width: 100%;
`;

export {
  ProductCardImage,
  ProductCardFigure,
  ProductCardWrapper
}