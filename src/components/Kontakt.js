import "../style/kontakt.css"

export const Kontakt = () => {
  return (
    <>
      <div className="kontaktcontainer">
        <div className="kontakformular">
          <h1>Kontaktiere uns</h1>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Absenden" />
          </form>

        </div>

        <div className="kontaktdaten">
          <div>
            <h5>Rufen Sie uns an</h5>

            <p> Tel.: 030 / 123456</p>
          </div>
          <div>
            <h5>Lage</h5>

            <p>
              Grupo 5
              <br />
              Citystreet 5
              <br />
              12345 Berlin
              <br />
              Germany
            </p>
          </div>

        </div>
        <div className="Map">
          <img src="https://www2.tuhh.de/zll/wp-content/uploads/placeholder.png"></img>
        </div>


      </div>
    </>
  );
}

