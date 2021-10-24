import Navbar from '../components/Navbar';
import Heading from '../components/Heading';
import Tutorial from '../components/Tutorial';
import Download from '../components/Download';

export default function Home() {
  return (
    <div className="h-screen w-full">
      <div className="bg-black">
        <div className="container p-12 m-auto pb-36 w-full">
          <Navbar />
          <Heading />
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="container p-12 m-auto pb-16 w-full">
          <Tutorial />
        </div>
      </div>
      <div className="bg-black">
        <div className="container p-12 m-auto pb-16 w-full">
          <Download />
        </div>
      </div>
    </div>

  )
}
