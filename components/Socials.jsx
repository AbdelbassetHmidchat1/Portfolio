import React from "react";

import { CiLinkedin } from "react-icons/ci";
import { AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";

function Socials({ classname }) {
  return (
    <>
      <Link href={"https://linkedin.com/in/abdelbasset-hmidchat/"} target="_blank" rel="noopener noreferrer" >
        <CiLinkedin
          className={classname}
        />
      </Link>
      <Link href={"https://github.com/AbdelbassetHmidchat1"} target="_blank" rel="noopener noreferrer">
        <AiOutlineGithub
          className={classname}
        />
      </Link>
    </>
  );
}

export default Socials;
