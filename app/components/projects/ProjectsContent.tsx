"use client";

import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function ProjectsContent({ reposWithImage }: any) {
  return (
    <div className="mt-11 sm:mt-4">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletActiveClass: 'bullet-active',
          bulletClass: 'bullet',
        }}
        modules={[Pagination]}
      >
        {reposWithImage.map((repoWithImage: any) => {
          return (
            <SwiperSlide key={repoWithImage.name}>
              <ProjectCard repoInfos={repoWithImage} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
