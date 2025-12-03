import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const item = state.item;
  const navigate = useNavigate();
  return (
    <>
      <div className="w-1/2 mx-auto">
        <div className="flex">
          <button onClick={() => navigate('../')}>&lt;Back</button>
          <h2 className="absolute left-1/2 -translate-x-1/2">{`${item.title} by ${item.username}`}</h2>
        </div>
        <p>{item.description}</p>

        <div className="flex justify-center">
          {item.media_type.startsWith('video') ? (
            <video claclassNamess="big-media" src={item.filename}></video>
          ) : item.media_type.startsWith('image') ? (
            <img
              className="big-media w-full"
              src={item.filename}
              alt={item.title}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Single;
