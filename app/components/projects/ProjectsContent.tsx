'use client'

import { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { fetchGithubRepos, fetchReadmeImage } from '@/app/services/api/githubApi'

export default function ProjectsContent({ t }: any) {
  const [repos, setRepos] = useState<any[]>([])

  async function getGithubRepos() {
    const data = await fetchGithubRepos()

    const reposFiltered = data.filter((repo: any) => repo.topics.includes('mk'))

    const reposWithImage = await Promise.all(
      reposFiltered.map(async (repoFiltered: any) => {
        try {
          return await fetchReadmeImage(repoFiltered)
        } catch (error) {
          console.log('Failed to fetch data', error)
        }
      })
    )

    setRepos(reposWithImage)
  }

  useEffect(() => {
    getGithubRepos()
  }, [])

  return (
    <div className="w-full mt-11 md:mt-4">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletActiveClass: 'bullet-active',
          bulletClass: 'bullet',
        }}
        modules={[Pagination]}
        className="scroll-reveal"
      >
        {repos.map((repo: any) => {
          return (
            <SwiperSlide key={repo.name}>
              <ProjectCard repoInfos={repo} t={t} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
