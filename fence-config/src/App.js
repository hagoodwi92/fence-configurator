import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import {
  Button,
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
  Card,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Container, Row, Col } from "react-bootstrap";
import FadeIn from "react-fade-in";
// import blackRose from "./blackRose.jpg";
// import framingBracket from "./framingBracket.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function App() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const onReset = (event) => {
  //   setFeet(0);
  //   setBrackets(0);
  //   setGateFrame(0);
  //   setBlackAlum(0);
  //   setsixFtPosts(0);
  //   seteightFtPosts(0);
  //   setfourFtPosts(0);
  //   setDropRod(0);
  //   setSurfaceMount(0);
  // };
  const onSubmit = (event) => {
    console.log(event);
    setSubmit(true);
    event.totalFeet = parseInt(event.totalFeet);
    event.accent = parseInt(event.accent);
    event.height = parseInt(event.height);
    event.walkGate = parseInt(event.walkGate);
    event.doubleGate = parseInt(event.doubleGate);
    setDropRod(event.doubleGate);
    event.blackAlum = parseInt(
      Math.ceil((event.totalFeet / 6) * event.blackAlum)
    );
    console.log(event.totalFeet, event.accent, event.postInstall, event.height);
    setFeet(
      Math.ceil(
        (event.totalFeet / 6) * event.height +
          event.walkGate * 13 +
          event.doubleGate * 26 +
          event.accent -
          event.blackAlum
      )
    );
    //conditional for sku's here
    if (event.postInstall === "ground" && event.height === 9) {
      setsixFtPosts(Math.ceil(event.totalFeet / 6 + 1));
    } else if (event.postInstall === "ground" && event.height === 14) {
      seteightFtPosts(Math.ceil(event.totalFeet / 6 + 1));
    } else if (event.postInstall === "mount" && event.height === 9) {
      setfourFtPosts(Math.ceil(event.totalFeet / 6 + 1));
      setSurfaceMount(Math.ceil(event.totalFeet / 6 + 1));
    } else if (event.postInstall === "mount" && event.height === 14) {
      setsixFtPosts(Math.ceil(event.totalFeet / 6 + 1));
      setSurfaceMount(Math.ceil(event.totalFeet / 6 + 1));
    }
    setBrackets(Math.ceil(event.totalFeet / 6));
    setBlackAlum(event.blackAlum);
    setGateFrame(
      Math.ceil(parseInt(event.walkGate) + parseInt(event.doubleGate * 2))
    );
  };

  const [sixFtPosts, setsixFtPosts] = useState(0);
  const [eightFtPosts, seteightFtPosts] = useState(0);
  const [fourFeetPosts, setfourFtPosts] = useState(0);
  const [totalFeet, setFeet] = useState(0);
  const [brackets, setBrackets] = useState(0);
  const [blackAlum, setBlackAlum] = useState(0);
  const [gateFrame, setGateFrame] = useState(0);
  const [dropRod, setDropRod] = useState(0);
  const [surfaceMount, setSurfaceMount] = useState(0);
  const [submit, setSubmit] = useState(false);

  function goBack() {
    setSubmit();
    reset({
      totalFeet: 0,
      walkGate: 0,
      doubleGate: 0,
    });
  }

  if (submit === true) {
    return (
      <React.Fragment>
        <Container id='top'>
          <Row>
            <Col>
              <FadeIn>
                <TableContainer component={Paper}>
                  <Table
                    bgcolor="lightgrey"
                    sx={{ minWidth: 300 }}
                    aria-label="simple table"
                  >
                    <TableHead>
                      <h3>Parts Needed:</h3>
                    </TableHead>
                    <TableRow>
                      <TableCell>
                        <h6>
                          Composite Boards (Black Rose) <i></i>(EF 00200):{" "}
                        </h6>
                        {totalFeet.toLocaleString()}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h6>Framing Bracket (EF 40408): </h6>
                        {brackets.toLocaleString()}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h6>Gate Frames (EF 60408 + 2 EF 62508): </h6>
                        {gateFrame.toLocaleString()}
                      </TableCell>
                    </TableRow>
                    <TableCell>
                      <h6>Aluminum Accent Boards (EF 00308): </h6>
                      {blackAlum.toLocaleString()}
                    </TableCell>
                    <TableRow>
                      <TableCell>
                        <h6>6' Posts (EF 20408): </h6>
                        {sixFtPosts.toLocaleString()}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h6>8' Posts (EF 20508): </h6>
                        {eightFtPosts.toLocaleString()}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h6>4' Surface Mount Posts (EF 20108): </h6>
                        {fourFeetPosts.toLocaleString()}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h6>Drop Rods (EF 61608): </h6>
                        {dropRod.toLocaleString()}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h6>Surface Mounts (EF 30038): </h6>
                        {surfaceMount.toLocaleString()}
                      </TableCell>
                    </TableRow>
                    <TableCell>
                      <Button
                        sx={{
                          "&.MuiButton-text": { color: "#808080" },
                          border: "2px black solid",
                        }}
                        type="reset"
                        onClick={goBack}
                      >
                        Go Back
                      </Button>
                    </TableCell>
                  </Table>
                </TableContainer>
              </FadeIn>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  } else {
    return (
      <Container id="cardHeader">
        <Row>
          <Col></Col>
          <Col md={6}>
            <Card variant="outlined">
              <h1>Infinity Euro Fencing Calculator</h1>
            </Card>
            <br></br>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <Stack spacing={2}>
                <Item>
                  <Row>
                    <Col></Col>
                    <Col>
                      {/* <InputLabel>
                        Black Aluminum Boards(Per Section):
                      </InputLabel>
                      <Input
                        inputProps={{ style: { textAlign: "center" } }}
                        defaultValue="0"
                        {...register("blackAlum", { required: true })}
                      /> */}
                      <InputLabel>Linear Feet: </InputLabel>
                      <Input
                        inputProps={{ style: { textAlign: "center" } }}
                        defaultValue="0"
                        {...register("totalFeet", { required: true })}
                      />
                    </Col>
                    <Col></Col>
                  </Row>
                </Item>

                <Item>
                  <Row>
                    <Col>
                      <InputLabel>Single Gate:</InputLabel>
                      <Input
                        inputProps={{ style: { textAlign: "center" } }}
                        defaultValue="0"
                        {...register("walkGate", { required: true })}
                      />
                    </Col>
                    <Col>
                      <InputLabel>Double Gate:</InputLabel>
                      <Input
                        inputProps={{ style: { textAlign: "center" } }}
                        defaultValue="0"
                        {...register("doubleGate", { required: true })}
                      />
                    </Col>
                  </Row>
                </Item>
                <Item>
                  <Row>
                    <Col>
                      <InputLabel>Height</InputLabel>
                      <Select
                        required={true}
                        {...register("height", { required: true })}
                      >
                        <MenuItem value="9">4'</MenuItem>
                        <MenuItem value="14">6'</MenuItem>
                      </Select>
                    </Col>
                    <Col>
                      <InputLabel>Accent</InputLabel>
                      <Select defaultValue="0" {...register("accent")}>
                        <MenuItem value="-3">Lattice</MenuItem>
                        <MenuItem value="3">Acrylic</MenuItem>
                        <MenuItem value="0">None</MenuItem>
                      </Select>
                    </Col>
                  </Row>
                </Item>
                <Item>
                  <Row>
                    <Col>
                      <InputLabel>Post Install</InputLabel>
                      <Select
                        required={true}
                        {...register("postInstall", { required: true })}
                      >
                        <MenuItem value="mount">Mount</MenuItem>
                        <MenuItem value="ground">In-Ground</MenuItem>
                      </Select>
                    </Col>
                    <Col>
                      <InputLabel>Black Accent Boards(per section)</InputLabel>
                      <Select
                        required={true}
                        {...register("blackAlum", { required: true })}
                      >
                        <MenuItem value="0">0</MenuItem>
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                        <MenuItem value="6">6</MenuItem>
                        <MenuItem value="7">7</MenuItem>
                        <MenuItem value="8">8</MenuItem>
                        <MenuItem value="9">9</MenuItem>
                        <MenuItem value="10">10</MenuItem>
                        <MenuItem value="11">11</MenuItem>
                        <MenuItem value="12">12</MenuItem>
                        <MenuItem value="13">13</MenuItem>
                        <MenuItem value="14">14</MenuItem>
                      </Select>
                    </Col>
                  </Row>
                </Item>
                <Item>
                  <Row>
                    <Col>
                      <Button
                        sx={{
                          "&.MuiButton-text": { color: "#808080" },
                          border: "2px black solid",
                        }}
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        sx={{
                          "&.MuiButton-text": { color: "#808080" },
                          border: "2px black solid",
                        }}
                        type="reset"
                        onClick={() =>
                          reset({
                            totalFeet: 0,
                            blackAlum: 0,
                            walkGate: 0,
                            doubleGate: 0,
                          })
                        }
                      >
                        Reset
                      </Button>{" "}
                    </Col>
                  </Row>
                </Item>
              </Stack>
              {errors.blackAlum && (
                <span>This field is required!/Number is too large</span>
              )}
              {errors.totalFeet && <span>This field is required!</span>}
              {errors.walkGate && <span>This field is required!</span>}
              {errors.doubleGate && <span>This field is required!</span>}
              <br></br>
            </form>
            <br></br>
            <br></br>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}
