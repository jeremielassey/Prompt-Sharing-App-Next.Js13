import Feed from "components/Feed"


const Home = () => {
  return (
    <section className = "w-full flex-center flex-col"> 
      <h1 className= "head_text text-center" >
        Discover & Share
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">
          AI-Powered Prompts
        </span>
      </h1>
      <p>
        this is an open source website for sharing prompt
      </p>
      
    </section>
  )
}

export default Home