// components/Navigation.js

import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="naaav">
        <li>
          <Link href="/">
            <span>FOREIGN LANGUAGE</span> <span>SUPPORT </span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>MARKET RESEARCH </span> <span> &amp; ANALYSIS </span>
          </Link>
        </li>
        <li className="">
          <Link href="/">
            <span>TRANSCRIPTION</span> <span> SERVICES</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>MULTILINGUAL</span> <span> CALL CENTER</span>
          </Link>
        </li>
        <li >
          <Link href="/">
            <span>DATA ENTRY</span> <span> SERVICES </span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>CREATIVE</span> <span> SERVICES </span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>PHOTOT EDITING</span> <span> SERVICES </span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>VIRTUAL ASSISTANT</span> <span> SERVICES </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
