import { useParams, Link } from "react-router-dom";

export default function Labels() {
const { labelName } = useParams();

return ( <div> <h1>Label: {labelName}</h1>


  <p>Notes with label.</p>

  <Link to="/dashboard">Back to Dashboard</Link>
</div>

);
}
