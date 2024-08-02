import { FC } from "react";
import EditorSidebar from "./sidebar/EditorSidebar";

const EditorContent: FC = () => {
    return (
        <div className="flex flex-col h-screen">
        <div className="flex flex-1">
          <EditorSidebar />
          <div className="flex-1 p-4 overflow-y-auto">
            
            <div>
              uuuuu
            </div>
          </div>
        </div>
      </div>
    )
}

export default EditorContent;