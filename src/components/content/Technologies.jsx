import './styles.css';

const Technologies = () => {
    return (
        <div className='container'>
            <h1 className='title'>Technologies</h1>
            <section>
                <div className='technologies'>
                    <div className='technologie'>
                        <a href="#">
                            <box-icon 
                                type='logo' 
                                name='react'
                                size='60px'
                                color='#61DBFB'>
                            </box-icon>
                        </a>
                        <span>React</span>
                    </div>
                    <div className='technologie'>
                        <a href="#">
                            <box-icon 
                                name='javascript' 
                                type='logo' 
                                size='60px'
                                color='#F0DB4F'>
                            </box-icon>
                        </a>
                        <span>JavaScript</span>
                    </div>
                    <div className='technologie'>
                        <a href="#">
                            <box-icon 
                                type='logo' 
                                name='nodejs'
                                size='60px'
                                color='#3C873A'>
                            </box-icon>
                        </a>
                        <span>NodeJS</span>
                    </div>
                    <div className='technologie'>
                        <a href="#">
                            <box-icon 
                                type='logo' 
                                name='html5'
                                size='60px'
                                color='#F06529'>
                            </box-icon>
                        </a>
                        <span>HTML5</span>
                    </div>
                    <div className='technologie'>
                        <a href="#">
                            <box-icon 
                                type='logo' 
                                name='docker'
                                size='60px'
                                color='#0DB7ED'>
                            </box-icon>
                        </a>
                        <span>Docker</span>
                    </div>
                    <div className='technologie'>
                        <a href="#">
                            <box-icon 
                                type='logo' 
                                name='java'
                                size='60px'
                                color='#5382a1'>
                            </box-icon>
                        </a>
                        <span>Java</span>
                    </div>
                    <div className='technologie'>
                        <a href="#">
                            <box-icon 
                                type='logo' 
                                name='mongodb'
                                size='60px'
                                color='#4DB33D'>  
                            </box-icon>
                        </a>
                        <span>Mongodb</span>
                    </div>
                    <div className='technologie'>
                        <a href="#">
                            <box-icon 
                                type='logo' 
                                name='css3'
                                size='60px'
                                color='#264DE4'>
                            </box-icon>
                        </a>
                        <span>CSS3</span>
                    </div>
                    <div className='technologie'>
                        <a href="#">
                            <box-icon 
                                type='solid' 
                                name='data'
                                size='60px'
                                color='grey'>
                            </box-icon>
                        </a>
                        <span></span>
                    </div>
                    <div className='technologie'>
                        <a href="#">
                            <box-icon 
                                type='logo' 
                                name='git'
                                size='60px'
                                color='#F1502F'>
                            </box-icon>
                        </a>
                        <span>Git</span>
                    </div>          
                </div>
            </section>
        </div>
    )
}

export default Technologies;