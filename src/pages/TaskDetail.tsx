import { useParams, useNavigate } from "react-router-dom";
import tasks from "../data/Tasks";

export default function TaskDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return <p>Không tìm thấy công việc!</p>;
  }

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button
        onClick={() => navigate(-1)}
      >
        Quay lại
      </button>
    </div>
  );
}
