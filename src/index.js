import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let Greets = ({ name }) => (
  <div>

    <h1 className="heading">Who am I and What have I done?</h1>
    <p> Hello From <strong>{name}</strong> , future {1 + 1}x AWS Certified and DevOps Engineer.</p>
    <ul>
      <li>Space Student from the Institute of Space Science and Technolgy (ISST), University of Karachi.</li>

      <li>PAIC Cloud Native Computing and 4IR Innovation Leader &amp; Architect Student.</li>
      <li>My Portfolio: <a href="https://heezjee.surge.sh/">HeeZJee</a> </li>
      <li>My Skills:
        <ul >
          <li >AWS</li>
          <li>Kubernetes</li>
          <li>Docker</li>
          <li>Linux</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>Bootstrap</li>
        </ul>
      </li>
    </ul>
  </div>

)

ReactDOM.render(
  <Greets name={'Hafeez Ghanchi'}></Greets>, document.getElementById('root')
);

