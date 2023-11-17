import { useNavigate } from 'react-router-dom'

export default function Profile(){
    const navigate = useNavigate();
    return (
        <div className="container">
            <h1>Profile</h1>
          <button onClick={() => navigate('/')}>go back</button>
        </div>
      );
}