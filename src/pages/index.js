import React from "react";
import styles from "../css/utilities.module.css"

const IndexPage = () => {
  return <div>
    <header style={{ backgroundColor: "#9e9e9e", color: "#fff" }}>
      <div className={styles.wrapper} style={{
        paddingTop: "95px",
        paddingBottom: "85px",
        textAlign: "center"
      }}>
        <h1>Welcome to HackerOne's Product Documentation Center</h1>
        <p>
          You'll find comprehensive guides and documentation to help you start
          working with HackerOne as quickly as possible.
        </p>
      </div>
    </header>
    <section style={{ marginTop: "64px", marginBottom: "64px" }}>
      <div className={styles.wrapper}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            flex: "0 1 50%",
            marginLeft: 40,
          }}>
            <h1>Hackers</h1>
            <p>
              Hello hackers.
            </p>
          </div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            flex: "0 1 50%",
            marginLeft: 40,
          }}>
            <h1>Programs</h1>
            <p>
              Hello programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>;
};

export default IndexPage;
