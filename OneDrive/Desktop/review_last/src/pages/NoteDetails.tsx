import {
useLoaderData,
Link,
type LoaderFunctionArgs,
} from "react-router-dom";

type Note = {
id: string;
title: string;
description: string;
};

export async function noteLoader({
params,
}: LoaderFunctionArgs): Promise<Note> {
const notes: Note[] = [
{
id: "1",
title: "My First Note",
description: "This is my first FundooNotes note.",
},
];

const note = notes.find((item) => item.id === params.id);

if (!note) {
throw new Response("Note not found", { status: 404 });
}

return note;
}

export default function NoteDetails() {
const note = useLoaderData() as Note;

return ( <div> <h1>{note.title}</h1> <p>{note.description}</p>


  <Link to="/dashboard">Back to Dashboard</Link>
</div>


);
}
