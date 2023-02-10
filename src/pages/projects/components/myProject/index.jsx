import './style.scss'


function ProjectsComponent(props){

    const  item = props.item;

    return(
        <div className={item.class}>
            <a className='P-zay-shop-img' target='_blank' href={item.href} data-aos="fade-right" data-aos-duration="700" style={{backgroundImage:`url('${item.image}')`}}/>
            <div className="P-zay-shop-container" >
                <h2 className="P-zay-shop-title" data-aos="fade-left" data-aos-duration="700">{item.title}</h2>
                <p className="P-zay-shop-text" data-aos="fade-left" data-aos-duration="700">{item.description}</p>
                <div className="P-zay-shop-logos">
                    <div className="P-react-logo icon-react"/>
                    <div className="P-sass-logo icon-sass"/>
                </div>
                <p className='P-zay-shop-git'>for download code and view please tap to button</p>
                <div className='P-zay-shop-btn'><span className="P-zay-shop-btn-logo icon-github"/><p className="P-zay-shop-btn-text">  Go to git hub</p></div>
                <p className="P-zayshop-web">Tap to img for open to link WEB</p>
            </div>
        </div>
    )
}

export default ProjectsComponent