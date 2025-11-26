import {useState} from 'react';
import MediaRow from '../components/MediaRow';
import Single from './Single';
import {useMedia} from '../hooks/apiHooks';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const {mediaArray} = useMedia();

  return (
    <>
      {selectedItem && (
        <Single
          key={selectedItem.media_id}
          item={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      )}
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Username</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow key={`${item.media_id}-modal`} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
