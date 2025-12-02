import {Link} from 'react-router';

const MediaRow = (props) => {
  const {item} = props;

  return (
    <>
      <tr className="max-h-34 *:px-2!">
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
          <div className="max-h-34">{item.title}</div>
        </td>
        <td>
          <div className="max-h-34">{item.username}</div>
        </td>
        <td>
          <div className="overflow-clip max-h-34">{item.description}</div>
        </td>
        <td>
          <div className="max-h-34">
            {new Date(item.created_at).toLocaleString('fi-FI')}
          </div>
        </td>
        <td>
          <div className="max-h-34">{item.filesize}</div>
        </td>
        <td>
          <div className="max-h-34">{item.media_type}</div>
        </td>
        <td>
          <div className="max-h-34">
            <Link
              className="no-underline! px-3! py-2! border-2 border-transparent hover:border-fuchsia-300 hover:rounded-xl! hover:no-underline!"
              to="/single"
              state={{item: item}}
            >
              Select
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MediaRow;
