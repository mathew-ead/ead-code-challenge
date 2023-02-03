import React, { useState } from "react";
import MaterialTable from "material-table";
import styled from "styled-components";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

// styled component
const StyledTableCell = styled(TableCell)`
align:center;
width="16.66%";
color: white !important;
`;

const StyledHeader = styled(TableHead)`
  background-color: black;
`;

const TableGrid = (props) => {
  const { renderData, renderColumn } = props;
  const [tableData] = useState(renderData);

  return (
    <MaterialTable
      columns={renderColumn}
      data={tableData}
      components={{
        Header: (props) => {
          return (
            <StyledHeader>
              <TableRow>
                {props.columns.map((columnName) => (
                  <StyledTableCell>{columnName.title}</StyledTableCell>
                ))}
              </TableRow>
            </StyledHeader>
          );
        },
        Row: ({ data }) => {
          return (
            <TableRow>
              <TableCell width="16.66%">{data.name}</TableCell>
              <TableCell width="16.66%">{data.type}</TableCell>
              <TableCell width="16.66%">{data.startDate}</TableCell>
              <TableCell width="16.66%">{data.memberNote}</TableCell>
              <TableCell width="16.66%">{data.status}</TableCell>
              <TableCell width="16.66%">{data.admitterNote}</TableCell>
            </TableRow>
          );
        },
      }}
      options={{
        pageSize: 10,
      }}
      data-cy="employee-table-heading"
      title="Here is the list of employees"
    />
  );
}

export default TableGrid;
