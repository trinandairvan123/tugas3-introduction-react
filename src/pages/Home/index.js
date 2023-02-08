/** Assets */
import '../../App.css';

export default function Home() {
    return (
        <div>
            <div className="container h-100">
                <div className="row align-items-center isi-home">
                    <div className="col-lg-4 col-md-12 col-sm-12  col-12">
                        <img id="foto-profil" src={require('../../assets/img/formal.png')} alt="" />
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="main-p">
                            <p className="sapaan">Hallo Perkenalkan Nama Saya Adalah </p>
                            <p className="nama">Irvan Trinanda</p>
                            <p className="hobi">Coding and Read a Book</p>
                            <p className="tombol"><a href="about.html">Click Here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}