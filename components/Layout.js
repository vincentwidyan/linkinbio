import styled from 'styled-components'
import ReactDOM from 'react-dom';



export default function Layout({ children }) {
    return (
        <Main >
            {children}
        </Main>
    )
}

const Main = styled.main`
  min-height: 100vh;
  background: url('/bg.png') no-repeat;
  background-size: 100%;
  background-position: -50vh 10%;
  background-attachment: scroll;
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    background-size: 250%;
    background-position: -40vh -50vh;
    background-attachment: scroll;
   }
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.mobileL}) {
    background-size: 350%;
    background-position: -50vh -40vh;
    background-attachment: scroll;
   }
    
`;
