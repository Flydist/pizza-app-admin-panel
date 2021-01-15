import styled from 'styled-components'

export const ListContainer = styled.div`
  margin: 20px 0;
`

export const UpdateButton = styled.button`
  margin-bottom: 10px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: none;
  float: right;

  :hover {
    background-color: rgba(95, 99, 104, 0.157);
  }
  :focus {
    outline: none;
  }
  :active {
    background-color: rgba(95, 99, 104, 0.3);
  }
`
