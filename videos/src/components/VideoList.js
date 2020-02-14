// import React from 'react';

// const VideoList = (props) => {
//     //props.videos
//     return <div>{props.videos.length}</div>;
// }
// export default VideoList;
























// //Rendering a List of Videos
// import React from 'react';
// import VideoItem from './VideoItem';

// const VideoList = ({ videos }) => {
//     const renderedList = videos.map((video) => {
//         return <VideoItem />;
//     });
//     //props.videos
//     return <div>{renderedList}</div>;
// }
// export default VideoList;




























// //Rendering Video Thumbnails
// import React from 'react';
// import VideoItem from './VideoItem';

// const VideoList = ({ videos }) => {
//     const renderedList = videos.map((video) => {
//         return <VideoItem video={video} />;
//     });
//     //props.videos
//     return <div>{renderedList}</div>;
// }
// export default VideoList;


























// //Styling a List
// import React from 'react';
// import VideoItem from './VideoItem';

// const VideoList = ({ videos }) => {
//     const renderedList = videos.map((video) => {
//         return <VideoItem video={video} />;
//     });
//     //props.videos
//     return <div className="ui relaxed divided list">{renderedList}</div>;
// }
// export default VideoList;































//Deeply Nested Callbacks
import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
    });
    //props.videos
    return <div className="ui relaxed divided list">{renderedList}</div>;
}
export default VideoList;