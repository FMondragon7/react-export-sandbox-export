import styled from "@emotion/styled";
import { useContext } from "react";

import Note from "./Note";
import { GlobalContext } from "../App";

const Container = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
`;

function NoteList() {
  const { notes } = useContext(GlobalContext);
  return (
    <Container>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </Container>
  );
}

export default NoteList;
