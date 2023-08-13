import styled from 'styled-components';

export const Wrapper = styled.div`
details{
  color: white;
  position:relative;
  padding-block: .5rem;
}
summary{
  padding-top: .5rem;
  color: white;
  height: 3rem;
  transition: all 300ms;
}
summary:hover{
  background:#43454433;
}

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position:absolute;
  background:#1a1a1a;
  width: 100%;
  z-index: 1;

}
div a {
  display: flex;
  align-items: center;
  margin:0;
  padding-block: 1rem;
  transition: all 300ms;
}
div a:hover{
  background:#2b2b2b;
}
`;
