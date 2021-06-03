import { useEffect, useState } from 'react';
import axios from 'axios';

const IklanAll = () => {
  const [iklans, setIklans] = useState([]);

  const fetchIklanAll = async () => {
    try {
      const response = await axios.get(
        'https://adwebservice.herokuapp.com/get-all-ad',
        {
          headers: {
            'adweb-token': localStorage.getItem('token'),
          },
        }
      );
      const data = response.data.data;
      setIklans(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchIklanAll();
  }, []);

  return (
    <div>
      {iklans.map((iklan) => (
        <div key={iklan._id}>
          <h3>Id: {iklan.id_iklan}</h3>
          <h5>category: {iklan.category}</h5>
          <p>Views: {iklan.views}</p>
          <p>Desc: {iklan.description}</p>
        </div>
      ))}
    </div>
  );
};

export default IklanAll;
