import Navbar from '../components/navbar/Navbar';
import './Main.css';
import IklanAll from '../components/api/IklanAll';

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className='main'>
        <h1>All Ads</h1>
        <IklanAll />
      </div>
    </div>
  );
};

export default Main;
