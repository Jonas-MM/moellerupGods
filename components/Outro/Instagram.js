import React from 'react'
import InstagramEmbed from 'react-instagram-embed';
import Instagramcss from './Instagramcss.css'

const Instagram = () => {
    return (
        <InstagramEmbed className="w-75"
            url='https://www.instagram.com/p/BUZDt1Ilwc8/?utm_source=ig_embed'
            maxWidth={80}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => { }}
            onSuccess={() => { }}
            onAfterRender={() => { }}
            onFailure={() => { }}
        />

    );
}

export default Instagram;
