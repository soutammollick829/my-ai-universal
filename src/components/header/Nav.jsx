import React from 'react';

const Nav = () => {
    return (
        <>
         <div className="navbar bg-base-100 px-10">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-3xl font-bold text-error">TheCocktailDB</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 font-bold">
      <li><a href="/Home">Home</a></li>
      <li tabIndex={0}>
        <a>
          API
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a href="/API">Cocktail Drink API</a></li>
          <li><a href="/API-2">Cocktail Non Drink API</a></li>
        </ul>
      </li>
      <li><a href="/Login">Log in</a></li>
    </ul>
  </div>
</div>   
        </>
    );
};

export default Nav;