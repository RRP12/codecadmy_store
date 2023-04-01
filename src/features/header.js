import React from 'react'
// import logo from './logo.svg';
let logo = "https://media.istockphoto.com/id/1216210821/vector/store-front-or-shop-icon-collection-glyph-style.jpg?s=612x612&w=0&k=20&c=dRO_EXuiyy5to6eCoqmLtd5YtQtsBrD5NqvvWdbIMog="
export default function Header() {
  return (
    <div className='header'>
      <img src={logo}
  
        alt={ "salma hayak"}
      />
      <ul>
        <li>Home</li>
        <li>contact</li>
        <li>about</li>
     </ul>
    </div>
  )
}
