import React from "react";
import { notes } from "../../data/notes";
import NotesCard from "../cards/NotesCard";
const Notes = () => {
  return (
    <section className="flex-col flex-wrap justify-evenly gap-y-12 bg-white pb-4 dark:bg-body-dark ">
      <h1 className=" mb-8 p-6 text-center text-3xl font-bold text-black  dark:text-white">
        Download Notes by KMPHLearning
      </h1>
      <div className="flex flex-wrap justify-evenly gap-10 ">
        {notes.map((note, index) => {
          return (
            <NotesCard key={index} imgUrl={note.imgUrl} title={note.title} />
          );
        })}
      </div>
    </section>
  );
};

export default Notes;
