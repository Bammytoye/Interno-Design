import React from 'react'
import HomeHero from './HomeHero'
import SecondSlide from './SecondSlide'
import Think from './Think'
import Project from './Project'
import Blogs from './Blogs'

function HomePage() {
    return (
        <div>
            <HomeHero />
            <SecondSlide />
            <Think />
            <Project />
            <Blogs />
        </div>
    )
}

export default HomePage