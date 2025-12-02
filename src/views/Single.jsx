import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const item = state.item;
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="flex justify-center">
          <button className="absolute" onClick={() => navigate('../')}>
            &lt;Back
          </button>
          <h2 className="justify-self-center">{`${item.title} by ${item.username}`}</h2>
        </div>
        <p>{item.description}</p>

        <div>
          {item.media_type.startsWith('video') ? (
            <video claclassNamess="big-media" src={item.filename}></video>
          ) : item.media_type.startsWith('image') ? (
            <img className="big-media" src={item.filename} alt={item.title} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Single;
