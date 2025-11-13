import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const item = state.item;
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div class="single-div">
          <button onClick={() => navigate(-1)}>&lt;Back</button>
          <h2>{item.title}</h2>
        </div>
        <p>{item.description}</p>

        <div>
          {item.media_type.startsWith('video') ? (
            <video class="big-media" src={item.filename}></video>
          ) : item.media_type.startsWith('image') ? (
            <img class="big-media" src={item.filename} alt={item.title} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Single;
