/* eslint-disable react/jsx-no-target-blank */
import { LiaHackerrank } from "react-icons/lia";
import React from "react";
const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/raheem._.02/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/raheem02/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin"></i>
      </a>

      <a
        href="https://www.hackerrank.com/profile/raheem02"
        className="home__social-icon"
        target="_blank"
      >
        <LiaHackerrank />
      </a>

      <a
        href="https://github.com/Raheem02"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
