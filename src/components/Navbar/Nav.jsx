import { Link } from "react-router-dom";

export default function Nav() {
  const lists = [
    { label: "Accueil", path: "/" },
    { label: "A Propos", path: "/a-propos" },
  ];

  return (
    <ul className="nav">
      {lists.map((list) => (
        <li key={list.path}>
          <Link to={list.path}>{list.label}</Link>
        </li>
      ))}
    </ul>
  );
}
