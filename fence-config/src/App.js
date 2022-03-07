import React, { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import {
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import Paper from "@mui/material/Paper";
// import logo1 from "./logo1.jpg";

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
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            Total Feet:{" "}
            <input
              defaultValue="0"
              {...register("totalFeet", { required: true })}
            />
            <select defaultValue="0" {...register("height")}>
              <option value="8">4'</option>
              <option value="13">6'</option>
            </select>
            {/* <select defaultValue="0" {...register("postInstall")}>
            <option value="mount">Mount</option>
            <option value="ground">Ground</option>
          </select> */}
            <select defaultValue="0" {...register("accent")}>
              <option value="-3">Lattice</option>
              <option value="-3">Acrilic</option>
              <option value="0">None</option>
            </select>
            Black Alum:
            <input
              defaultValue="1"
              {...register("blackAlum", { required: true })}
            />
            Walk Gate:
            <input
              defaultValue="0"
              {...register("walkGate", { required: true })}
            />
            Double Gate:
            <input
              defaultValue="0"
              {...register("doubleGate", { required: true })}
            />
            {/* include validation with required or other standard HTML validation rules */}
            {/* <input {...register("exampleRequired", { required: true })} /> */}
            {/* errors will return when field validation fails  */}
            {errors.blackAlum && <span>This field is required</span>}
            {errors.totalFeet && <span>This field is required</span>}
            {errors.walkGate && <span>This field is required</span>}
            {errors.doubleGate && <span>This field is required</span>}
            <input type="submit" />
          </form>
          <br></br>
          <br></br>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
      </Container>
    </React.Fragment>
  );
}
