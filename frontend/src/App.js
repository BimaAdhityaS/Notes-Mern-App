import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";
import EditNote from "./components/EditNote";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<NoteList />} />
        </Routes>
        <Routes>
          <Route path="/edit/:id" element={<EditNote />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
