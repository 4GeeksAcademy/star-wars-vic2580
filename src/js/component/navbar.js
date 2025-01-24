import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light mb-3 mx-2">
      <Link to="/">
        <span className="navbar-brand mb-0 ps-2">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/color/240/star-wars.png"
            alt="star-wars"
          />
        </span>
      </Link>
      <div className="ml-auto pe-2">
        <div className="dropdown">
          <a
            className="btn dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-3x fa-solid fa-book-journal-whills"></i>
          </a>

          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-start">
            {store.favs.length > 0 ? (
              store.favs.map((fav, index) => {
                return (
                  <li key={index}>
                    <a className="dropdown-item ps-2" href="#">
                      {fav}
                    </a>
                  </li>
                );
              })
            ) : (
              <li className="ps-2">No Favorites </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};