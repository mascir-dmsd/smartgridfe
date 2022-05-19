import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
// import Table from "../Table/Table";
import Table from "@mui/material/Table";
import { styled } from '@mui/material/styles';
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../Table/Table.css";
import "./MainDash.css";
import RightSide from '../RigtSide/RightSide';
import Sidebar from '../Sidebar';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#bce6ff",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#bce6ff65",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const makeStyle = (status) => {
  if (status === 'null' || status === null) {
    return {
      background: '#ffadad8f',
      color: 'red',
    }

  }
  // else if (status === 'Pending') {
  //   return {
  //     background: '#59bfff',
  //     color: 'white',
  //   }
  // }
  else {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }

  }
}

const MainDash = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    fetch("http://iot.mascir.ma:4002/equipements")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setIsLoaded(true);
          setItems(result);
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
              <div className="MainDash">
                <h3>{selected.node}</h3>
                <Cards node={selected} />
                <div className="Table">
                  {/* <h3>Noeuds</h3> */}
                  <TableContainer
                    component={Paper}
                    style={{
                      boxShadow: "0px 13px 20px 0px #80808029", height: "500px",
                      // overflow: "scroll",
                    }}
                  >
                    <Table stickyHeader aria-label="customized table" sx={{ minWidth: 650 }} >
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>Nom</StyledTableCell>
                          <StyledTableCell align="left">ID</StyledTableCell>
                          <StyledTableCell align="left">Dernière modification</StyledTableCell>
                          <StyledTableCell align="left">Status</StyledTableCell>
                          {/* <TableCell align="left"></TableCell> */}
                        </TableRow>
                      </TableHead>
                      <TableBody style={{ color: "white" }}>
                        {items.map((row) => (
                          <StyledTableRow
                            hover

                            onClick={() => setSelected(row)}
                            key={row.name}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="left">{row.node}</TableCell>
                            <TableCell align="left">{new Date(row.updateAt).toLocaleDateString()} {new Date(row.updateAt).toLocaleTimeString()}</TableCell>
                            <TableCell align="left">
                              <span className="status" style={makeStyle(row.energie)}>{row.energie}</span>
                            </TableCell>
                            {/* <TableCell align="left" className="Details"> <Button variant="link" onClick={handleShow}>Details
                        </Button></TableCell> */}
                          </StyledTableRow>

                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>

                </div>
                {/* <Table nodes={items} /> */}
              </div>
    );
  }
};

export default MainDash;
