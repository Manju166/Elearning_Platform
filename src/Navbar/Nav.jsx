import React from 'react'
import './Nav.scss'
import { CiSearch } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import {Link} from 'react-router-dom'
const Nav = () => {
    const link=[
        {
            name:"Home",
            link:"Home"
        },
        {
            name:"Our Course",
            link:"Our-Course"
        },
        {
            name:"Pages",
            link:"Pages"
        },
        {
            name:"Mentors",
            link:"Mentors"
        },
        {
            name:"Resources",
            link:"Resources"
        },
    ]
  return (
    <>
    <div className='navbar_wrapper'>
      <div className='navbar'>
        <div className='nav1'>
            <h3>DEVSKILL<b>.</b></h3>
        </div>
        <div className='nav2'>
            {link.map(({name,link},index)=>(
                <Link key={index} className='link' to={link}>{name}</Link>
            ))}
        </div>
        <div className='nav3'>
                    
               <span><CiSearch/></span>
                <span><TbWorld/></span>
                <button className='loginbtn'>Login</button>
                <button className='joinbtn'>Join Us</button>
        </div>
      </div>
      <section className='sec1'>
        <div className='content'>
                <div className='heading'>
                    <h1>Smart Learning Deeper <br/>& More <span id='spn'>Amazing</span></h1>
                </div>
                <div className='logo'>
                <img src="eimage.jpg" alt="" />
                </div>
        </div>

        <div className='container'>
            <div className='image'>
                <img src='image1.jpg' height={300}/>
            </div>
            <div className='details'>
                <h5>E Learning Platform</h5>
                <p>E-learning platforms have revolutionized education by providing a flexible and accessible means of learning in the digital age. These platforms leverage technology to offer a diverse range of courses, resources, and interactive tools that enable learners to acquire knowledge and skills from the comfort of their own homes. With features such as video lectures, quizzes, and discussion forums.</p>
                <button className='lastbtn'>Join Today ↗</button>
            </div>
            
        </div>
      </section>
      </div>
    </>
  )
}

export default Nav
