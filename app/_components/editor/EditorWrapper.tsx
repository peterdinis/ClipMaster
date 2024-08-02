import { FC } from 'react';
import EditorContent from './EditorContent';
import EditorSidebar from './sidebar/EditorSidebar';

const EditorWrapper: FC = () => {
    return (
        <div className='pt-24 flex overflow-hidden'>
            <EditorSidebar />
            <EditorContent />
        </div>
    )
};

export default EditorWrapper;
