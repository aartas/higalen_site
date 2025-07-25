// app/s/[subdomain]/layout.js
// import { notFound } from 'next/navigation';
// import subDomainServices from '@/services/subDomainService';

export default async function Layout(props) {
    // const { subdomain } = await props?.params;
    // let loader = true;

    // // 🔍 Call your API to check if the subdomain exists
    // const response = await subDomainServices.checkDomainExists({ username: subdomain });
    // console.log('response', response)
    // if (!response?.data) {
    //     notFound(); // Will render app/not-found.js
    // }

    return <>{props?.children}</>;
}
