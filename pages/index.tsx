import Heading from './Components/Heading'
import Cards from './Components/Card'
import Service from './Components/Service'
import Cap from './Components/Cap'
import Portfolio from './Components/Portfolio'
const Home = () => {
   return (
      <>
         <Heading />
         <Cards items isRounded={true} />
         <Cap />
         <Service />
         <Portfolio />
      </>
   )
}
export default Home;