import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Pedro Abreu Arenas</h1>
      <p>Especialista em TI</p>
      <table>
		  	<tbody>
    				<tr>
        				<td>
							      <p className='fa-mainframe'></p>
        				</td>
        				<td>
							      <p className='fa-jcl'></p>
        				</td>
						<td>
							      <p className='fa-vsam'></p>
        				</td>
        				<td>
							      <p className='fa-cics'></p>
        				</td>
						<td>
							      <p className='fa-cobol'></p>
        				</td>
						<td>
							      <p className='fa-adanat'></p>
        				</td>
    				</tr>
			</tbody>
		</table>
      <div className='skills'>
					<i className='fab fa-html5'></i>
					<i className='fab fa-css3-alt'></i>
					<i className='fab fa-js'></i>
					<i className='fab fa-react'></i>
					<i className='fab fa-angular'></i>
					<i className='fas fa-database'></i>
					<i className='fab fa-node'></i>
				</div>
    </div>
  );
};

export default Cover;
