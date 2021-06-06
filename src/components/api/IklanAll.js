import { useEffect, useState } from 'react';
import axios from 'axios';
import VerticalBar from '../charts/VerticalBar';
import UploadAd from '../UploadAd';

const IklanAll = () => {
  const [iklans, setIklans] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const fetchIklanAll = async () => {
    try {
      const response = await axios.get(
        'https://adweb-api.herokuapp.com/get-all-ad',
        {
          headers: {
            'adweb-token': localStorage.getItem('token'),
          },
        }
      );
      const data = response.data.data;
      setIklans(data);
      setIsSuccess(true);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchIklanAll();
  }, []);

  return (
    <div>
      {isSuccess && <VerticalBar iklans={iklans} />}
      <div
        style={{
          textAlign: 'center',
          paddingTop: '30px',
        }}
      >
        {isSuccess && <UploadAd iklans={iklans} />}
      </div>
    </div>
  );
};

export default IklanAll;
