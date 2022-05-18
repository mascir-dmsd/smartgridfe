import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
// function createData(name, trackingId, date, status) {
//   return { name, trackingId, date, status };
// }


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

export default function BasicTable({ nodes }) {

  var initSelected = nodes[0]
  console.log(initSelected)
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(initSelected);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Table">
      <h3>Noeuds</h3>
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Détails du noeud </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Paramètre</th>
                <th>Valeur</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Identifiant</td>
                <td>{selected.node}</td>
              </tr>
              <tr>
                <td>Tension</td>
                <td>{selected.tension}</td>
              </tr>
              <tr>
                <td>Courant</td>
                <td>{selected.courant}</td>
              </tr>
              <tr>
                <td>Energie</td>
                <td>{selected.energie}</td>
              </tr>
            </tbody>
          </Table>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
      <TableContainer
        component={Paper}
        style={{
          boxShadow: "0px 13px 20px 0px #80808029", height: "500px",
          overflow: "scroll",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              {/* <TableCell align="left"></TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {nodes.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.node}</TableCell>
                <TableCell align="left">{row.updateAt}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.energie)}>{row.energie}</span>
                </TableCell>
                {/* <TableCell align="left" className="Details"> <Button variant="link" onClick={handleShow}>Details
                </Button></TableCell> */}
              </TableRow>

            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );

}
