import React from 'react';
import {fetchData} from '../utils/fetchData';

const useMedia = () => {
  const [mediaArray, setMediaArray] = React.useState([]);

  async function getMedia() {
    try {
      const temp = await fetchData(import.meta.env.VITE_MEDIA_API + '/media');

      Promise.all(
        temp.map(async (item) => {
          const result = await fetchData(
            `${import.meta.env.VITE_AUTH_API}/users/${item.user_id}`,
          );
          return {...item, username: result.username};
        }),
      ).then((newArray) => {
        setMediaArray(newArray);
      });
    } catch (error) {
      console.log('Error:', error);
    }
  }

  React.useEffect(() => {
    getMedia();
  }, []);

  return {mediaArray};
};

export {useMedia};
