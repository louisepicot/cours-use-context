import styled from "styled-components"



const AppStyle = styled.div`
  background-color: ${props => props.themeColor === "white" ? 'white' : 'black'};
  
`


export default AppStyle