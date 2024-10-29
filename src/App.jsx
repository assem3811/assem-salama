import React from 'react'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Bio } from './components/Bio'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { WorkExperience } from './components/WorkExperience'
import Education from './components/Education'
import { ContactForm } from './components/ContactForm'

export const App = () => {
  return (
    <div className='relative h-full overflow-y-auto antialiased'>
        <div className='fixed inset-0 bg-fixed bg-cover bg-center bg-img'></div>
        <div className=' relative z-10 flex flex-col items-center p-4 space-y-8
        container mx-auto'>
            <Hero />
            <Navbar />
            <Services />
            <Bio />
            <Skills />
            <WorkExperience />
            <Education />
            <ContactForm />
        </div>
    </div>
  )
}

export default App