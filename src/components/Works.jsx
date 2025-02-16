import React from 'react';
import '../styles/Works.css';
import GitHubProjects from './GitHubProjects';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5';
import WifiTest from './WifiTest';
import DarkMode from './DarkMode';
import HackerTyper from './HackerTyper';
import MusicPlayer from './MusicPlayer';
import Piano from './Piano';



const Works = () => {
  return (
    <div className="works">
      <h1 className='example'>Examples of my work that you'll love.</h1>
      <h1 className='down-arrow'>&darr;</h1>
      <GitHubProjects />
      <Project1 />
      <DarkMode />
      <MusicPlayer />
      <WifiTest />
      <Project5 />
      <Project2 />
      <Project3 />
      <Project4 />
      <HackerTyper />
      <Piano />
      <h1 className='example'>I might add more projects later, depending on how things go.</h1>
    </div>
  );
};

export default Works;
