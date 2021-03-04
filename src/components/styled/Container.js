import styled from 'styled-components'

export const Container = styled.div`
background-color: ${props => props.theme.backgroundColor};
color: ${props => props.theme.fontColor};
border: 1px solid #d2d2d2;
box-shadow: ${props => props.theme.boxShadow};
border-radius: 8px;
margin-top: 16px;
padding: 16px;
`