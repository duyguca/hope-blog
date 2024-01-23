"use client";
import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();
  // console.log({ status });
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <button
            className={styles.link}
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </button>
        </>
      )}
      <div
        className={styles.burger}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/">Login</Link>
          ) : (
            <>
              <Link href="/">Write</Link>
              <Link href="/" className={styles.link}>
                Logout
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
