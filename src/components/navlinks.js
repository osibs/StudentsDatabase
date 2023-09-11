import { Link, Outlet } from "react-router-dom";

const Navlinks = () => {
  return (
    <div>
      <ul class="nav justify-content-center">

        <li class="nav-item">
          <Link class="nav-link" to="/">
            <button>Home</button>
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/data">
            <button>Students Data</button>
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/input">
            <button>Input Data</button>
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Navlinks;
