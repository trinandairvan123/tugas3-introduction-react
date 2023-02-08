/** Assets */
import '../../App.css';

export default function Navbar() {
    return (
        <header>
            <div className="container">
                <div className="row align-items-center">
        
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="row align-items-center navig">
                            <div className="col-md-4 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="index.html" className="aktif">Home</a></div>
                            <div className="col-md-4 col-sm-3 text-md-center text-sm-center text-lg-center"><a href="about.html">About</a></div>
                            <div className="col-md-4 col-sm-3 text-md-center text-sm-center text-lg-left"><a href="#">Experience</a></div>
                            <div className="col-md-4 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="form.html">Contanct</a></div>
                        </div>
                    </div>
                </div>
        </header>
    )
}