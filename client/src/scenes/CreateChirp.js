import '../styles/CreateChirp.css';
import { useState } from 'react';

const CreateChirp = () => {
  const [content, setContent] = useState('')
  const [images, setImages] = useState([]);

  const handleCreateForm = async (event) => {
    event.preventDefault();
    const data = new FormData()
    data.set('content', content)
    data.set('image', images[0])
    const response = await fetch('http://localhost:4000/create-chirp', {
      method: 'POST',
      body: data
    })
  }

  return (
    <div className="create-container">
      <form className="create-form" onSubmit={handleCreateForm}>
        <div className="form-container">
          <textarea placeholder='Chirp away...' 
                    className="chirp-input"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}/>
          <input type='file' 
                 className="image-upload"
                 onChange={event => setImages(event.target.files)}/>
          <button className="create-button">Create Chirp</button>
        </div> 
      </form>
    </div>
  )
}

export default CreateChirp;