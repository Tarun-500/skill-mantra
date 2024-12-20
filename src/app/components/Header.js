"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import LOGO from '../../../public/images/logo.png';
import style from './components.module.css';
import { PiListBold } from "react-icons/pi";

const Header = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <header className={style.header}>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <Link href="/" className={`${style.logo} navbar-brand d-flex align-items-center`}>
            <Image
              src={LOGO}
              alt="Skill Mantra Logo"
              className={style.logoImg}
            />
          </Link>
 

          <button
            className="navbar-toggler border-0 p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <PiListBold />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-purple nav-btn">Sign In</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-purple nav-btn">Log In</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
