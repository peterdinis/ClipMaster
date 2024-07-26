import { FilterIcon, MoveIcon, Music2Icon, VideoIcon } from "lucide-react";
import { FC } from "react";

const AboutWrapper: FC = () => {
    return (
        <>
 <section className="md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Video Editor</h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Powerful video editing tools to help you create professional-looking videos with ease.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                <VideoIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Trim & Cut</h3>
            </div>
            <p className="text-muted-foreground">
              Easily trim and cut your videos to get the perfect length and remove unwanted footage.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                <FilterIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Filters & Effects</h3>
            </div>
            <p className="text-muted-foreground">
              Apply a wide range of filters and effects to enhance the look and feel of your videos.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                <Music2Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Audio Editing</h3>
            </div>
            <p className="text-muted-foreground">
              Easily add, adjust, and mix audio tracks to create the perfect soundtrack for your videos.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                <MoveIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Transitions</h3>
            </div>
            <p className="text-muted-foreground">
              Seamlessly transition between clips with a variety of smooth and professional-looking transitions.
            </p>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default AboutWrapper