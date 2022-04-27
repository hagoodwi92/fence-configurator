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
  CardHeader,
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
// import oxford_grey from "./oxford_grey.jpg";
// import black_rose from "./black_rose.jpg";
// import king_cedar from "./king_cedar.jpg";

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
    setBlack();
    setCedar();
    setGrey();
    setBrackets();
    setGateFrame();
    setBlackAlum();
    setsixFtPosts();
    seteightFtPosts();
    setfourFtPosts();
    setDropRod();
    setSurfaceMount();
    setAcrylic();
    setLattice();
    // setSixFtHDPosts(0);
    // setEightFtHDPosts(0);
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

    if (event.dropRod > 0) {
      setDropRod(
        <TableRow>
          <TableCell>
            <h6>
              Drop Rods (EF 61608): {event.doubleGate}
              <br></br>
              <br></br>
            </h6>
          </TableCell>
        </TableRow>
      );
    }
    event.blackAlum = parseInt(
      Math.ceil((event.totalFeet / 6) * event.blackAlum)
    );

    if (event.color === "black rose") {
      setBlack(
        <TableRow>
          <TableCell>
            <h6>
              Composite Boards (Black Rose) <i></i>(EF 00200):{"  "}
              {Math.max(
                0,
                Math.ceil(
                  (event.totalFeet / 6) * event.height -
                    event.walkGate * 13 -
                    event.doubleGate * 26 +
                    accent -
                    event.blackAlum
                )
              )}
              {/* <Zoom style={{ float: "right" }}>
                <img width="50px" src={black_rose} alt="black rose"></img>
              </Zoom> */}
            </h6>
          </TableCell>
        </TableRow>
      );
    } else if (event.color === "king cedar") {
      setCedar(
        <TableRow>
          <TableCell>
            <h6>
              Composite Boards (King Cedar) <i></i>(EF 00200):{" "}
              {Math.max(
                0,
                Math.ceil(
                  (event.totalFeet / 6) * event.height -
                    event.walkGate * 13 -
                    event.doubleGate * 26 +
                    accent -
                    event.blackAlum
                )
              )}
              {/* <Zoom style={{ float: "right" }}>
                <img width="50px" src={king_cedar} alt="king cedar"></img>
              </Zoom> */}
            </h6>
          </TableCell>
        </TableRow>
      );
    } else if (event.color === "oxford grey") {
      setGrey(
        <TableRow>
          <TableCell>
            <h6>
              Composite Boards (Oxford Grey) <i></i>(EF 00200):
              {Math.max(
                Math.ceil(
                  (event.totalFeet / 6) * event.height -
                    event.walkGate * 13 -
                    event.doubleGate * 26 +
                    accent -
                    event.blackAlum
                )
              )}
              {/* <Zoom style={{ float: "right" }}>
                <img width="50px" src={oxford_grey} alt="oxford grey"></img>
              </Zoom> */}
            </h6>
          </TableCell>
        </TableRow>
      );
    }

    //conditional for sku's here
    if (event.postInstall === "ground" && event.height === 9) {
      setsixFtPosts(
        <TableRow>
          <TableCell>
            <h6>6' Posts (EF 20408): {Math.ceil(event.totalFeet / 6 + 1)}</h6>
          </TableCell>
        </TableRow>
      );
    } else if (event.postInstall === "ground" && event.height === 14) {
      seteightFtPosts(
        <TableRow>
          <TableCell>
            <h6>
              8' Posts (EF 20508): {Math.ceil(event.totalFeet / 6 + 1)}
              <br></br>
              <br></br>
            </h6>
          </TableCell>
        </TableRow>
      );
    } else if (event.postInstall === "mount" && event.height === 9) {
      setfourFtPosts(
        <TableRow>
          <TableCell>
            <h6>
              4' Surface Mount Posts (EF 20108):{" "}
              {Math.ceil(event.totalFeet / 6 + 1)} <br></br>
              <br></br>
            </h6>
          </TableCell>
        </TableRow>
      );
      setSurfaceMount(
        <TableRow>
          <TableCell>
            <h6>
              Surface Mounts (EF 30038): {Math.ceil(event.totalFeet / 6 + 1)}{" "}
              <br></br>
              <br></br>
            </h6>
          </TableCell>
        </TableRow>
      );
    } else if (event.postInstall === "mount" && event.height === 14) {
      setsixFtPosts(
        <TableRow>
          <TableCell>
            <h6>6' Posts (EF 20408): {Math.ceil(event.totalFeet / 6 + 1)}</h6>
          </TableCell>
        </TableRow>
      );
      setSurfaceMount(
        <TableRow>
          <TableCell>
            <h6>
              Surface Mounts (EF 30038): {Math.ceil(event.totalFeet / 6 + 1)}
              <br></br>
              <br></br>
            </h6>
          </TableCell>
        </TableRow>
      );
    }
    setBrackets(
      <TableRow>
        <TableCell>
          <h6>
            Framing Bracket (EF 40408): {Math.ceil(event.totalFeet / 6)}
            <br></br>
            <br></br>
          </h6>
        </TableCell>
      </TableRow>
    );

    if (event.blackAlum > 0) {
      setBlackAlum(
        <TableRow>
          <TableCell>
            <h6>
              Aluminum Accent Boards (EF 00308): {event.blackAlum}
              <br></br>
              <br></br>
            </h6>
          </TableCell>
        </TableRow>
      );
    }
    if (event.walkGate > 0 || event.doubleGate > 0) {
      setGateFrame(
        <TableRow>
          <TableCell>
            <h6>
              Gate Frames (EF):
              {Math.ceil(
                parseInt(event.walkGate) + parseInt(event.doubleGate * 2)
              )}
              <br></br>
              <br></br>
            </h6>
          </TableCell>
        </TableRow>
      );
    }
    if (event.accent === "lattice") {
      setLattice(
        <TableRow>
          <TableCell>
            <h6>
              Lattice Accent (EF 50308): 1<br></br>
              <br></br>
            </h6>
          </TableCell>
        </TableRow>
      );
    } else if (event.accent === "acrylic") {
      setAcrylic(
        <TableRow>
          <TableCell>
            <h6>
              Acrylic Accent (EF 51309): 1<br></br>
              <br></br>
            </h6>
          </TableCell>
        </TableRow>
      );
    }

    // if (event.walkGate > 0 || event.doubleGate > 0) {
    //   if (event.postInstall === "ground" && event.height === 9) {
    //     setSixFtHDPosts(
    //       Math.ceil(parseInt(event.walkGate) + parseInt(event.doubleGate * 2))
    //     );
    //   } else if (event.postInstall === "ground" && event.height === 14) {
    //     setEightFtHDPosts(
    //       Math.ceil(parseInt(event.walkGate) + parseInt(event.doubleGate * 2))
    //     );
    //   } else if (event.postInstall === "mount" && event.height === 14) {
    //     setSixFtHDPosts(
    //       Math.ceil(parseInt(event.walkGate) + parseInt(event.doubleGate * 2))
    //     );
    //   } else if (event.postInstall === "mount" && event.height === 9) {
    //     setSixFtHDPosts(
    //       Math.ceil(parseInt(event.walkGate) + parseInt(event.doubleGate * 2))
    //     );
    //   }
    // }
  };

  const [sixFtPosts, setsixFtPosts] = useState();
  const [eightFtPosts, seteightFtPosts] = useState();
  const [fourFeetPosts, setfourFtPosts] = useState();
  const [brackets, setBrackets] = useState();
  const [blackAlum, setBlackAlum] = useState();
  const [gateFrame, setGateFrame] = useState();
  const [dropRod, setDropRod] = useState();
  const [surfaceMount, setSurfaceMount] = useState();
  const [submit, setSubmit] = useState(false);
  const [black, setBlack] = useState();
  const [cedar, setCedar] = useState();
  const [grey, setGrey] = useState();
  const [acrylic, setAcrylic] = useState();
  const [lattice, setLattice] = useState();
  // const [sixFtHDPosts, setSixFtHDPosts] = useState(0);
  // const [eightFtHDPosts, setEightFtHDPosts] = useState(0);

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
            <Col></Col>
            <Col>
              <FadeIn>
                <TableContainer component={Paper}>
                  <Table
                    bgcolor="lightgrey"
                    sx={{ minWidth: 200 }}
                    aria-label="simple table"
                  >
                    <TableHead>
                      <h3>
                        <u>Parts Needed:</u>
                      </h3>
                    </TableHead>
                    {black}
                    {cedar}
                    {grey}
                    {acrylic}
                    {lattice}
                    {gateFrame}
                    {blackAlum}
                    {brackets}
                    {sixFtPosts}
                    {eightFtPosts}
                    {fourFeetPosts}
                    {surfaceMount}
                    {dropRod}

                    {/* <TableRow>
                      <TableCell>
                        <h6>
                          8' Ft HD Post Kit (EF 62508): <br></br>
                          <br></br>
                          {eightFtHDPosts.toLocaleString()}
                        </h6>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h6>
                          6' Ft HD Post Kit (EF 62518): <br></br>
                          <br></br>
                          {sixFtHDPosts.toLocaleString()}
                        </h6>
                      </TableCell>
                    </TableRow> */}
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
            <Col></Col>
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
              <b>
                <CardHeader title="Fence Configurator"></CardHeader>
              </b>
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
                      <p>Black Rose</p>
                    </Col>
                    <Col>
                      <Zoom>
                        <img
                          id="kingCedar"
                          alt="king cedar"
                          src={kingCedar}
                        ></img>
                      </Zoom>
                      <p>King Cedar</p>
                    </Col>
                    <Col>
                      <Zoom>
                        <img
                          id="oxfordGrey"
                          alt="oxford grey"
                          src={oxfordGrey}
                        ></img>
                      </Zoom>
                      <p>Oxford Grey</p>
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
                      {" "}
                      <Zoom>
                        <img
                          id="singleGate"
                          alt="single_gate"
                          src={singleGate}
                        ></img>
                      </Zoom>
                    </Col>
                    <Col></Col>
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
