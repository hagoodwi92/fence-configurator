import React, { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Input,
  Select,
  InputLabel,
  MenuItem,
  Stack,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import logo1 from "./logo1.jpg";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (event) => {
    event.totalFeet = parseInt(event.totalFeet);
    event.accent = parseInt(event.accent);
    event.postInstall = parseInt(event.postInstall);
    event.height = parseInt(event.height);
    event.walkGate = parseInt(event.walkGate);
    event.doubleGate = parseInt(event.doubleGate);
    console.log(event.totalFeet, event.accent, event.postInstall, event.height);
    setFeet(
      Math.ceil(
        (event.totalFeet / 6) * event.height +
          event.walkGate * 13 +
          event.doubleGate * 26 +
          event.accent
      )
    );
    setPosts(Math.ceil(event.totalFeet / 6 + 1));
    setBrackets(Math.ceil(event.totalFeet / 6));
    setBlackAlum(event.blackAlum);
    setGateFrame(
      Math.ceil(parseInt(event.walkGate) + parseInt(event.doubleGate * 2))
    );
  };

  const [posts, setPosts] = useState(0);
  const [totalFeet, setFeet] = useState(0);
  const [brackets, setBrackets] = useState(0);
  const [blackAlum, setBlackAlum] = useState(0);
  const [gateFrame, setGateFrame] = useState(0);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <React.Fragment>
      <Container>
        {/* <img class='logo' src={logo1}></img> */}
        <h1>Infinity Euro Fencing Calculator</h1>
        <br></br>
        <Row>
          <Col>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <Stack width="200px" spacing={2}>
                <Item>
                  <InputLabel>Total Feet: </InputLabel>
                  <Input
                    defaultValue="0"
                    {...register("totalFeet", { required: true })}
                  />
                </Item>
                <Item>
                  <InputLabel>Height</InputLabel>
                  <Select defaultValue="0" {...register("height")}>
                    <MenuItem value="8">4'</MenuItem>
                    <MenuItem value="13">6'</MenuItem>
                  </Select>
                </Item>
                <Item>
                  {" "}
                  <InputLabel>Accent</InputLabel>
                  <Select defaultValue="0" {...register("accent")}>
                    <MenuItem value="-3">Lattice</MenuItem>
                    <MenuItem value="3">Acrilic</MenuItem>
                    <MenuItem value="0">None</MenuItem>
                  </Select>
                </Item>
                <Item>
                  <InputLabel>Black Aluminum Boards:</InputLabel>
                  <Input
                    defaultValue="1"
                    {...register("blackAlum", { required: true })}
                  />
                </Item>
                <Item>
                  <InputLabel>Single Gate:</InputLabel>
                  <Input
                    defaultValue="0"
                    {...register("walkGate", { required: true })}
                  />
                </Item>
                <Item>
                  <InputLabel>Double Gate:</InputLabel>
                  <Input
                    defaultValue="0"
                    {...register("doubleGate", { required: true })}
                  />
                </Item>
                <Item>
                  <Input type="submit" />
                </Item>
              </Stack>

              {/* <select defaultValue="0" {...register("postInstall")}>
            <option value="mount">Mount</option>
            <option value="ground">Ground</option>
          </select> */}

              {/* include validation with required or other standard HTML validation rules */}
              {/* <input {...register("exampleRequired", { required: true })} /> */}
              {/* errors will return when field validation fails  */}
              {errors.blackAlum && <span>This field is required!</span>}
              {errors.totalFeet && <span>This field is required!</span>}
              {errors.walkGate && <span>This field is required!</span>}
              {errors.doubleGate && <span>This field is required!</span>}
              <br></br>
            </form>
          </Col>

          <br></br>
          <br></br>
          <Col>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 300 }} aria-label="simple table">
                <TableHead>
                  <u>Parts Needed:</u>
                </TableHead>
                <TableRow>
                  <TableCell>Composite Boards: {totalFeet}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Posts: {posts}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brackets: {brackets}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gate Frames: {gateFrame}</TableCell>
                </TableRow>
                <TableCell>Black Alum Boards: {blackAlum}</TableCell>
              </Table>
            </TableContainer>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
