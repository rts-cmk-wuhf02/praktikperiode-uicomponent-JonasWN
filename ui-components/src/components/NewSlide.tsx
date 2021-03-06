import React, { useState, useEffect } from 'react'
import { containerVariants } from '../styles/layoutStyles'
import StyledNewSlide from '../styles/newSlideStyles'
//@ts-ignore
import nyTimes from '../assets/News_Logo.svg'
import { Heart } from '@styled-icons/boxicons-solid/Heart'

const interval: number = 5000
const resetTimer: number = 0
let slideIndex: number = 0

const NewSlide = () => {
  const [data, setData] = useState(template[slideIndex])

  const updateSlide = (index: any) => {
    data.title !== template[template.length - 1].title
      ? slideIndex++
      : (slideIndex = resetTimer)
    setData(template[slideIndex])

    if (index || index === 0) {
      slideIndex = index
      setData(template[slideIndex])
    }
  }

  useEffect(() => {
    const timeInterval = setInterval(updateSlide, interval)
    return () => clearInterval(timeInterval)
  }, [slideIndex])

  return (
    <StyledNewSlide
      //@ts-ignore
      currentSlide={slideIndex}
      cover={data.cover}
      variants={containerVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <div className="hero-background" />
      <header>
        <img src={nyTimes} alt="newslide-source-logo" />
        <h3>{data.source}</h3>
        <Heart />
      </header>
      <section>
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <ul>
          {template.map((slide: object, index: number) => (
            <li key={index} onClick={() => updateSlide(index)}></li>
          ))}
        </ul>
      </section>
    </StyledNewSlide>
  )
}

const template = [
  {
    source: 'The New York Times',
    title: 'title-1 loasdfo akosdfaodfkadf',
    description: 'description-1 foalfaosldf',
    cover:
      'https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
  {
    source: 'The New York Times',
    title: 'title-2 loasdfo akosdfaodfkadf',
    description: 'description-2 foalfaosldf',
    cover:
      'https://images.unsplash.com/photo-1496284045406-d3e0b918d7ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80',
  },
  {
    source: 'The New York Times',
    title: 'title-3 loasdfo akosdfaodfkadf',
    description: 'description-3 foalfaosldf',
    cover:
      'https://images.unsplash.com/photo-1534214526114-0ea4d47b04f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1950&q=80',
  },
]

export default NewSlide
