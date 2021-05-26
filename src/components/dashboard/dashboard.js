import dummyData from './dummyData';
import Table from './table';

const Dashboard = () => {
    return <div className="page-container flex-container">
        <main id="content" className="main-container">
            <article className="flex-right">
                <h1>Open Referral UK compliant data feed dashboard</h1>
                <p class="mb-1rem">
                    The dashboard is intended to list all datasets and APIs published as part of the Open Referral UK
                </p>
            </article>
            
            <Table data={dummyData} />
        </main>
    </div>;
};

export default Dashboard;