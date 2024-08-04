import { FC } from 'react';

const EditorVideo: FC = () => {
    return (
        <div className='flex justify-center align-top'>
            <video width='320' height='240' controls preload='none'>
                <source src={'/videos/example.mp4'} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default EditorVideo;
