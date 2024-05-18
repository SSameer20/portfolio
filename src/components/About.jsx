import React, { useState, useEffect } from 'react';
import "../style/about.css";
// import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/leetcode'

import cplus from "../media/icons/Cplus.png"
import csharp from "../media/icons/Csharp.png";
import java from "../media/icons/Java.png"
import js from "../media/icons/JavaScript.png";

import html from "../media/icons/HTML5.png";
import css from "../media/icons/CSS3.png"
import node from "../media/icons/Node.js.png";
import aspnet from "../media/icons/asp.net.png"
import react from "../media/icons/React.png"

import sqlserver from "../media/icons/SqlServer.png";
import mongo from "../media/icons/MongoDB.png"
import sql from "../media/icons/MySQL.png";

import aws from "../media/icons/AWS.png";
import docker from "../media/icons/Docker.png";
import git from "../media/icons/Git.png"
import net from "../media/icons/NET.png"
import linux from "../media/icons/Linux.png"







export default function About() {

  return (
    <div style={{
      
      display: "flex",
      flexDirection: "column", justifyContent: "center", alignContent: "center",
      alignItems: "center", textAlign: "center"
    }}>



      <div id='about' style={{ maxWidth: "80vw"}}>
        <p style={{ fontSize: "50px", fontWeight: "700", color: '#ff6666' }}>ABOUT <span style={{ color: "white" }}>ME</span></p>
        <p style={{ fontSize: "30px", fontWeight: "500", color: 'white' }}>Get to <span style={{ color: "#ff6666" }}> Know Me</span></p>
        <p style={{ color: "white", fontSize: "20px", maxWidth: "70vw", textAlign: "start" }}>
          Welcome to My Portfolio! As a passionate and driven fresher aspiring to become a software developer,
          I showcase my skills, projects, and experiences here. With a foundation in
          Data Structures, Operating System, Database and Networking, <br /><br />I aim to contribute innovative solutions to real-world problems.
          Explore my projects to see how I apply my knowledge and creativity, and feel free to connect with me to discuss potential collaborations or opportunities.<br /><br />
          Let's build the future together, one line of code at a time.</p>
      </div>

      <div id='skills'>
        <p style={{ fontSize: "30px", fontWeight: "500", color: 'white' }}>MY <span style={{ color: "#ff6666" }}>SKILLS</span></p>

        <div id='skill' style={{ display: "flex", flexDirection: 'column' }}>
          <label htmlFor="program" style={{ color: 'white', fontWeight: '500', fontSize: '40px' }}>Programming Languages : </label>
          <div className="program">
            <div className="lang">
              <img src={cplus} alt="Cplusplus" srcset="" className='skill-icon' />
              <span class="alt-text">Cplusplus</span>
            </div>
            <div className="lang">
              <img src={csharp} alt="CSharp" srcset="" className='skill-icon' />
              <span class="alt-text">C#</span>
            </div>
            <div className="lang">
              <img src={java} alt="Java" srcset="" className='skill-icon' />
              <span class="alt-text">Java</span>
            </div>
            <div className="lang">
              <img src={js} alt="JavaScript" srcset="" className='skill-icon' />
              <span class="alt-text">JavaScript</span>
            </div>
          </div>

          <label htmlFor="web" style={{ color: 'white', fontWeight: '500', fontSize: '40px' }}>Web Technologies : </label>
          <div className="web">
            <div className="lang">
              <img src={react} alt="ReactJS" srcset="" className='skill-icon' />
              <span class="alt-text">ReactJS</span>
            </div>
            <div className="lang">
              <img src={html} alt="HTML" srcset="" className='skill-icon' />
              <span class="alt-text">HTML</span>
            </div>
            <div className="lang">
              <img src={css} alt="CSS" srcset="" className='skill-icon' />
              <span class="alt-text">CSS</span>
            </div>
            <div className="lang">
              <img src={node} alt="NodeJS" srcset="" className='skill-icon' />
              <span class="alt-text">NodeJS</span>
            </div>
            <div className="lang">
              <img src={aspnet} alt="ASP.NET" srcset="" className='skill-icon' />
              <span class="alt-text">ASP.NET</span>
            </div>
          </div>

          <label htmlFor="database" style={{ color: 'white', fontWeight: '500', fontSize: '40px' }}>Database : </label>
          <div className="database">
            <div className="lang">
              <img src={sqlserver} alt="SQl SERVER" srcset="" className='skill-icon' />
              <span class="alt-text">SQl SERVER</span>
            </div>
            <div className="lang">
              <img src={sql} alt="SQL" srcset="" className='skill-icon' />
              <span class="alt-text">SQL</span>
            </div>
            <div className="lang">
              <img src={mongo} alt="MongoDB" srcset="" className='skill-icon' />
              <span class="alt-text">MongoDB</span>
            </div>

          </div>

          <label htmlFor="technology" style={{ color: 'white', fontWeight: '500', fontSize: '40px' }}>Other Technology : </label>
          <div className="technology">
            <div className="lang">
              <img src={aws} alt="AWS" srcset="" className='skill-icon' />
              <span class="alt-text">AWS</span>
            </div>
            <div className="lang">
              <img src={linux} alt="Linux" srcset="" className='skill-icon' />
              <span class="alt-text">Linux</span>
            </div>
            <div className="lang">
              <img src={git} alt="Git" srcset="" className='skill-icon' />
              <span class="alt-text">Git</span>
            </div>

            <div className="lang">
              <img src={docker} alt="Docker" srcset="" className='skill-icon' />
              <span class="alt-text">Docker</span>
            </div>

            <div className="lang">
              <img src={net} alt="Net" srcset="" className='skill-icon' />
              <span class="alt-text">.NET</span>
            </div>

          </div>



        </div>

      </div>


    </div>
  );
}