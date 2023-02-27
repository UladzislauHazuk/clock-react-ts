import style from './App.module.css';
import Moment from "react-moment";

function App() {


  return (
    <div className={style['wrapper']}>

      <div className={style['circle']}></div>

        <div className={style['main-block']}>
          <h1><Moment format="HH:mm:ss" interval={1000} /></h1>
          <p><Moment format="DD.MM.YYYY" interval={1000} /></p>
        </div>
      </div>

  );
}



export default App;
