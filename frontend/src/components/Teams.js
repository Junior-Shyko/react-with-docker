import React, { useEffect, useState } from "react";
import { api, getUserData } from "../services/Api";
import DeleteTurma from "./Teams/Delete";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { CreateTeams } from "./Teams/CreateTeams";
import ResponsiveAppBar from "./layout/ResponsiveAppBar";

export const Teams = () => {
  const [team, setTeam] = useState([]);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getTurmas();
    //getUser();
    getUserData()
      .then((resp) => {
        setUser(resp.data)
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  const getTurmas = async () => {
    api
      .get("/todas-turmas")
      .then((response) => {
        setTeam(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  return (
    <>
      <ResponsiveAppBar user={user} />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <h1 className="text-muted" style={{ textAlign: "center" }}>
              Todas as turmas
            </h1>
          </Grid>
          <Grid item xs={2}>
            <Box
              m={1}
              display="flex"
              justifyContent="flex-end"
              alignItem="flex-end"
            >
              <Button
                variant="contained"
                title="Adicionar Turma"
                color="primary"
                style={{ height: 40 }}
                onClick={handleShow}
              >
                <AddBoxIcon /> Turma
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <table className="table table-bordered table-striped ">
          <thead
            style={{ background: "#1976D2", color: "white" }}
            className="text-center"
          >
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col">Nome</th>
              <th scope="col">Ano Vigênte</th>
              <th scope="col">Nível</th>
              <th scope="col">Série</th>
              <th scope="col">Turno</th>
              <th scope="col">Ação</th>
            </tr>
          </thead>
          <tbody>
            {team.map((teams) => (
              <tr key={teams.id}>
                <td>{teams.id}</td>
                <td>{teams.name}</td>
                <td>{teams.year}</td>
                <td>{teams.level}</td>
                <td>{teams.series}</td>
                <td>{teams.period}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-light  btn-sm"
                    style={{ margin: "10px" }}
                  >
                    <Link to={"/criar-usuario/" + teams.id + "/turma/"}>
                      Add Usuario
                    </Link>
                  </button>
                  <button className="btn btn-light btn-sm">
                    <Link to={"/editar-turma/" + teams.id}>Editar</Link>
                  </button>

                  {/* <ShowModal show={modalShow} id={teams.id} onHide={() => setModalShow(false)} /> */}
                  <DeleteTurma id={teams.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
      <Modal show={show} onHide={handleClose} animation={false} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Criar Turma</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateTeams />
        </Modal.Body>
      </Modal>
    </>
  );
};
