import React, { useState, useEffect } from "react";
import TableGrid from "./Table";
import { mergedObj } from "../local-json";
import { calculateDiff } from "./utils";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";
import styled from "styled-components";
import Stack from "@mui/material/Stack";

// styled component
const StyledStack = styled(Stack)`
  gap: 1;
  justify-content: center;
  align-items: center;
`;

// setter array of table column
const columns = [
  { title: "Name", field: "name", searchable: false, sorting: false },
  { title: "Absence Type", field: "type" },
  {
    title: "Period",
    field: "startDate",
    type: "date",
    dateSetting: { locale: "en-GB" },
    emptyValue: () => null,
    render: (rowData) => {
      return calculateDiff(rowData.startDate, rowData.endDate);
    },
  },
  {
    title: "Member Note",
    field: "memberNote",
  },
  { title: "Status", field: "status" },
  {
    title: "Admitter Note",
    field: "admitterNote",
  },
];

const TableWrapper = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  // to display loader we put the 1.2 seconds of delay to demonstrate loading.
  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(true);
    }, 1200);
  }, []);

  return isDisplayed ? (
    <TableGrid renderData={mergedObj} renderColumn={columns} />
  ) : (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={!isDisplayed}
        onClick={() => {}}
      >
        <StyledStack>
          <CircularProgress color="inherit" />
          <Typography>Loading...</Typography>
        </StyledStack>
      </Backdrop>
    </>
  );
}

export default TableWrapper;
