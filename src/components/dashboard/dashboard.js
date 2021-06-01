import Items from './items';
import Table from './table';
import { useEffect, useState } from 'react';

const apiUrl = 'https://validator.openreferraluk.org/api';

const compareLabels = (a, b) => (a.label || '').localeCompare(b.label);

const sortData = (data) => {
    data.sort(compareLabels);
    return data;
};

const fetchData = async () => {
    try {
        const response = await fetch(apiUrl);
        if (response.status === 200)
            return response.json();
        return [];
    }
    catch (err) {
        console.log('error ', err);
        return [];
    }
};

const Dashboard = ({ overrideData }) => {
    const [data, setData] = useState(overrideData || []);

    useEffect(() => {
        if (!!overrideData)
            return;
        (async () => {
            const newData = sortData((await fetchData()) || []);
            setData(newData);
        })();
    }, []);

    return <div className="page-container flex-container">
        <main id="content" className="main-container">
            <article className="flex-right">
                <h1>Open Referral UK compliant data feed dashboard</h1>
                <p className="mb-1rem">
                    The dashboard is intended to list all datasets and APIs published as part of the Open Referral UK
                </p>
            </article>

            <Items data={data} />
            <Table data={data} />
        </main>
    </div>;
};

export default Dashboard;