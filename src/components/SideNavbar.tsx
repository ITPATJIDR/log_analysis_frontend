import { Link } from "react-router-dom";

const SideNavbar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <nav className="flex-1 p-4">
        <ul>
          <li className="mb-4">
            <Link to="/dashboard" className="text-xl hover:underline">Dashboards</Link>
          </li>
          <li className="mb-4">
            <Link to="/analysis" className="text-xl hover:underline">Analysis</Link>
          </li>
          <li className="mb-4">
            <Link to="/users" className="text-xl hover:underline">Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNavbar;
