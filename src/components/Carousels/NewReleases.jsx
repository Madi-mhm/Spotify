import React, { useEffect, useState } from 'react';
import API_NewReleases from '../../api/API_NewReleases';
import BigCards from '../Cards/BigCards';

const NewReleasesSection = () => {
  const [newData, setNewData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await API_NewReleases();
      setNewData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      {newData.map((item) => (
          <BigCards key={item.id} name={item.name} />
        ))}
    </div>
  );
};

export default NewReleasesSection;
