import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import NewArrival from './Components/NewArrival/NewArrival';
import Features from './Components/Features/Features'
import ClassicSpotlight from './Components/ClassiSpotlight/ClassicSpotlight';
import ShopCard from './Components/ShopBySport/ShopBySport';
import GenYouCollection from './Components/GenYouCollection/GenYouCollection';
import Trending from './Components/Trending/Trending';
import MemberBenefits from './Components/MemberBenefits/MemberBenefits';


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Banner />
      <NewArrival />
      <Features />
      <ClassicSpotlight />
      <ShopCard />
      <GenYouCollection />
      <Trending />
      <MemberBenefits />
    </div>
  );
}

export default App;
