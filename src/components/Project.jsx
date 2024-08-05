import React from 'react'
import "../style/project.css";

export default function Project() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100vw' }}>
      <p id="title" style={{ textAlign: 'center' }}>Projects</p>
      <div className='projects' style={{ paddingBottom: "10vh" }}>



        <div className="project">
          <div className="project-card">
            <img src="https://github.com/SSameer20/SkinAI/raw/master/assets/banner.gif" alt="Skin AI Assistant" srcset="" />
          </div>
          <div className="project-details">
            <h1 className='project-title'>
              SkinX - AI Skin Assistant
            </h1>
            <p className='project-description'>
              SkinAI is an AI-powered web application designed to analyze skin conditions and provide immediate insights.            </p>
            <a href="https://github.com/SSameer20/SkinAI" target='_blank' className='repo-btn'>View Repo</a>
          </div>
        </div>


        <div className="project">
          <div className="project-card">
            <img src="https://github.com/SSameer20/Docker-Automation/raw/main/assets/banner.gif" alt="Docker" srcset="" />
          </div>
          <div className="project-details">
            <h1 className='project-title'>
              Docker Automation
            </h1>
            <p className='project-description'>
              The project aims to automate Docker container management tasks
              using Interface. Docker is a popular platform for containerization, enabling
              developers to package applications and their dependencies into isolated containers.
            </p>
            <a href="https://github.com/SSameer20/Docker-Automation" target='_blank' className='repo-btn'>View Repo</a>
          </div>
        </div>



        <div className="project">
          <div className="project-card">
            <img src="https://www.techopedia.com/wp-content/uploads/2024/01/internet-computer-price-prediction.png" alt="ICP" srcset="" />
          </div>
          <div className="project-details">
            <h1 className='project-title'>
              Decentralized Digital Evidence Integrity Monitor on ICP
            </h1>
            <p className='project-description'>
              A web-based platform designed to
              facilitate the storage and verification of digital evidence integrity using the Internet Computer Protocol (ICP) blockchain.
            </p>
            <a href="https://github.com/SSameer20/CypherStream" target='_blank' className='repo-btn'>View Repo</a>
          </div>
        </div>

        <div className="project">
          <div className="project-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB60hXiXg1WCb9gTBDoy-YIsSVeM-rN4CD5ZdJdFR8pQ&s" alt="Virtual Pre Conference " srcset="" />
          </div>
          <div className="project-details">
            <h1 className='project-title'>
              Virtual Pre-Trial Conference Project
            </h1>
            <p className='project-description'>
              This repository aims to provide a comprehensive solution for conducting pre-trial conferences in a virtual environment.
            </p>
            <a href="https://github.com/SSameer20/virtual-pre-trial-conference" target='_blank' className='repo-btn'>View Repo</a>
          </div>
        </div>

      </div>
    </div>
  )
}
