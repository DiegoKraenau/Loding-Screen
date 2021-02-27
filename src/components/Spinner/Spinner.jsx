import "./_spinner.scss";

const Spinner = () => {
    return (  
        <div className="overlay center">
            <div className="spinner">
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>
        </div>
    );
}
 
export default Spinner;
