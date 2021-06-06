import Navbar from '../components/navbar/Navbar';
import './Main.css';
import IklanAll from '../components/api/IklanAll';
import VerticalBar from '../components/charts/VerticalBar';

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className='main'>
        <IklanAll />
      </div>
    </div>
  );
};

export default Main;
