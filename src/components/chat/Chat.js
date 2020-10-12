import React from 'react';
import './Chat.css'
import ChatHeader from './chatHeader/ChatHeader';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './message/Message';

function Chat() {
    return (
        <div className='chat'>
            <ChatHeader />

            <div className="chat__messages">
                <Message />
                <Message />
                <Message />

            </div>

            <div className="chat__input">
                <AddCircleRoundedIcon fontSize="large" />
                <form>
                    <input placeholder={`Message #TESTCHANNEL`} />
                    <button className="chat__inputButton" type="submit">Send Message</button>
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
