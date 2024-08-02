import { FC } from "react";
import EditorToolbar from "./EditorToolbar";
import EditorVideo from "./EditorVideo";

const EditorContent: FC = () => {
    return (
        <div className="overflow-x-hidden flex-grow text-center flex-1">
          <EditorVideo />
          <div className="relative bottom-0">
              <EditorToolbar />
          </div>
        </div>
    )
}

export default EditorContent;