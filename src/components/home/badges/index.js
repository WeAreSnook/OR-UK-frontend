import React from "react";

const Badge = ({
  OrganisationsIntroText,
  numbers,
  title,
  linkTitle,
  label,
}) => {
  //return a single badge pass params
  //to be generic version

  const keyArray = Object.keys(numbers).filter((n) => n !== "id");

  const numbersAray = keyArray.map((number) => {
    return (
      <li className="numbers" key={number}>
        <span>{numbers[number]}</span> {number}
      </li>
    );
  });

  return (
    numbers && (
      <>
        <ul className="numbers-container">{numbersAray}</ul>
        <a
          href="/register"
          className="button button-primary"
        >
          {label}
        </a>
      </>
    )
  );
};
export default Badge;
