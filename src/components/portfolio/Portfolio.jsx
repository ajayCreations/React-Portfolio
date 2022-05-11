import React from 'react'
import './portfolio.css'
import IMG from '../../assets/back2.png'


const portfolioData=[
  {id:1,img:IMG,_h3:'This is a portfolio item title',_githubLink:'https://github.com',_projectLink:'https://anaisha.co'},
  {id:2,img:IMG,_h3:'This is a portfolio item title',_githubLink:'https://github.com',_projectLink:'https://anaisha.co'},
  {id:3,img:IMG,_h3:'This is a portfolio item title',_githubLink:'https://github.com',_projectLink:'https://anaisha.co'},
  {id:4,img:IMG,_h3:'This is a portfolio item title',_githubLink:'https://github.com',_projectLink:'https://anaisha.co'},
  {id:5,img:IMG,_h3:'This is a portfolio item title',_githubLink:'https://github.com',_projectLink:'https://anaisha.co'},
  {id:6,img:IMG,_h3:'This is a portfolio item title',_githubLink:'https://github.com',_projectLink:'https://anaisha.co'},
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       
       {
        
         portfolioData.map((item)=>{
           return(

             <article key={item.id} className="portfolio__item">
               
                <div className="portfolio__item-image">
                   <img src={item.img} alt="img" />
                </div>
               <h3>{item._h3}</h3>
                <div className="portfolio__item-cta">
                  <a href={item._githubLink} className='btn'>Github</a>
                 <a href={item._projectLink} className='btn btn-primary' target='_blank'>Live Demo</a>
                 </div>
             </article>
           )

             })
            }
        
      </div>
    </section>
  )
}

export default Portfolio