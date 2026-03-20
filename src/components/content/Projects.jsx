import './styles.css';
import gestion from '../../assets/software-gestion.png'

const Projects = () => {
    return (
        <div className='container'>
            <h1 className='title'>Projects</h1>
            <section className='sectionProjects'>
            <div className='projectImage'>
                    <img 
                        src={gestion} 
                        alt=""
                        className='' />
                </div>
                <div className='titleDescription'>
                    <h3 className='titleProject'>Comprehensive Inventory & Business Management Software for Construction Suppliers</h3>
                    <p className='description desPro'>Software designed for suppliers in the construction industry — including raw materials, tools, machinery, hardware stores, and more.
This platform enables comprehensive management of business units, from initial entry to final sale.

The system provides continuous monitoring of inventory levels and product demand, ensuring efficient use of supplier assets and reliable stock availability across all items.</p>
                    <a href="https://github.com/BucketBC1/software-de-gesti-n.git" className='linkRepo'>
                        <box-icon type='logo' 
                            name='github'
                            size='30px'
                            color='#fff'>
                        </box-icon>
                        Repository
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Projects;