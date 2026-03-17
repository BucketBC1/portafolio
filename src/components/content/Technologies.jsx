import './styles.css';
import react from '../../assets/React.svg'
import javascript from '../../assets/JavaScript.svg'
import nodejs from '../../assets/Nodejs.svg'
import html5 from '../../assets/Html5.svg'
import css3 from '../../assets/Css3.svg'
import docker from '../../assets/Docker.svg'
import mssql from '../../assets/Microsoftsqlserver.svg'
import mongodb from '../../assets/Mongodb.svg'
import mysql from '../../assets/Mysql.svg'
import java from '../../assets/Java.svg';
import git from '../../assets/Git.svg'


const Technologies = () => {
    return (
        <div className='container'>
            <h1 className='title'>Technologies</h1>
            <section>
                <div className='technologies'>
                    <div className='technologie'>
                        <a href="#">
                            <img src={react} alt="" className='imgTech'/>
                        </a>
                        <span>React</span>
                    </div>
                    <div className='technologie'>
                        <a href="#">
                            <img src={javascript} alt="" className='imgTech'/>
                        </a>
                        <span>JavaScript</span>
                    </div>
                    <div className='technologie'>
                        <a href="#">
                            <img src={nodejs} alt="" className='imgTech'/>
                        </a>
                        <span>NodeJS</span>
                    </div>
                    <div className='technologie'>
                        <a href="#">
                            <img src={html5} alt="" className='imgTech'/>
                        </a>
                        <span>HTML5</span>
                    </div>
                    <div className='technologie'>
                        <a href="#">
                            <img src={css3} alt="" className='imgTech'/>
                        </a>
                        <span>CSS3</span>
                    </div>
                    <div className='technologie'>
                        <a href="#">
                            <img src={java} alt="" className='imgTech'/>
                        </a>
                        <span>Java</span>
                    </div>
                    <div className='technologie'>
                        <a href="#">
                            <img src={mongodb} alt="" className='imgTech'/>
                        </a>
                        <span>Mongodb</span>
                    </div>
                    <div className='technologie'>
                        <a href="#">
                            <img src={mssql} alt="" className='imgTech'/>
                        </a>
                        <span>SQL Server</span>
                    </div>
                    <div className='technologie'>
                        <a href="#">
                            <img src={mysql} alt="" className='imgTech'/>
                        </a>
                        <span>MySQL</span>
                    </div>
                    <div className='technologie'>
                        <a href="#">
                            <img src={docker} alt="" className='imgTech'/>
                        </a>
                        <span>Docker</span>
                    </div>
                    <div className='technologie'>
                        <a href="#">
                            <img src={git} alt="" className='imgTech'/>
                        </a>
                        <span>Git</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Technologies;