import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import Paper from "@mui/material/Paper";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (event) => {
    setFeet(event.totalFeet);
    //setHeight(event.setHeight);
    //setPostInstall(event.postInstall);
    //setAccent(event.accent);
    setBlackAlum(event.blackAlum);
    setWalkGate(event.setWalkGate);
    //setDoubleGate(event.setDoubleGate);
  };
  const [totalFeet, setFeet] = useState(0);
  //const [height, setHeight] = useState(0);
  //const [postInstall, setPostInstall] = useState(0);
  //const [accent, setAccent] = useState(0);
  const [blackAlum, setBlackAlum] = useState(0);
  const [walkGate, setWalkGate] = useState(0);
  //const [doubleGate, setDoubleGate] = useState(0);

  // let totalFeet = (data) => data.totalFeet;
  // let totalFeet = (watch("totalFeet"));
  // watch input value by passing the name of it

  // let posts = 0;
  // let brackets = 0;
  // let gateFrame = 0;
  // let blackA = 0;
  // accent = parseInt(accent * 3);

  // gateFrame = Math.ceil(walkGate + dGate);
  // let boards = Math.ceil(2.42 + gateFrame * 13 - accent);
  // posts = Math.ceil(totalFeet * 0.173);
  // brackets = Math.ceil(totalFeet * 0.167);

  // blackA = blackAlum;

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
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
          <option value="Lattice">Lattice</option>
          <option value="Acrilic">Acrilic</option>
          <option value="None">None</option>
        </select>
        <input defaultValue="0" {...register("blackAlum")} />
        <input defaultValue="0" {...register("walkGate")} />
        <input defaultValue="0" {...register("doubleGate")} />

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
              Composite Boards: {Math.ceil(totalFeet * 2.42 + walkGate * 13)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Posts: {Math.ceil(totalFeet * 0.173)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Brackets: {Math.ceil(totalFeet * 0.167)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Gate Frames: {walkGate}</TableCell>
          </TableRow>
          <TableCell>BlackAlum: {blackAlum}</TableCell>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
