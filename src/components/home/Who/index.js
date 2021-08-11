import React from 'react';
import { Link } from 'react-router-dom';
import Badge from "../badges/"
import CardList from '../card/';

const Who = ({ CompanyLogo, id, OrganisationsIntroText, numbers, title, linkTitle }) => {

  return (
    <div className="who who--homepage">
      <h2>{title}</h2>
      <div>
        <Badge numbers={numbers} label="Feature your organisation" />
      </div>
      <p>{OrganisationsIntroText}</p>
      <div>
        <CardList id={id} itemList={CompanyLogo} />
      </div>
      {
        (linkTitle = true && (
          <Link className="nav-link" to="/community/standard-community">
            View all of the organisations in our community
          </Link>
        ))
      }
    </div>
  );
};

export default Who;