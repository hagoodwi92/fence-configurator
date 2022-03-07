import React, { useState } from "react";
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
    setFeet(
      Math.ceil((event.totalFeet * 2.42) + (event.walkGate*13) +(event.doubleGate*26)));
    setPosts(Math.ceil(event.totalFeet * 0.173));
    setBrackets(Math.ceil(event.totalFeet * 0.167));
    setBlackAlum(event.blackAlum);
    setGateFrame(parseInt(event.walkGate)+ parseInt((event.doubleGate*2)));
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
        Total Feet: <input
          defaultValue="0"
          {...register("totalFeet", { required: true })}
        />
        <select defaultValue="0" {...register("height")}>
          <option value="4'">4'</option>
          <option value="6'">6'</option>
        </select>
        <select defaultValue="0" {...register("postInstall")}>
          <option value="mount">Mount</option>
          <option value="ground">Ground</option>
        </select>
        <select defaultValue="0" {...register("accent")}>
          <option value="lattice">Lattice</option>
          <option value="acrilic">Acrilic</option>
          <option value="none">None</option>
        </select>
        Black Alum:<input defaultValue="0" {...register("blackAlum")} />
        Walk Gate:<input defaultValue="0" {...register("walkGate")} />
        Double Gate:<input defaultValue="0" {...register("doubleGate")} />

        {/* include validation with required or other standard HTML validation rules */}
        {/* <input {...register("exampleRequired", { required: true })} /> */}
        {/* errors will return when field validation fails  */}
        {errors.totalFeet && <span>This field is required</span>}

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
            <TableCell>
              Composite Boards: {totalFeet}
            </TableCell>
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
