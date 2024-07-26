import { FileOutputIcon, FilePenIcon, ImportIcon, VideoIcon } from "lucide-react";
import { FC } from "react";

const HeroServices: FC = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Video Editing Services</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From capture to export, we've got you covered. Our suite of video editing tools and services will help you
                create professional-quality videos with ease.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background shadow-sm">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <VideoIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Video Capture</h3>
                <p className="text-muted-foreground text-center">
                  Capture high-quality video footage with our advanced recording tools.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background shadow-sm">
                <div className="bg-secondary rounded-md p-3 flex items-center justify-center">
                  <FilePenIcon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Video Editing</h3>
                <p className="text-muted-foreground text-center">
                  Effortlessly edit your videos with our intuitive editing suite.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background shadow-sm">
                <div className="bg-muted rounded-md p-3 flex items-center justify-center">
                  <FileOutputIcon className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Video Rendering</h3>
                <p className="text-muted-foreground text-center">
                  Render your videos with high-quality output and fast processing.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background shadow-sm">
                <div className="bg-card rounded-md p-3 flex items-center justify-center">
                  <ImportIcon className="w-6 h-6 text-card-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Video Exporting</h3>
                <p className="text-muted-foreground text-center">
                  Export your videos in a variety of formats for easy sharing and distribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default HeroServices;