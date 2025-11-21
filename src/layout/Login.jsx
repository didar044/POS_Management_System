import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  state = {
    email: "pos@gmail.com",
    password: "111111",
    error: "",
    loading: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({ error: "Please fill all fields." });
      return;
    }

    this.setState({ loading: true, error: "" });

    try {
      // const response = await fetch('http://didar.intelsofts.com/Laravel_React/B_POS/public/api/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email, password }),
      // });

      // const data = await response.json();

      // if (!response.ok) {
      //   this.setState({ error: data.error || 'Login failed', loading: false });
      //   return;
      // }

      // if (data.token) {
      //   localStorage.setItem('token', data.token);
      // }
      const response = await fetch(
        "http://didar.intelsofts.com/Laravel_React/B_POS/public/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();
      console.log("Full API Response:", data);

      if (!response.ok) {
        this.setState({ error: data.error || "Login failed", loading: false });
        return;
      }
      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
        console.log("Token saved:", data.access_token);
       // alert("Token exists: " + data.access_token); 
      } else {
       // alert("No token found in localStorage"); 
      }


      this.setState({ loading: false });
      //------For Local Run-------
       //window.location.href = "/app";
      //------For Hosting--------
       window.location.href = '/Laravel_React/dist/app';
    } catch (err) {
      console.error(err);
      this.setState({
        error: "Something went wrong. Try again.",
        loading: false,
      });
    }
  };

  render() {
    const { email, password, error, loading } = this.state;

    return (
      <div className="login-root">
        <div
          className="box-root flex-flex flex-direction--column"
          style={{ minHeight: "100vh", flexGrow: 1 }}
        >
          <div className="loginbackground box-background--white padding-top--64">
            <div className="loginbackground-gridContainer">
              <div
                className="box-root flex-flex"
                style={{ gridArea: "top / start / 8 / end" }}
              >
                <div
                  className="box-root"
                  style={{
                    backgroundImage:
                      "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
                    flexGrow: 1,
                  }}
                ></div>
              </div>

              <div
                className="box-root flex-flex"
                style={{ gridArea: "4 / 2 / auto / 5" }}
              >
                <div
                  className="box-root box-divider--light-all-2 animationLeftRight tans3s"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>

              <div
                className="box-root flex-flex"
                style={{ gridArea: "7 / start / auto / 4" }}
              >
                <div
                  className="box-root box-background--blue animationLeftRight"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>

              <div
                className="box-root flex-flex"
                style={{ gridArea: "8 / 4 / auto / 6" }}
              >
                <div
                  className="box-root box-background--gray100 animationLeftRight tans3s"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>

              <div
                className="box-root flex-flex"
                style={{ gridArea: "2 / 15 / auto / end" }}
              >
                <div
                  className="box-root box-background--cyan200 animationRightLeft tans4s"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>

              <div
                className="box-root flex-flex"
                style={{ gridArea: "3 / 14 / auto / end" }}
              >
                <div
                  className="box-root box-background--blue animationRightLeft"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>

              <div
                className="box-root flex-flex"
                style={{ gridArea: "4 / 17 / auto / 20" }}
              >
                <div
                  className="box-root box-background--gray100 animationRightLeft tans4s"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>

              <div
                className="box-root flex-flex"
                style={{ gridArea: "5 / 14 / auto / 17" }}
              >
                <div
                  className="box-root box-divider--light-all-2 animationRightLeft tans3s"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
            </div>
          </div>

          <div
            className="box-root padding-top--24 flex-flex flex-direction--column"
            style={{ flexGrow: 1, zIndex: 9 }}
          >
            <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
              <h1>
                <a href="https://www.linkedin.com/in/md-didarul-islam-71414b244/">
                  Point of Sale
                </a>
              </h1>
            </div>

            <div className="formbg-outer">
              <div className="formbg">
                <div className="formbg-inner padding-horizontal--48">
                  <span className="padding-bottom--15 span_class">
                    Sign in to your account
                  </span>

                  {error && (
                    <div style={{ color: "red", marginBottom: "10px" }}>
                      {error}
                    </div>
                  )}

                  <form onSubmit={this.handleSubmit}>
                    <div className="field padding-bottom--24">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                      />
                    </div>

                    <div className="field padding-bottom--24">
                      <div className="grid--50-50">
                        <label htmlFor="password">Password</label>
                      </div>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                      />
                    </div>

                    <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                      <label htmlFor="checkbox">
                        <input type="checkbox" name="checkbox" /> Stay signed in
                        for a week
                      </label>
                    </div>

                    <div className="field padding-bottom--24">
                      <input
                        type="submit"
                        name="submit"
                        value={loading ? "Signing in..." : "Continue"}
                        disabled={loading}
                      />
                    </div>

                    <div className="field">
                      <a
                        className="ssolink"
                        href="https://github.com/didar044/POS_Management_System"
                      >
                        For Open Source
                      </a>
                    </div>
                  </form>
                </div>
              </div>

              <div className="footer-link padding-top--24">
                <span className="span_class">
                  Don't have an account?{" "}
                  <a href="http://didar.intelsofts.com/">Contact us</a>
                </span>
                <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                  <span className="span_class">
                    <a href="https://github.com/didar044/">
                      © POS Management System
                    </a>
                  </span>
                  <span className="span_class">
                    <a href="http://didar.intelsofts.com/">Contact</a>
                  </span>
                  <span className="span_class">
                    <a href="#">Privacy & terms</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
