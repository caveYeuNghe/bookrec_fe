import React from "react";
import "./book.css";

function Book({ book }) {
  return (
    <div className="hero-container">
      <h1 className="hero-title">{book['Book-Title']}</h1>
      <img src={book['Image-URL-L']}
           onError={({ currentTarget }) => {
               currentTarget.onerror = null;
               currentTarget.src = process.env.PUBLIC_URL + '/pepe.png';
           }}
      />

      {/*<p className="hero-desc">{hero.description}</p>*/}
      {/*<div className="role">*/}
      {/*  <p className="hero-role">{hero.role.displayName}</p>*/}
      {/*</div>*/}
      {/*<p className="skills-container">*/}
      {/*  {hero.abilities.map((skills) => {*/}
      {/*    return (*/}
      {/*      <div className="cntr">*/}
      {/*        <img src={skills.displayIcon} />*/}
      {/*        <h3 className="skills"> {skills.displayName}</h3>*/}
      {/*      </div>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</p>*/}
    </div>
  );
}

export default Book;
