import "../style/fitnessPlan.css";
import SlideShow from "./SlideShow"
function FitnessPlan() {
  return (
    <>
      <div className="fitness-div">
        <h1 className="fitness-h1">Fitness Plan</h1>
        <SlideShow/>
        <h3 className="fitness-h3"><i class="fa-solid fa-calendar-day"></i> 1 Monat</h3>
        <p className="fitness-p">Attack feet behind the couch destroy couch flop over give attitude hide when guests come over hopped</p>
        <h3 className="fitness-h3"><i class="fa-solid fa-cubes"></i> 3 Monate</h3>
        <p className="fitness-p">Attack feet behind the couch destroy couch flop over give attitude hide when guests come over hopped</p>
        <h3 className="fitness-h3"><i class="fa-regular fa-calendar-days"></i> 1 Jahr</h3>
        <p className="fitness-p">Attack feet behind the couch destroy couch flop over give attitude hide when guests come over hopped</p>
        <div className="fitness-button-div">
          <button className="fitness-button" ><a href="#">Register</a></button>
        </div>
      </div>
    </>
  );
}

export default FitnessPlan;