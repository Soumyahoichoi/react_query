import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/home.page';
import RQSuperHerosPage from './components/RQSuperHeros.page';
import SuperHeroesPage from './components/superHeros.page';
function App() {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/super-heroes">Traditional Super Heroes</Link>
					</li>
					<li>
						<Link to="/rq-super-heroes">RQ Super Heroes</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/super-heroes" element={<SuperHeroesPage />} />

				<Route path="/rq-super-heroes" element={<RQSuperHerosPage />} />

				<Route path="/" element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
