import { FC } from 'react';
import EditorContent from './EditorContent';

const EditorWrapper: FC = () => {
    return <div className='flex mx-auto overflow-hidden pt-24'>
        <EditorContent />
    </div>;
};

export default EditorWrapper;
