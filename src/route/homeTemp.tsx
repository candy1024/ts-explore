import { ArrowRightOutlined } from '@ant-design/icons';
import { Intro } from '../components';
import reactLogo from '../assets/react.svg';
import viteLogo from '../../public/vite.svg';

function Home() {
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React + TS</h1>
        
            <Intro icon={<ArrowRightOutlined />}/>
        </>
    )
}

export default Home;