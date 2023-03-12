import { Link } from 'react-router-dom';
const HeaderPage = () => {
  return (
    <ul class="nav nav-pills mx-5 my-2">
  <li class="nav-item">
    <Link class="nav-link active" to="/home">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/todo">Todo</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/count">Count</Link>
  </li>
</ul>
  );
};

export default HeaderPage;
