
import { Nav, StreamPlayer, Tabs} from './componnets'
import './styles/index.css'

function App() {

  return (
    <div >
      <Nav />
      <div className='grid lg:grid-cols-2 sm:grid-row 2'>
        <div>
          <StreamPlayer />
        </div>
        <div>
          <Tabs />
        </div>
      </div>
    </div>
  )
}

export default App
