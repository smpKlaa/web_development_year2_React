import React, {useState} from 'react';
import {useNavigate} from 'react-router';
import useFile from '../hooks/useFile';
import useForm from '../hooks/formHooks';

const Upload = () => {
  const initValues = {
    title: 'doom gun',
    description: 'low res image of doom gun',
  };
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const {postFile, postMedia} = useFile();

  const handleFileChange = (evt) => {
    if (evt.target.files) {
      // console.log(evt.target.files[0]);
      // set the file to state
      setFile(evt.target.files[0]);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doUpload,
    initValues,
  );

  async function doUpload() {
    console.log('uploading media');
    try {
      const token = localStorage.getItem('token');
      // call postFile function
      const fileResponse = await postFile(file, token);
      console.log('postfile response', fileResponse);
      // call postMedia function
      const mediaResponse = await postMedia(fileResponse, inputs, token);
      console.log('postmedia response', mediaResponse);
      // redirect to Home
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            id="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="file">File</label>
          <input
            name="file"
            type="file"
            id="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
          />
        </div>
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : 'https://placehold.co/200?text=Choose+image'
          }
          alt="preview"
          width="200"
        />
        <button
          type="submit"
          disabled={file && inputs.title.length > 3 ? false : true}
        >
          Upload
        </button>
      </form>
    </>
  );
};

export default Upload;
