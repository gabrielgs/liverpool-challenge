import styled from 'styled-components';

const ProductCardWrapper = styled.article`
  background: #FFF;
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(200, 200, 200, 0.5);
  cursor: pointer;
  padding: 7px;
  transition: all .3s;

  &:hover {
    box-shadow: 0 13px 16px 0 rgba(200, 200, 200, 0.5);
  }
`;

const ProductCardFigure = styled.figure`
  margin: 0;
`;

const ProductCardImage = styled.img`
  vertical-align: middle;
  width: 100%;
`;

const ProductCardImageCaption = styled.figcaption`
  padding: 20px 0;

  h4 {
    margin: 12px 0;
  }

  span {
    color: #FF0000;
    float: right;
  }
`;

const ProductCardActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;



export {
  ProductCardImage,
  ProductCardFigure,
  ProductCardWrapper,
  ProductCardImageCaption,
  ProductCardActions
}