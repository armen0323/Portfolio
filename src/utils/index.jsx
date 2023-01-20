import usePreloader from "../hook";
import './style.scss'

function Loader(){
    const {loading} = usePreloader()
    return loading && (
        <div className='P-loading-block'>
            <div className="tenor-gif-embed" data-postid="5435835" data-share-method="host" data-aspect-ratio="1.37302"
                 data-width="100%">Loading...
                 </div>
            <div className="P-load">
                <div className="P-lading-panel"/>
            </div>

            {/*<div className="lds-ripple">*/}
            {/*    <div className='P-lds-child'></div>*/}
            {/*    <div className='P-lds-child'></div>*/}
            {/*</div>*/}
        </div>
    )
 }
 export default Loader