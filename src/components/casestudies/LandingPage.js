import { useState, useEffect } from 'react';
import CaseStudyOverview from './CaseStudyOverview';
import InjectHtml from "../home/InjectHtml";
import useOukapi from '../../helpers/dataFetch';
import PageTitle from '../genericcontentpage/PageTitle';
import BackButton from '../genericcontentpage/BackButton';
import NotFound from '../errorpage';
const BASE_URL = process.env.REACT_APP_BASE_URL;
const CASE_STUDIES_LANDING_PAGE = process.env.REACT_APP_CASE_STUDIES_LANDING_PAGE;
const CASE_STUDIES = process.env.REACT_APP_CASE_STUDIES;

const LandingPage = ({ parent }) => {
	const [title, setTitle] = useState("");
	const [introParagraph, setIntroParagraph] = useState("");

	const [{ data: landingData, isError: isLandingError }, isFeatchingLanding] = useOukapi(new URL(CASE_STUDIES_LANDING_PAGE, BASE_URL).href);
	const [{ data: casesData, isError: isCasesError}, isFeatchingCases] = useOukapi(new URL(CASE_STUDIES, BASE_URL).href);

	useEffect(() => {
		if (landingData.hasOwnProperty("title") && landingData.hasOwnProperty("introParagraph")) {
			setTitle(landingData.title);
			setIntroParagraph(landingData.introParagraph)
		}
	}, [landingData]);

	if (isFeatchingLanding || isFeatchingCases)
		return null;

	if (isLandingError || isCasesError || !landingData || !casesData)
		return <NotFound />;

	const caseStudyOverviewElements = casesData.map(caseStudy => {
		return <CaseStudyOverview {...caseStudy} key={caseStudy.id} />
	});

	return <div className="page-container">
		<main id="content" className="main-container" role="main">
			<PageTitle title={title} />
			<BackButton parent={parent} />
			<h1>{title}</h1>
			<InjectHtml paragraphText={introParagraph} />
			<ul className="card-link-container listnostyle">
				{caseStudyOverviewElements}
			</ul>
		</main>
	</div>;
}

export default LandingPage;