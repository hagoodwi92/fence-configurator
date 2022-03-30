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
import blackRose from "./blackRose.jpg";
import oxfordGrey from "./oxfordGrey.jpeg";
import kingCedar from "./kingCedar.jpeg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import singleGate from "./singleGate.jpg";

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
  const onReset = (event) => {
    setBlack(0);
    setCedar(0);
    setGrey(0);
    setBrackets(0);
    setGateFrame(0);
    setBlackAlum(0);
    setsixFtPosts(0);
    seteightFtPosts(0);
    setfourFtPosts(0);
    setDropRod(0);
    setSurfaceMount(0);
    setAcrylic(0);
    setLattice(0);
  };
  const onSubmit = (event) => {
    console.log(event);
    setSubmit(true);
    window.scrollTo(0, 0);
    event.totalFeet = parseInt(event.totalFeet);
    let accent = 0;
    if (event.accent === "lattice") {
      accent = -3;
    } else if (event.accent === "acrylic") {
      accent = -3;
    } else {
      accent = 0;
    }

    event.height = parseInt(event.height);
    event.walkGate = parseInt(event.walkGate);
    event.doubleGate = parseInt(event.doubleGate);
    setDropRod(event.doubleGate);
    event.blackAlum = parseInt(
      Math.ceil((event.totalFeet / 6) * event.blackAlum)
    );

    if (event.color === "black rose") {
      setBlack(
        Math.max(
          0,
          Math.ceil(
            (event.totalFeet / 6) * event.height -
              event.walkGate * 13 -
              event.doubleGate * 26 +
              accent -
              event.blackAlum
          )
        )
      );
    } else if (event.color === "king cedar") {
      setCedar(
        Math.max(
          0,
          Math.ceil(
            (event.totalFeet / 6) * event.height -
              event.walkGate * 13 -
              event.doubleGate * 26 +
              accent -
              event.blackAlum
          )
        )
      );
    } else if (event.color === "oxford grey") {
      setGrey(
        Math.max(
          Math.ceil(
            (event.totalFeet / 6) * event.height -
              event.walkGate * 13 -
              event.doubleGate * 26 +
              accent -
              event.blackAlum
          )
        )
      );
    }

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
    if (event.accent === "lattice") {
      setLattice(1);
    } else if (event.accent === "acrylic") {
      setAcrylic(1);
    }
  };

  const [sixFtPosts, setsixFtPosts] = useState(0);
  const [eightFtPosts, seteightFtPosts] = useState(0);
  const [fourFeetPosts, setfourFtPosts] = useState(0);
  const [brackets, setBrackets] = useState(0);
  const [blackAlum, setBlackAlum] = useState(0);
  const [gateFrame, setGateFrame] = useState(0);
  const [dropRod, setDropRod] = useState(0);
  const [surfaceMount, setSurfaceMount] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [black, setBlack] = useState(0);
  const [cedar, setCedar] = useState(0);
  const [grey, setGrey] = useState(0);
  const [acrylic, setAcrylic] = useState(0);
  const [lattice, setLattice] = useState(0);

  function goBack() {
    setSubmit();
    window.scrollTo(0, 0);
    onReset();
    reset({
      totalFeet: 0,
      walkGate: 0,
      doubleGate: 0,
      singleGate: 0,
      color: null,
    });
  }

  if (submit === true) {
    return (
      <React.Fragment>
        <Container id="top">
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
                          <br></br>
                          <br></br>
                          {black.toLocaleString()}
                        </h6>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h6>
                          Composite Boards (King Cedar) <i></i>(EF 00200):{" "}
                          <br></br>
                          <br></br>
                          {cedar.toLocaleString()}
                        </h6>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h6>
                          Composite Boards (Oxford Grey) <i></i>(EF 00200):{" "}
                          <br></br>
                          <br></br>
                          {grey.toLocaleString()}
                        </h6>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h6>
                          Framing Bracket (EF 40408): <br></br>
                          <br></br>
                          {brackets.toLocaleString()}
                        </h6>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h6>
                          Gate Frames (EF 60408 + 2 EF 62508): <br></br>
                          <br></br>
                          {gateFrame.toLocaleString()}
                          <br></br>
                          <Zoom style={{float:'right'}}>
                            <img
                              width="50px"
                              src={singleGate}
                              alt="single gate"
                            ></img>
                          </Zoom>
                        </h6>
                      </TableCell>
                    </TableRow>
                    <TableCell> 
                      <h6>
                        Aluminum Accent Boards (EF 00308): <br></br>
                        <br></br>
                        {blackAlum.toLocaleString()}
                      </h6>
                    </TableCell>
                    <TableRow>
                      <TableCell>
                        <h6>
                          6' Posts (EF 20408): <br></br>
                          <br></br>
                          {sixFtPosts.toLocaleString()}
                        </h6>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h6>
                          8' Posts (EF 20508): <br></br>
                          <br></br>
                          {eightFtPosts.toLocaleString()}
                        </h6>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h6>
                          4' Surface Mount Posts (EF 20108): <br></br>
                          <br></br> {fourFeetPosts.toLocaleString()}{" "}
                        </h6>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h6>
                          Drop Rods (EF 61608): <br></br>
                          <br></br>
                          {dropRod.toLocaleString()}
                        </h6>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h6>
                          Surface Mounts (EF 30038): <br></br>
                          <br></br> {surfaceMount.toLocaleString()}
                        </h6>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h6>
                          Lattice Accent (EF 50308):<br></br>
                          <br></br>
                          {lattice.toLocaleString()}{" "}
                        </h6>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h6>
                          Acrylic Accent (EF 51309): <br></br>
                          <br></br>
                          {acrylic.toLocaleString()}
                        </h6>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div id="goBack">
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
                        </div>
                      </TableCell>
                    </TableRow>
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
            <form className="FenceForm" onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <Stack spacing={2}>
                <Item>
                  <Row>
                    <Col>
                      <Zoom>
                        <img
                          id="blackRose"
                          alt="black rose"
                          src={blackRose}
                        ></img>
                      </Zoom>
                      <Zoom>
                        <img
                          id="kingCedar"
                          alt="king cedar"
                          src={kingCedar}
                        ></img>
                      </Zoom>
                      <Zoom>
                        <img
                          id="oxfordGrey"
                          alt="oxford grey"
                          src={oxfordGrey}
                        ></img>
                      </Zoom>
                    </Col>
                  </Row>
                </Item>
                <Item>
                  <Row>
                    <Col>
                      <InputLabel>Color:</InputLabel>
                      <Select
                        id="color"
                        required={true}
                        {...register("color", { required: true })}
                      >
                        <MenuItem value="black rose">Black Rose</MenuItem>
                        <MenuItem value="king cedar">King Cedar</MenuItem>
                        <MenuItem value="oxford grey">Oxford Grey</MenuItem>
                      </Select>
                    </Col>
                  </Row>
                </Item>
                <Item>
                  <Row>
                    <Col>
                      <InputLabel>Single Gate:</InputLabel>
                      <Input
                        id="walkGate"
                        inputProps={{ style: { textAlign: "center" } }}
                        defaultValue="0"
                        {...register("walkGate", { required: true, min: 0 })}
                      />
                    </Col>
                    <Col>
                      <InputLabel>Double Gate:</InputLabel>
                      <Input
                        inputProps={{ style: { textAlign: "center" } }}
                        defaultValue="0"
                        {...register("doubleGate", { required: true, min: 0 })}
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
                        <MenuItem value="lattice">Lattice</MenuItem>
                        <MenuItem value="acrylic">Acrylic</MenuItem>
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
                      <Col>
                        <InputLabel>Linear Feet: </InputLabel>
                        <Input
                          alt="linearFeet"
                          inputProps={{ style: { textAlign: "center" } }}
                          defaultValue="0"
                          {...register("totalFeet", { required: true, min: 0 })}
                        ></Input>
                      </Col>
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
                <span>This field is required!/Number is out of range</span>
              )}
              {errors.totalFeet && (
                <span>This field is required!/Number is out of range.</span>
              )}
              {errors.walkGate && (
                <span>This field is required!/Number is out of range.</span>
              )}
              {errors.doubleGate && (
                <span>This field is required!/Number is out of range.</span>
              )}
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
