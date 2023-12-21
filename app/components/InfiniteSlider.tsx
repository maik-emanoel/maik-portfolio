import {
  GithubLogo,
  TwitchLogo,
  TwitterLogo,
  CodaLogo,
  MetaLogo,
  LinuxLogo,
  AppleLogo,
  FigmaLogo,
  GoogleLogo,
  NotionLogo
} from "@phosphor-icons/react/dist/ssr";

const logos = [
  <GithubLogo size={32} key={1} />,
  <TwitchLogo size={32} key={2} />,
  <TwitterLogo size={32} key={3} />,
  <CodaLogo size={32} key={4} />,
  <MetaLogo size={32} key={5} />,
  <LinuxLogo size={32} key={6} />,
  <AppleLogo size={32} key={7} />,
  <FigmaLogo size={32} key={8} />,
  <GoogleLogo size={32} key={9} />,
  <NotionLogo size={32} key={10} />, 
];

const before = 'before:absolute before:top-0 before:left-0 before:w-[30%] before:h-full before:bg-[linear-gradient(to_left,_transparent,_#0f172a)] before:z-10'

const after = 'after:absolute after:top-0 after:right-0 after:w-[30%] after:h-full after:bg-[linear-gradient(to_right,_transparent,_#0f172a)] after:z-10'

export default function InfiniteSlider() {
  return (
    <div className={`overflow-hidden py-2 whitespace-nowrap text-slate-300 group relative ${before} ${after}`}>
      <div className="animate-slide inline-block group-hover:animation-paused">
        {logos.map((logo, index) => {
          return <div key={index} className="inline-block mx-10">{logo}</div>;
        })}
      </div>
      <div className="animate-slide inline-block group-hover:animation-paused">
        {logos.map((logo, index) => {
          return <div key={index} className="inline-block mx-10">{logo}</div>;
        })}
      </div>
    </div>
  );
};
