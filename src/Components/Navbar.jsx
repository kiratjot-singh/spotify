
// import './Navbar.css';

// function Navbar() {
//   const logo = './images/spotify logo.webp';
//   const home = './images/homeicon.png';

//   return (
//     <div className="navbar">
//       {/* Left Section */}
//       <div className="nav-left">
//         <img className="logo" src={logo} alt="Spotify Logo" />
//         <button className="home">
//           <img src={home} alt="Home" className="home-icon" />
//         </button>
//       </div>

//       {/* Center Section */}
//       <div className="nav-center">
//         <input
//           type="text"
//           placeholder="What do you want to listen to?"
//           className="search-box"
//         />
//       </div>

//       {/* Right Section */}
//       <div className="nav-right">
//         <button className="nav-btn">Premium</button>
//         <button className="nav-btn">Support</button>
//         <button className="nav-btn">Download</button>
//         <button className="nav-btn create-playlist">Sign up</button>
//         <button className="login">Login</button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import './Navbar.css';

function Navbar() {
  const logo = './images/spotify logo.webp';
  const home = './images/homeicon.png';

  return (
    <div className="navbar">
      {/* Left Section */}
      <div className="nav-left">
        <img className="logo" src={logo} alt="Spotify Logo" />
        <button className="home">
          <img src={home} alt="Home" className="home-icon" />
        </button>
      </div>

      {/* Center Section */}
      <div className="nav-center">
        <input
          type="text"
          placeholder="What do you want to listen to?"
          className="search-box"
        />
      </div>

      {/* Right Section */}
      <div className="nav-right">
        <button className="nav-btn">Premium</button>
        <button className="nav-btn">Support</button>
        <button className="nav-btn">Download</button>
        <button className="sign">Sign up</button>
        <button className="login">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
