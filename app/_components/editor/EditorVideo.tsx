import { FC } from 'react';

const EditorVideo: FC = () => {
    return (
        <div className='flex justify-center align-top'>
            <video controls autoPlay>
                <iframe
                    width='420'
                    height='315'
                    src='https://www.youtube.com/embed/tgbNymZ7vqY?controls=0'
                ></iframe>
            </video>
        </div>
    );
};

export default EditorVideo;
