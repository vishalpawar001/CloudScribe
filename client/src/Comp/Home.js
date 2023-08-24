import React from "react";
import "./CSS/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
 
  return (
    <div className="notes-homepage">
      {/* Navbar */}
      <div className="navbar">
        <div className="left">
          <p> CloudScribe</p>
          

        </div>
        <div className="right">
          <span>
            <Link to="/login"  className="login-link">Login</Link>
          </span>
          <span>
            <Link to="/Signup"  className="login-link">Signup</Link>
          </span>
          <span>
            <Link to="/help"  className="login-link">Help</Link>
          </span>
          <span>
            <Link to="/notes"  className="login-link">Notes</Link>
          </span>
        </div>
      </div>

      {/* Middle Section */}
      <div className="middle-section">
        <h2>The simplest way to keep notes</h2>
        <Link to="/signup" className="ln1">
          {/* <button className="mid-btn">Signup Now</button> */}
          <p className="button-1">SignUp Now</p>
        </Link>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="subsection subsec1">
          <div className="left">
            <img
              loading="lazy"
              src="https://simplenoteblog.files.wordpress.com/2020/07/ic_info.png?w=32"
              alt=""
              className="wp-image-382"
              width="32"
              height="32"
              srcSet="https://simplenoteblog.files.wordpress.com/2020/07/ic_info.png?w=32&amp;zoom=2 1.5x"
              src-orig="https://simplenoteblog.files.wordpress.com/2020/07/ic_info.png?w=72"
              scale="1.5"
            />
            <p>Write notes </p>
          </div>
          <div className="right">
            <p>
              {" "}
              Notes stay updated across all your devices, automatically and in
              real time. There’s no “sync” button: It just works.

            </p>
          </div>
        </div>

        <div className="subsection subsec1">
          <div className="left">
            <img
              src="https://simplenoteblog.files.wordpress.com/2020/07/ic_tags.png?w=32"
              className="wp-image-383"
              width="32"
              alt=""
              height="32"
              srcSet="https://simplenoteblog.files.wordpress.com/2020/07/ic_tags.png?w=32&amp;zoom=2 1.5x"
              src-orig="https://simplenoteblog.files.wordpress.com/2020/07/ic_tags.png?w=72"
              scale="1.5"
            />
            <p>Use It everwhere</p>
            
          </div>
          <div className="right">
            <p>
              Notes stay updated across all your devices, automatically and in
              real time. There’s no “sync” button: It just works.
            </p>
          </div>
        </div>

        <div className="subsection">
          <div className="left">
            <img
              src="https://simplenoteblog.files.wordpress.com/2020/07/ic_cloud-sync.png?w=32"
              alt=""
              className="wp-image-381"
              width="32"
              height="32"
              srcSet="https://simplenoteblog.files.wordpress.com/2020/07/ic_cloud-sync.png?w=32&amp;zoom=2 1.5x"
              src-orig="https://simplenoteblog.files.wordpress.com/2020/07/ic_cloud-sync.png?w=72"
              scale="1.5"
            />
            
            <p>Secure and private</p>
            

          </div>
          <div className="right">
            <p>
              Notes stay updated across all your devices, automatically and in
              real time. There’s no “sync” button: It just works.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
