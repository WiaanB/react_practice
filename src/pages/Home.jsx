import image from '../assets/programming.jpg'
import dash from '../assets/dash.svg'
import eq from '../assets/eq.svg'
import track from '../assets/track.svg'

function Home() {
  return (
    <div className="home">
        <div className="image-banner">
            <img src={image} alt="Programming Code Background" />
        </div>
        <h1>(with rizz) It's pronounced W-iaan 😎</h1>
        <p>I am a self taught developer with a Diploma in Systems Development. Coding has been my passion since I was in highschool when I was first introduced to it. Ever since it has been a hobby and focus for me to continually grow and develop my skills as a developer to solve increasingly complex problems</p>
        <div className="color-banner">
          <div className="banner-item"><img className="svg-icon" src={eq}/>Front-End Developer with experience using Vue, React, and ES6 among others!</div>
          <div className="banner-item"><img className="svg-icon" src={dash}/>Back-End Developer who has extensive knowledge of ElasticSearch, Node.js, Networking, and Microservices.</div>
          <div className="banner-item"><img className="svg-icon" src={track}/>DevOps N00bie who has been exploring the process of automatically setting up and deploying changes as they're needed.</div>
        </div>
        <p>Please explore my page further if you want to find out more about me. I show off my projects as well as my CV. Enjoy your stay. My robot butler will be here to help 🤖</p>
    </div>
  )
}

export default Home
