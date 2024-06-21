import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";



function App() {
  const [notes,setNotes]=useState([])
  function addNote(note){
    if(note.title===""&&note.content===""){
      alert("Nothing written!!")
      return
    }else if(note.title.trim()===""){
      alert("Title cannot be empty!!")
      return
    }else if(note.content.trim()===""){
      alert("Content cannot be empty!!")
      return
    }
    setNotes(prevNotes=>{
      return [...prevNotes,note]
    });
  }

  function deleteNote(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((note,index)=>{return index!==id})
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((note,index)=>{
        return <Note onDel={deleteNote} key={index} id={index} title={note.title} content={note.content} />
      })}
      <Footer />
    </div>
  );
}

export default App;
