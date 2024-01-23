import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((edit) => !edit);
        if (isEditing) {
            onChangeName(playerName, symbol);
        }
    }
    function handleChange(event) {
        setPlayerName(event.target.value);
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editablePlayerName = <input type="text" required placeholder={initialName} value={playerName} onChange={handleChange} />;
    }

    return (
        <li className={isActive ? 'active':undefined}>
            <span className="player">
                {/* <span className="player-name">{name}</span> */}
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => handleEditClick()}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}
