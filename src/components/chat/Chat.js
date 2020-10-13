import React, { useEffect, useState } from 'react';
import './Chat.css'
import ChatHeader from './chatHeader/ChatHeader';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './message/Message';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { selectChannelId, selectChannelName } from '../../features/appSlice';
import db from '../../firebase';
import firebase from 'firebase';


function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [Input, setInput] = useState("");
    const [Messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {

            db.collection('channels')
                .doc(channelId)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())));
        }
    }, [channelId])

    const sendMessage = e => {
        e.preventDefault();

        db.collection('channels')
            .doc(channelId)
            .collection('messages')
            .add({
                message: Input,
                user: user,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });

        setInput('');
    }

    return (
        <div className='chat'>
            <ChatHeader channelName={channelName} />

            <div className="chat__messages">
                {Messages.map(({ message, user, timestamp }) => (
                    <Message
                        message={message}
                        user={user}
                        timestamp={timestamp}
                    />
                ))}
            </div>

            <div className="chat__input">
                <AddCircleRoundedIcon fontSize="large" />
                <form>
                    <input
                        disabled={!channelId}
                        value={Input}
                        onChange={e => setInput(e.target.value)} placeholder={channelName ? `Message #${channelName}` : 'Message'}
                    />
                    <button
                        disabled={!channelId}
                        className="chat__inputButton"
                        type="submit"
                        onClick={sendMessage}
                    >Send Message</button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large" />
                </div>
            </div>
        </div>
    )
}

export default Chat
