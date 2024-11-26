// components/Header.js
"use client"

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import LOGO from '../../../public/images/logo.png';
import style from '../../app/globals.css'
const Header = () => {
  useEffect(() => {
    // Ensure Bootstrap's JavaScript is loaded
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image
            src={LOGO}
            alt="Skill Mantra Logo"
          />
        </Link>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/courses" className="nav-link">
                Courses
              </Link>
            </li>
          </ul>

          <div className="d-flex gap-2">
            <button className="btn btn-purple">Sign In</button>
            <button className="btn btn-purple">Log In</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
