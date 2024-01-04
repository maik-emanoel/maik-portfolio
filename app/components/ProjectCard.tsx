import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function ProjectCard({ repoInfos }: any) {
  const formattedTitle = repoInfos.name.replace(/-/g, " ");
  const topicsWithoutMk = repoInfos.topics.filter(
    (topic: string) => topic != "mk"
  );

  return (
    <div className="flex justify-between items-center gap-8 max-h-[440px] h-screen w-full pb-20">
      <div className="flex flex-col flex-1 max-w-[400px] h-full">
        <h3
          className="text-4xl leading-tight font-medium overflow-hidden text-ellipsis whitespace-nowrap first-letter:uppercase"
          title={repoInfos.name}
        >
          {formattedTitle}
        </h3>

        <div className="">
          <p className="text-slate-400 my-6">{repoInfos.description}</p>

          <h4 className="mb-3 text-slate-400">Technologies & libs:</h4>

          {topicsWithoutMk.map((topic: string) => {
            return (
              <span
                key={topic}
                className="bg-blue-900 py-1 px-3 rounded-full text-sm font-medium inline-block mr-1 mb-2"
              >
                {topic}
              </span>
            );
          })}
        </div>

        <div className="mt-auto flex flex-col gap-1 pb-4 w-fit">
          <a
            href={repoInfos.html_url}
            target="_blank"
            className="flex items-center gap-1 group"
          >
            View repository
            <CaretRight weight="bold" className="mt-[2px] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={repoInfos.homepage}
            target="_blank"
            className="flex items-center gap-1 text-blue-400 group"
          >
            Visit the app
            <CaretRight weight="bold" className="mt-[2px] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <div className="flex-2 max-w-[470px]">
        <Image
          key={repoInfos.name}
          src={repoInfos.imageUrl}
          alt="Preview"
          width={2880}
          height={1800}
          className="aspect-video rounded-lg shadow-md"
          unoptimized
        />
      </div>
    </div>
  );
}