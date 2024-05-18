import './App.css';
import profile from './media/profile.jpeg'
import { TypeAnimation } from 'react-type-animation';
import { BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaDownload } from "react-icons/fa6";


const Card = ({ imageUrl, x, y }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="profile" height={x} width={y} />
    </div>
  );
};

function App() {
  return (
    <>
      <div animate={{ x: 100 }}className="App" >
        <div className='app-profile'>
          <p id="name">Sameer Shaik</p>
          <p id="profile">
            <TypeAnimation
              sequence={[
                'I am a Software Developer',
                1000,
                'I aspire to be a Cloud Engineer',
                1000,
                'I make Cloud Solutions on aws.',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block', color: 'yellow' }}
              repeat={Infinity}
            /></p>
          <div className="social" style={{ display: "flex", gap: "30px", margin: "50px 0px" }}>
            <a href="https://www.linkedin.com/in/20-sameershaik/" target="_blank" style={{ color: "white", fontSize: "xx-large" }}><AiOutlineLinkedin /></a>
            <a href="https://github.com/SSameer20" target="_blank" style={{ color: "white", fontSize: "xx-large" }}><BsGithub /></a>
            <a href="https://leetcode.com/u/Sameer_20/" target="_blank" style={{ color: "white", fontSize: "xx-large" }}><SiLeetcode /></a>

          </div>
          <div>
            <a href="https://drive.google.com/file/d/1kElCfqU2spss89h7Xod3JcWFeQFcszB6/view?usp=sharing" target="_blank" className='resume-btn'
              style={{ textDecoration: 'none', color: 'inherit', border: "1px solid white", borderRadius: '20px' }}
             >
              View Resume <span> <FaDownload /></span>
            </a>
          </div>
        </div>
        <div className="profile-image">
          <Card
            imageUrl={profile}
            x={250}
            y={250}
          />
        </div>

      </div>
    </>
  );
}

export default App;
