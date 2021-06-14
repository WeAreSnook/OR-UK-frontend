const mockData = [
    {
        "url": "https://api.familyinfo.buckinghamshire.gov.uk/api/v1",
        "label": "Buckinghamshire Council",
        "summary": "Buckinghamshire Family Information Service",
        "organisationLabel": "Buckinghamshire Council",
        "organisationUrl": "https://www.buckinghamshire.gov.uk/",
        "developerLabel": "FutureGov",
        "developerUrl": "https://wearefuturegov.com/",
        "servicePathOverride": "",
        "lastCheck": "2021-06-14T12:16:14",
        "checkIsRunning": true,
        "timeTaken": 1991986,
        "isUp": true,
        "isServicesValid": false,
        "servicesMessage": "Missing search method paginaton metadata at the begining of the JSON payload. Required: \"number\"; \"first\"; \"last\". It is case sensitive, and should be in the following format: {\"totalElements\":nn,\"totalPages\":nn,\"number\":nn,\"size\":nn,\"first\":bb,\"last\":bb\",\"content\":[{},{}]...",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "2259",
        "serviceExampleMessage": "",
        "isSearchEnabled": true,
        "searchEnabledMessage": "[{\"TestName\":\"Text Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Age Test\",\"Success\":false,\"ErrorMessage\":\"Could not run Age Test test due to lack of data.\"},{\"TestName\":\"Postcode Search\",\"Success\":false,\"ErrorMessage\":\"Could not run Postcode Search test due to lack of data.\"},{\"TestName\":\"Taxonomy Test\",\"Success\":false,\"ErrorMessage\":\"Could not run Taxonomy Test test due to lack of data.\"},{\"TestName\":\"Time Search Test\",\"Success\":true,\"ErrorMessage\":null}]",
        "searchResults": [
            {
                "testName": "Text Test",
                "success": true,
                "errorMessage": null
            },
            {
                "testName": "Age Test",
                "success": false,
                "errorMessage": "Could not run Age Test test due to lack of data."
            },
            {
                "testName": "Postcode Search",
                "success": false,
                "errorMessage": "Could not run Postcode Search test due to lack of data."
            },
            {
                "testName": "Taxonomy Test",
                "success": false,
                "errorMessage": "Could not run Taxonomy Test test due to lack of data."
            },
            {
                "testName": "Time Search Test",
                "success": true,
                "errorMessage": null
            }
        ],
        "isCompleteSuccess": false
    },
    {
        "url": "https://api.porism.com/ServiceDirectoryServiceCQC",
        "label": "Care Quality Commission",
        "summary": "Open source transformation run daily from Care Quality Commission locations feed from https://api.cqc.org.uk/public/v1/locations/ into an instance of the open source directory",
        "organisationLabel": "Care Quality Commission",
        "organisationUrl": "https://www.cqc.org.uk",
        "developerLabel": "CQC/ORUK",
        "developerUrl": "https://github.com/OpenReferralUK/human-services/tree/master/Utilities/CQCImport",
        "servicePathOverride": "",
        "lastCheck": "2021-06-14T11:53:55",
        "checkIsRunning": false,
        "timeTaken": 182253,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "80043e73-8a4f-4680-95c8-68950041fc9a",
        "serviceExampleMessage": "",
        "isSearchEnabled": true,
        "searchEnabledMessage": "[{\"TestName\":\"Text Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Age Test\",\"Success\":false,\"ErrorMessage\":\"Could not run Age Test test due to lack of data.\"},{\"TestName\":\"Postcode Search\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Taxonomy Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Time Search Test\",\"Success\":false,\"ErrorMessage\":\"Could not run Time Search Test test due to lack of data.\"}]",
        "searchResults": [
            {
                "testName": "Text Test",
                "success": true,
                "errorMessage": null
            },
            {
                "testName": "Age Test",
                "success": false,
                "errorMessage": "Could not run Age Test test due to lack of data."
            },
            {
                "testName": "Postcode Search",
                "success": true,
                "errorMessage": null
            },
            {
                "testName": "Taxonomy Test",
                "success": true,
                "errorMessage": null
            },
            {
                "testName": "Time Search Test",
                "success": false,
                "errorMessage": "Could not run Time Search Test test due to lack of data."
            }
        ],
        "isCompleteSuccess": true
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
        "lastCheck": "2021-06-14T11:33:10",
        "checkIsRunning": false,
        "timeTaken": 13038,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "956403da-fd2b-a46d-cb6a-c17f5f6b78d0",
        "serviceExampleMessage": "Postcode Search failed. When tested using /services?proximity=100&postcode=WA4+4AB",
        "isSearchEnabled": true,
        "searchEnabledMessage": "[{\"TestName\":\"Text Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Age Test\",\"Success\":false,\"ErrorMessage\":\"Could not run Age Test test due to lack of data.\"},{\"TestName\":\"Postcode Search\",\"Success\":false,\"ErrorMessage\":\"Postcode Search failed. When tested using /services?proximity=100&postcode=WA4+4AB\"},{\"TestName\":\"Taxonomy Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Time Search Test\",\"Success\":true,\"ErrorMessage\":null}]",
        "searchResults": [
            {
                "testName": "Text Test",
                "success": true,
                "errorMessage": null
            },
            {
                "testName": "Age Test",
                "success": false,
                "errorMessage": "Could not run Age Test test due to lack of data."
            },
            {
                "testName": "Postcode Search",
                "success": false,
                "errorMessage": "Postcode Search failed. When tested using /services?proximity=100&postcode=WA4+4AB"
            },
            {
                "testName": "Taxonomy Test",
                "success": true,
                "errorMessage": null
            },
            {
                "testName": "Time Search Test",
                "success": true,
                "errorMessage": null
            }
        ],
        "isCompleteSuccess": true
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
        "lastCheck": "2021-06-14T11:51:26",
        "checkIsRunning": false,
        "timeTaken": 36473,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "e82030f9-d142-4352-8471-f7bb3b12f274",
        "serviceExampleMessage": "",
        "isSearchEnabled": true,
        "searchEnabledMessage": "[{\"TestName\":\"Text Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Age Test\",\"Success\":false,\"ErrorMessage\":\"Could not run Age Test test due to lack of data.\"},{\"TestName\":\"Postcode Search\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Taxonomy Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Time Search Test\",\"Success\":true,\"ErrorMessage\":null}]",
        "searchResults": [
            {
                "testName": "Text Test",
                "success": true,
                "errorMessage": null
            },
            {
                "testName": "Age Test",
                "success": false,
                "errorMessage": "Could not run Age Test test due to lack of data."
            },
            {
                "testName": "Postcode Search",
                "success": true,
                "errorMessage": null
            },
            {
                "testName": "Taxonomy Test",
                "success": true,
                "errorMessage": null
            },
            {
                "testName": "Time Search Test",
                "success": true,
                "errorMessage": null
            }
        ],
        "isCompleteSuccess": true
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
        "lastCheck": "2021-06-14T11:33:37",
        "checkIsRunning": false,
        "timeTaken": 8459,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "e9a85dc6-d528-4ee0-a167-3944f7818c47",
        "serviceExampleMessage": "Postcode Search failed. When tested using /services?proximity=100&postcode=KT8+9LU",
        "isSearchEnabled": true,
        "searchEnabledMessage": "[{\"TestName\":\"Text Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Age Test\",\"Success\":false,\"ErrorMessage\":\"Could not run Age Test test due to lack of data.\"},{\"TestName\":\"Postcode Search\",\"Success\":false,\"ErrorMessage\":\"Postcode Search failed. When tested using /services?proximity=100&postcode=KT8+9LU\"},{\"TestName\":\"Taxonomy Test\",\"Success\":false,\"ErrorMessage\":\"Could not run Taxonomy Test test due to lack of data.\"},{\"TestName\":\"Time Search Test\",\"Success\":true,\"ErrorMessage\":null}]",
        "searchResults": [
            {
                "testName": "Text Test",
                "success": true,
                "errorMessage": null
            },
            {
                "testName": "Age Test",
                "success": false,
                "errorMessage": "Could not run Age Test test due to lack of data."
            },
            {
                "testName": "Postcode Search",
                "success": false,
                "errorMessage": "Postcode Search failed. When tested using /services?proximity=100&postcode=KT8+9LU"
            },
            {
                "testName": "Taxonomy Test",
                "success": false,
                "errorMessage": "Could not run Taxonomy Test test due to lack of data."
            },
            {
                "testName": "Time Search Test",
                "success": true,
                "errorMessage": null
            }
        ],
        "isCompleteSuccess": true
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
        "lastCheck": "2021-06-14T11:26:12",
        "checkIsRunning": false,
        "timeTaken": 4769,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "e8e88ff0-d7f4-b79e-8e73-fd7358dafe92",
        "serviceExampleMessage": "Postcode Search failed. When tested using /services?proximity=100&postcode=PR5+6AW",
        "isSearchEnabled": true,
        "searchEnabledMessage": "[{\"TestName\":\"Text Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Age Test\",\"Success\":false,\"ErrorMessage\":\"Could not run Age Test test due to lack of data.\"},{\"TestName\":\"Postcode Search\",\"Success\":false,\"ErrorMessage\":\"Postcode Search failed. When tested using /services?proximity=100&postcode=PR5+6AW\"},{\"TestName\":\"Taxonomy Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Time Search Test\",\"Success\":true,\"ErrorMessage\":null}]",
        "searchResults": [
            {
                "testName": "Text Test",
                "success": true,
                "errorMessage": null
            },
            {
                "testName": "Age Test",
                "success": false,
                "errorMessage": "Could not run Age Test test due to lack of data."
            },
            {
                "testName": "Postcode Search",
                "success": false,
                "errorMessage": "Postcode Search failed. When tested using /services?proximity=100&postcode=PR5+6AW"
            },
            {
                "testName": "Taxonomy Test",
                "success": true,
                "errorMessage": null
            },
            {
                "testName": "Time Search Test",
                "success": true,
                "errorMessage": null
            }
        ],
        "isCompleteSuccess": true
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
        "lastCheck": "2021-06-14T11:26:34",
        "checkIsRunning": false,
        "timeTaken": 7652,
        "isUp": true,
        "isServicesValid": false,
        "servicesMessage": "Missing search method paginaton metadata at the begining of the JSON payload. Required: \"totalElements\"; \"totalPages\". It is case sensitive, and should be in the following format: {\"totalElements\":nn,\"totalPages\":nn,\"number\":nn,\"size\":nn,\"first\":bb,\"last\":bb\",\"content\":[{},{}]...",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "789021b2-e773-47cf-a8cb-ab5200fedea3",
        "serviceExampleMessage": "Text Test failed. When tested using /services?text=LGA+Test+Entry",
        "isSearchEnabled": true,
        "searchEnabledMessage": "[{\"TestName\":\"Text Test\",\"Success\":false,\"ErrorMessage\":\"Text Test failed. When tested using /services?text=LGA+Test+Entry\"},{\"TestName\":\"Age Test\",\"Success\":false,\"ErrorMessage\":\"Could not run Age Test test due to lack of data.\"},{\"TestName\":\"Postcode Search\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Taxonomy Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Time Search Test\",\"Success\":true,\"ErrorMessage\":null}]",
        "searchResults": [
            {
                "testName": "Text Test",
                "success": false,
                "errorMessage": "Text Test failed. When tested using /services?text=LGA+Test+Entry"
            },
            {
                "testName": "Age Test",
                "success": false,
                "errorMessage": "Could not run Age Test test due to lack of data."
            },
            {
                "testName": "Postcode Search",
                "success": true,
                "errorMessage": null
            },
            {
                "testName": "Taxonomy Test",
                "success": true,
                "errorMessage": null
            },
            {
                "testName": "Time Search Test",
                "success": true,
                "errorMessage": null
            }
        ],
        "isCompleteSuccess": false
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
        "lastCheck": "2021-06-14T11:22:32",
        "checkIsRunning": false,
        "timeTaken": 1004,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "f3b5c4ff-1654-229b-1af9-f9ac88ccc722",
        "serviceExampleMessage": "Postcode Search failed. When tested using /services?proximity=100&postcode=DN20+8LD",
        "isSearchEnabled": true,
        "searchEnabledMessage": "[{\"TestName\":\"Text Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Age Test\",\"Success\":false,\"ErrorMessage\":\"Could not run Age Test test due to lack of data.\"},{\"TestName\":\"Postcode Search\",\"Success\":false,\"ErrorMessage\":\"Postcode Search failed. When tested using /services?proximity=100&postcode=DN20+8LD\"},{\"TestName\":\"Taxonomy Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Time Search Test\",\"Success\":true,\"ErrorMessage\":null}]",
        "searchResults": [
            {
                "testName": "Text Test",
                "success": true,
                "errorMessage": null
            },
            {
                "testName": "Age Test",
                "success": false,
                "errorMessage": "Could not run Age Test test due to lack of data."
            },
            {
                "testName": "Postcode Search",
                "success": false,
                "errorMessage": "Postcode Search failed. When tested using /services?proximity=100&postcode=DN20+8LD"
            },
            {
                "testName": "Taxonomy Test",
                "success": true,
                "errorMessage": null
            },
            {
                "testName": "Time Search Test",
                "success": true,
                "errorMessage": null
            }
        ],
        "isCompleteSuccess": true
    }
];

mockData.sort((a, b) => (a.organisationLabel || '').localeCompare(b.organisationLabel || ''));

export default mockData;