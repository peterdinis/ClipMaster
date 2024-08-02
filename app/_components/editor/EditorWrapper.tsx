import { FC } from 'react';
import EditorContent from './EditorContent';

const EditorWrapper: FC = () => {
    return <div className='flex h-screen w-screen flex-col relative isolation-auto mx-auto min-h-screen max-w-screen-xl overflow-hidden pt-24'>
        <EditorContent />
    </div>;
};

export default EditorWrapper;
