import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const [username, setUsername] = useState("");
    const [showWarning, setShowWarning] = useState(false);
    const navigate = useNavigate();

    const submitName = () => {
        if (username.trim().length === 0) {
            setShowWarning(true);
            return;
        }
        navigate(`/meeting/${username}`);
    };

    const handleInputChange = (e) => {
        setUsername(e.target.value);
        if (e.target.value.trim().length > 0) {
            setShowWarning(false); // Hide the warning message if the input is not empty
        }
    };

    return (

        <div className="form-container">
            <h2 className="title">
                <i> Welcome to <span style={{ color: "lime" }}>Face<big style={{ color: "red" }}>2</big>Face</span> !!</i>
            </h2>
            <input
                className="input-field"
                value={username}
                onChange={handleInputChange}
                onKeyDown={(e) => e.key === 'Enter' && submitName()}
                type="text"
                placeholder='What should I call you?'
            />
            <button
                className="submit-button"
                onClick={submitName}
            >
                create room
            </button>

            {showWarning && <h4 id='warning'>Please enter your name!</h4>}
        </div>

    );
}

export default HomePage;
