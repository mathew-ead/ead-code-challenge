import TableWrapper from "./EmployeeTable/TableWrapper";
import styled from "styled-components";

const Div = styled.div`
  font-size: 1rem;
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <Div>
      <TableWrapper />
    </Div>
  );
}

export default App;
