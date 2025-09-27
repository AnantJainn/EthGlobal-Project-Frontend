// import React, { Fragment, useContext, useState } from "react";
// /// React router dom
// import { Link } from "react-router-dom";
// import { ThemeContext } from "../../../context/ThemeContext";
// import avatar from "../../../images/logo-full.png";

// export function NavMenuToggle() {
// 	setTimeout(() => {
// 		let mainwrapper = document.querySelector("#main-wrapper");
// 		if (mainwrapper.classList.contains("menu-toggle")) {
// 			mainwrapper.classList.remove("menu-toggle");
// 		} else {
// 			mainwrapper.classList.add("menu-toggle");
// 		}
// 	}, 200);
// }

// const NavHader = () => {
//   const [toggle, setToggle] = useState(false);
//   const { navigationHader, openMenuToggle, background } =
//     useContext(ThemeContext);
//   return (
//     <div className="nav-header">
//       <Link to="/dashboard" className="brand-logo">
//         {background.value === "dark" || navigationHader !== "color_1" ? (
//           <div className="me-4">
//             <img alt="images" width={150} src={avatar} />
//           </div>
//         ) : (
//           <div className="me-4">
//             <img alt="images" width={150} src={avatar} />
//           </div>
//         )}
//       </Link>

//       <div
//         className="nav-control"
//         onClick={() => {
//           setToggle(!toggle);
//           NavMenuToggle();
//         }}
//       >
//         <div className={`hamburger ${toggle ? "is-active" : ""}`}>
//           <span className="line"></span>
//           <span className="line"></span>
//           <span className="line"></span>
//         </div>
//       </div>
//     </div>
//   );
// };
// const NavHader = () => {
//   const [toggle, setToggle] = useState(() => {
//     return localStorage.getItem("menuToggle") === "true" || false;
//   });
//   const { navigationHader, openMenuToggle, background } =
//     useContext(ThemeContext);

//   const handleToggle = () => {
//     const newToggle = !toggle;
//     setToggle(newToggle);
//     localStorage.setItem("menuToggle", newToggle);
//     NavMenuToggle();
//   };

//   return (
//     <div className="nav-header">
//       <Link to="/dashboard" className="brand-logo">
//         {background.value === "dark" || navigationHader !== "color_1" ? (
//           <div className="me-4">
//             <img alt="images" width={150} src={avatar} />
//           </div>
//         ) : (
//           <div className="me-4">
//             <img alt="images" width={150} src={avatar} />
//           </div>
//         )}
//       </Link>

//       <div className="nav-control" onClick={handleToggle}>
//         <div className={`hamburger ${toggle ? "is-active" : ""}`}>
//           <span className="line"></span>
//           <span className="line"></span>
//           <span className="line"></span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavHader;

// import React, { useContext, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { ThemeContext } from "../../../context/ThemeContext";
// import avatar from "../../../images/logo-full.png"

// export function NavMenuToggle() {
// 	setTimeout(() => {
// 		let mainwrapper = document.querySelector("#main-wrapper");
// 		if (mainwrapper.classList.contains('menu-toggle')) {
// 			mainwrapper.classList.remove("menu-toggle");
// 		} else {
// 			mainwrapper.classList.add("menu-toggle");
// 		}
// 	}, 200);
// }

// const NavHader = () => {
// 	const [toggle, setToggle] = useState(false);
// 	const { navigationHader, openMenuToggle, background } = useContext(
// 		ThemeContext
// 	);
// 	return (
// 		<div className="nav-header">
// 			<Link to="/dashboard" className="brand-logo">
// 				{background.value === "dark" || navigationHader !== "color_1" ? (
// 					< div className="me-4">
// 						<img alt="images" width={150} src={avatar} />
// 					</div>
// 				) : (
// 					< div className="me-4">
// 						<img alt="images" width={150} src={avatar} />
// 					</div>
// 				)}
// 			</Link >

// 			<div
// 				className="nav-control"
// 				onClick={() => {
// 					setToggle(!toggle);
// 					NavMenuToggle()
// 				}}
// 			>
// 				<div className={`hamburger ${toggle ? "is-active" : ""}`}>
// 					<span className="line"></span>
// 					<span className="line"></span>
// 					<span className="line"></span>
// 				</div>
// 			</div>
// 		</div >
// 	);
// };

// export default NavHader;

import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import avatar from "../../../images/logo_ww_notext.png";

const NavHader = () => {
  const [toggle, setToggle] = useState(false);
  const { navigationHader, openMenuToggle, background } =
    useContext(ThemeContext);

  // Update the class on main-wrapper based on the toggle state
  useEffect(() => {
    const mainwrapper = document.getElementById("main-wrapper");
    if (mainwrapper) {
      if (toggle) {
        mainwrapper.classList.add("menu-toggle");
      } else {
        mainwrapper.classList.remove("menu-toggle");
      }
    }
  }, [toggle]);

  return (
    <div className="nav-header">
      <Link to="/dashboard" className="brand-logo">
        <div className="me-4 ml-2 mb-10 mt-7">
          {" "}
          {/* added margin-bottom */}
          <img alt="images" width={120} src={avatar} />
        </div>
      </Link>
      <div
        className="nav-control"
        onClick={() => {
          setToggle((prevToggle) => !prevToggle);
        }}
      >
        <div className={`hamburger ${toggle ? "is-active" : ""}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
};

export default NavHader;
