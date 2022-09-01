import React from 'react';
import ReactPlayer from 'react-player';
import YouTubeSubscribe from './Youtube/ytsub'
import './index.scss'
//using react player npm
const Stream = (props) => {
    const link = props.select;

    let channelid = "UCaqelmVnnZdUiA58NdRIddw";
    return (
        <>
            {
                link.length !== 0 ?
                    <ReactPlayer className="border border-5" url={link} playing={true}
                        light={true} controls={true} loop={true} width="100%"
                        height={360} /> :

                    <ReactPlayer className="border border-5" url="https://www.youtube.com/watch?v=RRPNgflA4Wg" playing={true}
                        light={true} controls={true} loop={true} width="100%"
                        height={360} />

            }
            <section className="c-share">
                <YouTubeSubscribe
                    // channelName={channelName}
                    channelid={channelid}
                    theme={"default"}
                    layout={"full"}
                    count={"default"}
                />
            </section>
        </>
    );
};

export default Stream;