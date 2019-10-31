import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../theme";
import TableCell from "./TableCell";
import { columnsPropType, rowsPropType, rowPropType } from "./Table.types";

const StyledFooterRow = styled.tr({
  "&:first-of-type": {
    borderTop: `1px solid ${theme.colors.lightGrey}`
  }
});

const StyledTh = styled.th({
  fontWeight: "normal",
  textAlign: "left",
  padding: `${theme.space.x2} 0`,
  paddingRight: theme.space.x2,
  paddingLeft: theme.space.x2,
  color: theme.colors.darkGrey
});

const StyledTd = styled.td(() => ({
  paddingRight: theme.space.x2
}));

const tableCellRenderer = (cellData, { cellFormatter, align }) => (
  <TableCell align={align}>{cellFormatter ? cellFormatter(cellData) : cellData}</TableCell>
);

const renderCellContent = (row, { cellRenderer, dataKey, ...columnOptions }) => {
  const renderer = cellRenderer || tableCellRenderer;

  return renderer(row[dataKey], columnOptions, row);
};

const renderRows = (rows, columns, keyField, loading) =>
  rows.map(row => <TableFooterRow row={row} columns={columns} key={row[keyField]} loading={loading} />);

const TableFooterRow = ({ row, columns, loading }) => (
  <StyledFooterRow>
    {columns.map((column, index) =>
      index === 0 ? (
        <StyledTh key={column.dataKey} scope="row">
          {row[column.dataKey]}
        </StyledTh>
      ) : (
        !loading && (
          <StyledTd key={column.dataKey} width={column.width}>
            {renderCellContent(row, column)}
          </StyledTd>
        )
      )
    )}
  </StyledFooterRow>
);

TableFooterRow.propTypes = {
  row: rowPropType.isRequired,
  columns: columnsPropType.isRequired,
  loading: PropTypes.bool.isRequired
};

const TableFoot = ({ columns, rows, keyField, loading }) => (
  <tfoot>{renderRows(rows, columns, keyField, loading)}</tfoot>
);

TableFoot.propTypes = {
  columns: columnsPropType.isRequired,
  rows: rowsPropType.isRequired,
  keyField: PropTypes.string,
  loading: PropTypes.bool
};

TableFoot.defaultProps = {
  keyField: "id",
  loading: false
};

export default TableFoot;
