import homePage from './homePage';
import PortfolioPage from './portfolioPage';

const RenderPage = (props) => {

	const { page } = props;
	const renderPage = () => {
		if (page === 'home') {
			return <div>{homePage}</div>
		} else {
			return <div><PortfolioPage page={page}/></div>
		}
	}
  return renderPage();
};

export default RenderPage;