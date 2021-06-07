import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import './VerticalBar.css';

const VerticalBar = ({ iklans }) => {
  console.log(iklans);
  const [view, setView] = useState(iklans.map((iklan) => iklan.views));
  const [id, setid] = useState(iklans.map((iklan) => iklan.id_iklan));
  console.log(id);

  const data = {
    labels: id,
    datasets: [
      {
        label: 'Number of Ads Viewed',
        data: view,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className='chart-container'>
        <Bar data={data} />
      </div>
    </>
  );
};

export default VerticalBar;
