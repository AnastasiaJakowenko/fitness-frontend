import "../style/userInfo.css"



function UserInfo() {


    return (
        <>
            <div className="user_container">
                <div className="container_gelb">

                  

                  <div className="bewegMich">

                    <img
                        className="imgUser"
                        src={require("../img/avataaars.png")}
                        alt=""
                    ></img>

                    <h3>Max Mustermann</h3>

                    <a href="#"><i className="fa-solid fa-pen-to-square"></i></a>

                   

                    </div>

                </div>
                <div className="container_white">
                    <h2>Informationen</h2>
                    <div className="textInfo">
                   <p><b>Vorname:</b> Max</p>
                    <p><b>Nachname:</b> Mustermann</p>
                    <p><b>Kurs:</b> Yoga</p>
                   <p><b>Geräte:</b> Laufband2</p>

                    <i class="fa-solid fa-house-chimney"></i>
                    </div>
                </div>
            </div>



        </>
    )
}

export default UserInfo;