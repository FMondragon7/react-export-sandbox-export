import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocalStorage } from "./hooks";
import NotesPage from "./pages/NotesPage";
import LoginPage from "./pages/LoginPage";

export const GlobalContext = createContext();

export default function App() {
  const [user, setuser] = useState("");
  const [notes, setNotes] = useLocalStorage("notes", []);

  const handleCreate = (content) => {
    const newNote = { id: Date.now(), author: user, body: content };
    setNotes([...notes, newNote]);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const value = {
    user,
    notes,
    onCreate: handleCreate,
    onDelete: handleDelete,
    onLogin: (user) => setuser(user),
    onLogout: () => setuser(""),
  };

  return (
    <GlobalContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NotesPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}
