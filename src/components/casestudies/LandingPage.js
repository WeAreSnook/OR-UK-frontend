import { useState, useEffect } from 'react';
import CaseStudyOverview from './CaseStudyOverview';
import InjectHtml from "../home/InjectHtml";
import useOukapi from '../../helpers/dataFetch';
import PageTitle from '../genericcontentpage/PageTitle';
import { Link } from 'react-router-dom';
const BASE_URL = process.env.REACT_APP_BASE_URL;
const CASE_STUDIES_LANDING_PAGE = process.env.REACT_APP_CASE_STUDIES_LANDING_PAGE;
const CASE_STUDIES = process.env.REACT_APP_CASE_STUDIES;

const LandingPage = ({ parent }) => {
	const [title, setTitle] = useState("");
	const [introParagraph, setIntroParagraph] = useState("");

	let data, caseStudiesData, isError;
	[{ data }, isError] = useOukapi(new URL(CASE_STUDIES_LANDING_PAGE, BASE_URL).href);
	[caseStudiesData, isError] = useOukapi(new URL(CASE_STUDIES, BASE_URL).href);

	useEffect(() => {
		if (data.hasOwnProperty("title") && data.hasOwnProperty("introParagraph")) {
			setTitle(data.title);
			setIntroParagraph(data.introParagraph)
		}
	}, [data]);

	if (isError || !data || !caseStudiesData) return <h1>404 - content not found!</h1>;

	const caseStudyOverviewElements = caseStudiesData.data.map(caseStudy => {
		return <CaseStudyOverview {...caseStudy} key={caseStudy.id} />
	});

	return <div className="page-container">
		<main id="content" className="main-container" role="main">
			<PageTitle title={title} />
			{!!parent && <Link className='button button-tertiary button-back' to={parent.path}>{parent.title}</Link>}
			<h1>{title}</h1>
			<InjectHtml paragraphText={introParagraph} />
			<ul className="card-link-container listnostyle">
				{caseStudyOverviewElements}
			</ul>
		</main>
	</div>;
}

export default LandingPage;