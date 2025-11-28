import {Link} from 'react-router';

const MediaRow = (props) => {
  const {item} = props;

  return (
    <>
      <tr>
        <td>
          <div>
            <img
              className="thumbnail"
              src={item.thumbnail}
              alt={item.title}
            ></img>
          </div>
        </td>
        <td>
          <div>{item.title}</div>
        </td>
        <td>
          <div>{item.username}</div>
        </td>
        <td>
          <div>{item.description}</div>
        </td>
        <td>
          <div>{new Date(item.created_at).toLocaleString('fi-FI')}</div>
        </td>
        <td>
          <div>{item.filesize}</div>
        </td>
        <td>
          <div>{item.media_type}</div>
        </td>
        <td>
          <div>
            <Link to="/single" state={{item: item}}>
              Select
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MediaRow;
