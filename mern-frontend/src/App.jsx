import { Link } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className="bg-slate-600 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl text-white font-bold mb-6">
        Welcome to User Management System
      </h1>
      <Link to="/users">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Users
        </button>
      </Link>
    </div>
  );
}

export default App;
