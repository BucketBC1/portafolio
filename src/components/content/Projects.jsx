import './styles.css';

const Projects = () => {
    return (
        <div className='container'>
            <h1 className='title'>Projects</h1>
            <section className='sectionProjects'>
                    <div className='projectImage'>
                        <img 
                            src="https://images.unsplash.com/photo-1648824572347-517357c9c44e?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt=""
                            className='' />
                    </div>

                    <div className='titleDescription'>
                        <h3 className='titleProject'>Title Project</h3>
                        <p className='description desPro'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores deleniti quas molestiae facere adipisci voluptas laborum voluptatibus, a quibusdam unde dolore similique suscipit in recusandae consequatur cumque ab optio quis?</p>
                        <a href="https://github.com/BucketBC1/software-de-gesti-n.git" className='linkRepo'>
                            <box-icon type='logo' 
                                name='github'
                                size='md'
                                color='#fff'>
                            </box-icon>
                            Repositorio
                        </a>
                    </div>
            </section>
        </div>
    )
}

export default Projects;