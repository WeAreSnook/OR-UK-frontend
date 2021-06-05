const mockData = [
    {
        "url": "https://api.porism.com/ServiceDirectoryServiceCQC",
        "label": "Care Quality Commission",
        "summary": "Open source transformation run daily from Care Quality Commission locations feed from https://api.cqc.org.uk/public/v1/locations/ into an instance of the open source directory",
        "organisationLabel": "Care Quality Commission",
        "organisationUrl": "https://www.cqc.org.uk",
        "developerLabel": "CQC/ORUK",
        "developerUrl": "https://github.com/OpenReferralUK/human-services/tree/master/Utilities/CQCImport",
        "servicePathOverride": "",
        "lastCheck": "2021-06-05T07:14:22",
        "checkIsRunning": false,
        "timeTaken": 45607,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "022beaa2-2836-4dc5-9a82-26b1cfc8f757",
        "serviceExampleMessage": "",
        "isSearchEnabled": true,
        "searchEnabledMessage": ""
    },
    {
        "url": "https://api.porism.com/ServiceDirectoryServiceOpenActiveAggregated",
        "label": "OpenActive",
        "summary": "Open source transformation run daily from OpenActive sports and wellbeing activities feeds aggregated by Imin - https://www.imin.co into an instance of the open source directory",
        "organisationLabel": "OpenActive",
        "organisationUrl": "https://www.openactive.io/",
        "developerLabel": "Imin / ORUK",
        "developerUrl": "https://github.com/OpenReferralUK/human-services/tree/master/Utilities/OpenActiveFireHose",
        "servicePathOverride": "",
        "lastCheck": "2021-06-04T15:01:27",
        "checkIsRunning": false,
        "timeTaken": 7140,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "01a6076f-74b7-45e8-9223-d04454bbd2f3",
        "serviceExampleMessage": "Postcode Search failed. When tested using /services?proximity=100&postcode=AB22+8RR",
        "isSearchEnabled": false,
        "searchEnabledMessage": "Postcode Search failed. When tested using /services?proximity=100&postcode=AB22+8RR"
    },
    {
        "url": "https://blackburn.openplace.directory/o/ServiceDirectoryService/v2",
        "label": "Blackburn with Darwen Council",
        "summary": "Live Blackburn with Darwen Council services data",
        "organisationLabel": "Blackburn with Darwen Council",
        "organisationUrl": "http://www.blackburn.gov.uk",
        "developerLabel": "Placecube",
        "developerUrl": "https://www.placecube.com/platforms/open-place-directory/",
        "servicePathOverride": "",
        "lastCheck": "2021-06-05T07:17:20",
        "checkIsRunning": false,
        "timeTaken": 1644,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "6ad06d3d-d67c-5f45-d2ec-3e658fa9ef6c",
        "serviceExampleMessage": "",
        "isSearchEnabled": true,
        "searchEnabledMessage": ""
    },
    {
        "url": "https://bristol.openplace.directory/o/ServiceDirectoryService/v2",
        "label": "Bristol Council",
        "summary": "Services for Brisol and South Gloucestershire service finders",
        "organisationLabel": "Bristol Council",
        "organisationUrl": "https://www.bristol.gov.uk",
        "developerLabel": "Placecube",
        "developerUrl": "https://www.placecube.com/platforms/open-place-directory/",
        "servicePathOverride": "",
        "lastCheck": "2021-06-04T15:01:35",
        "checkIsRunning": false,
        "timeTaken": 4078,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "bd56fac4-0fad-4c86-bd1f-383e03b432d7",
        "serviceExampleMessage": "",
        "isSearchEnabled": true,
        "searchEnabledMessage": ""
    },
    {
        "url": "https://elmbridge.openplace.directory/o/ServiceDirectoryService/v2",
        "label": "Elmbridge Council",
        "summary": "Live Elmbridge Council services data",
        "organisationLabel": "Elmbridge Council",
        "organisationUrl": "https://www.elmbridge.gov.uk",
        "developerLabel": "Placecube",
        "developerUrl": "https://www.placecube.com/platforms/open-place-directory/",
        "servicePathOverride": "",
        "lastCheck": "2021-06-04T15:01:39",
        "checkIsRunning": false,
        "timeTaken": 216,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "5fc40cfd-8b3f-4741-9115-0274958825df",
        "serviceExampleMessage": "",
        "isSearchEnabled": true,
        "searchEnabledMessage": ""
    },
    {
        "url": "https://fyldecoast.openplace.directory/o/ServiceDirectoryService/v2",
        "label": "Fylde Coast Council",
        "summary": "Live Fylde Coast Council services data",
        "organisationLabel": "Fylde Coast Council",
        "organisationUrl": "https://new.fylde.gov.uk",
        "developerLabel": "Placecube",
        "developerUrl": "https://www.placecube.com/platforms/open-place-directory/",
        "servicePathOverride": "",
        "lastCheck": "2021-06-04T15:01:39",
        "checkIsRunning": false,
        "timeTaken": 336,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "462ebfda-f516-5034-2920-30e77e0bb3b0",
        "serviceExampleMessage": "",
        "isSearchEnabled": true,
        "searchEnabledMessage": ""
    },
    {
        "url": "https://lgaapi.connecttosupport.org",
        "label": "Hull City Council",
        "summary": "Live Hull City Council services data",
        "organisationLabel": "Hull City Council",
        "organisationUrl": "http://www.hull.gov.uk",
        "developerLabel": "Public Partnerships",
        "developerUrl": "https://www.publicconsultinggroup.co.uk/",
        "servicePathOverride": "",
        "lastCheck": "2021-06-04T15:01:40",
        "checkIsRunning": false,
        "timeTaken": 1906,
        "isUp": true,
        "isServicesValid": false,
        "servicesMessage": "Missing search method paginaton metadata at the begining of the JSON payload. Required: \"totalElements\"; \"totalPages\". It is case sensitive, and should be in the following format: {\"totalElements\":nn,\"totalPages\":nn,\"number\":nn,\"size\":nn,\"first\":bb,\"last\":bb\",\"content\":[{},{}]...",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "35936087-82b2-4df0-8d76-ab5200fedcc9",
        "serviceExampleMessage": "Text Test failed. When tested using /services?text=Costello+Stadium.",
        "isSearchEnabled": false,
        "searchEnabledMessage": "Text Test failed. When tested using /services?text=Costello+Stadium."
    },
    {
        "url": "https://northlincs.openplace.directory/o/ServiceDirectoryService/v2",
        "label": "North Lincolnshire Council",
        "summary": "New so no useful data yet",
        "organisationLabel": "North Lincolnshire Council",
        "organisationUrl": "https://www.northlincs.gov.uk/",
        "developerLabel": "Placecube",
        "developerUrl": "https://www.placecube.com/platforms/open-place-directory/",
        "servicePathOverride": "",
        "lastCheck": "2021-06-04T15:01:42",
        "checkIsRunning": false,
        "timeTaken": 133,
        "isUp": true,
        "isServicesValid": false,
        "servicesMessage": "A paginatable service method is not present. Of the form /services?page={nn}",
        "isServiceExampleValid": false,
        "serviceExampleIdentifier": "",
        "serviceExampleMessage": "",
        "isSearchEnabled": false,
        "searchEnabledMessage": ""
    },
    {
        "url": "https://outpost-api-service.herokuapp.com/api/v1",
        "label": "Buckinghamshire Council",
        "summary": "User Acceptance Testing feed",
        "organisationLabel": "Buckinghamshire Council",
        "organisationUrl": "https://www.buckinghamshire.gov.uk/",
        "developerLabel": "FutureGov",
        "developerUrl": "https://wearefuturegov.com/",
        "servicePathOverride": "",
        "lastCheck": "2021-06-04T15:01:42",
        "checkIsRunning": false,
        "timeTaken": 21108,
        "isUp": true,
        "isServicesValid": false,
        "servicesMessage": "Missing search method paginaton metadata at the begining of the JSON payload. Required: \"number\"; \"first\"; \"last\". It is case sensitive, and should be in the following format: {\"totalElements\":nn,\"totalPages\":nn,\"number\":nn,\"size\":nn,\"first\":bb,\"last\":bb\",\"content\":[{},{}]...",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "1363",
        "serviceExampleMessage": "",
        "isSearchEnabled": true,
        "searchEnabledMessage": ""
    }
];

mockData.sort((a, b) => (a.organisationLabel || '').localeCompare(b.organisationLabel || ''));

export default mockData;