import styled from 'styled-components';

const Main = styled.main`
  height: 100vh;
  padding: 80px 0;
`;

const Header = styled.header`
  text-align: center;
`;

const HeaderTitle = styled.h1`
  color: #3B3B3E;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const FormWrapper = styled.div`
  width: 450px;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled.input`
  border: 2px solid #d8d8d8;
  border-radius: 4px;
  color: #2f2f2f;
  font-size: 14px;
  padding: 15px 12px;
  width: 100%;
  transition: all .3s;

  &:focus {
    border-color: #E799C2;
  }
`;

const InputFile = styled.input`
  background: #fff;
  border: 2px solid #d8d8d8;
  padding: 15px 12px;
  width: 100%;
`;

const Label = styled.label`
  color: #565656;
  display: inline-block;
  margin-bottom: 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ButtonSubmit = styled.input`
  border: none;
  background: #C81685;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 12px 50px;
  width: 100%;
  margin-bottom: 1.2rem;

  &:hover {
    background: #E10098;
  }
`;

const ButtonCancel = styled.a`
  background: #d8d8d8;
  color: #565656;
  padding: 12px 50px;
  width: 100%;
  text-align: center;
`;


export {
  Main,
  Header,
  HeaderTitle,
  Section,
  FormWrapper,
  FormGroup,
  Input,
  InputFile,
  Label,
  ButtonGroup,
  ButtonSubmit,
  ButtonCancel
}