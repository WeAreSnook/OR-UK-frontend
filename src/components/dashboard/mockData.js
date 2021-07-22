const mockData = [
    {
        "url": "https://blackburn.openplace.directory/o/ServiceDirectoryService/v2",
        "label": "Blackburn with Darwen Council",
        "summary": "Live Blackburn with Darwen Council services data",
        "organisationLabel": "Blackburn with Darwen Council",
        "organisationUrl": "http://www.blackburn.gov.uk",
        "developerLabel": "Placecube",
        "developerUrl": "https://www.placecube.com/platforms/open-place-directory/",
        "servicePathOverride": "",
        "schemaType": null,
        "lastCheck": "2021-07-21T18:00:03",
        "checkIsRunning": false,
        "timeTaken": 14316,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "ba937898-6117-fc2e-6d44-3b6dbc44de24",
        "serviceExampleMessage": "Postcode Search failed. When tested using /services?proximity=100&postcode=WA4+4AB",
        "isSearchEnabled": true,
        "searchEnabledMessage": "[{\"TestName\":\"Text Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Age Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Postcode Search\",\"Success\":false,\"ErrorMessage\":\"Postcode Search failed. When tested using /services?proximity=100&postcode=WA4+4AB\"},{\"TestName\":\"Taxonomy Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Time Search Test\",\"Success\":true,\"ErrorMessage\":null}]",
        "searchResults": [
            {
                "testName": "Text Test",
                "success": true,
                "errorMessage": null
            },
            {
                "testName": "Age Test",
                "success": true,
                "errorMessage": null
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
        "filters": [
            "ChildChildTaxonomyTerm",
            "ChildTaxonomyTerm",
            "Coverage",
            "Day",
            "EndTime",
            "Keywords",
            "maxAge",
            "minAge",
            "Proximity",
            "StartTime",
            "TaxonomyTerm",
            "TaxonomyType",
            "Vocabulary"
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
        "schemaType": "Placecube",
        "lastCheck": "2021-07-21T18:00:03",
        "checkIsRunning": false,
        "timeTaken": 65597,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "ee206d77-98f4-eec4-3575-912145f8b70f",
        "serviceExampleMessage": "",
        "isSearchEnabled": true,
        "searchEnabledMessage": "[{\"TestName\":\"Text Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Age Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Postcode Search\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Taxonomy Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Time Search Test\",\"Success\":true,\"ErrorMessage\":null}]",
        "searchResults": [
            {
                "testName": "Text Test",
                "success": true,
                "errorMessage": null
            },
            {
                "testName": "Age Test",
                "success": true,
                "errorMessage": null
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
        "filters": [
            "Coverage",
            "Keywords",
            "maxAge",
            "minAge",
            "Proximity",
            "TaxonomyTerm",
            "TaxonomyType",
            "Vocabulary"
        ],
        "isCompleteSuccess": true
    },
    {
        "url": "https://api.familyinfo.buckinghamshire.gov.uk/api/v1",
        "label": "Buckinghamshire Council",
        "summary": "Buckinghamshire Family Information Service",
        "organisationLabel": "Buckinghamshire Council",
        "organisationUrl": "https://www.buckinghamshire.gov.uk/",
        "developerLabel": "FutureGov",
        "developerUrl": "https://wearefuturegov.com/",
        "servicePathOverride": "",
        "schemaType": null,
        "lastCheck": "2021-07-21T18:00:03",
        "checkIsRunning": false,
        "timeTaken": 20946016,
        "isUp": true,
        "isServicesValid": false,
        "servicesMessage": "Missing search method paginaton metadata at the begining of the JSON payload. Required: \"number\"; \"first\"; \"last\". It is case sensitive, and should be in the following format: {\"totalElements\":nn,\"totalPages\":nn,\"number\":nn,\"size\":nn,\"first\":bb,\"last\":bb\",\"content\":[{},{}]...",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "527",
        "serviceExampleMessage": "Text Test failed. When tested using /services?text=Youth+Drop-In+%7c+Chesham\nTime Search Test failed. When tested using /services?start_time=07%3a45&end_time=08%3a45",
        "isSearchEnabled": false,
        "searchEnabledMessage": "[{\"TestName\":\"Text Test\",\"Success\":false,\"ErrorMessage\":\"Text Test failed. When tested using /services?text=Youth+Drop-In+%7c+Chesham\"},{\"TestName\":\"Age Test\",\"Success\":false,\"ErrorMessage\":\"Could not run Age Test test due to lack of data.\"},{\"TestName\":\"Postcode Search\",\"Success\":false,\"ErrorMessage\":\"Could not run Postcode Search test due to lack of data.\"},{\"TestName\":\"Taxonomy Test\",\"Success\":false,\"ErrorMessage\":\"Could not run Taxonomy Test test due to lack of data.\"},{\"TestName\":\"Time Search Test\",\"Success\":false,\"ErrorMessage\":\"Time Search Test failed. When tested using /services?start_time=07%3a45&end_time=08%3a45\"}]",
        "searchResults": [
            {
                "testName": "Text Test",
                "success": false,
                "errorMessage": "Text Test failed. When tested using /services?text=Youth+Drop-In+%7c+Chesham"
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
                "success": false,
                "errorMessage": "Time Search Test failed. When tested using /services?start_time=07%3a45&end_time=08%3a45"
            }
        ],
        "filters": [
            "Coverage",
            "Keywords",
            "maxAge",
            "minAge",
            "Proximity",
            "TaxonomyTerm",
            "TaxonomyType",
            "Vocabulary"
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
        "schemaType": null,
        "lastCheck": "2021-07-21T18:00:03",
        "checkIsRunning": false,
        "timeTaken": 115209,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "6e94e58a-d9e9-4946-90d7-80704a5ad3b1",
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
        "filters": [
            "ChildChildTaxonomyTerm",
            "ChildTaxonomyTerm",
            "Coverage",
            "Day",
            "EndTime",
            "Keywords",
            "maxAge",
            "minAge",
            "Proximity",
            "StartTime",
            "TaxonomyTerm",
            "TaxonomyType",
            "Vocabulary"
        ],
        "isCompleteSuccess": true
    },
    {
        "url": "https://openreferral.localgovdrupal.org/openreferral/v1",
        "label": "Cumbria Council",
        "summary": "Sample directory from the open source Local Gove Drupal project. See https://deploy-preview-55--trusting-noyce-aebebc.netlify.app/blog/openreferral.html",
        "organisationLabel": "Cumbria Council",
        "organisationUrl": "https://www.cumbria.gov.uk/",
        "developerLabel": "LG Drupal",
        "developerUrl": "https://localgovdrupal.org/",
        "servicePathOverride": "",
        "schemaType": null,
        "lastCheck": "2021-07-22T10:32:02",
        "checkIsRunning": false,
        "timeTaken": 1781,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "7acd885a-da61-438d-b60f-1028fab696a6",
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
        "filters": [],
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
        "schemaType": null,
        "lastCheck": "2021-07-21T18:00:03",
        "checkIsRunning": false,
        "timeTaken": 8483,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "60354a53-3f6c-46e2-99a6-3cd15cc35c9d",
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
        "filters": [
            "Coverage",
            "Keywords",
            "maxAge",
            "minAge",
            "Proximity",
            "TaxonomyTerm",
            "TaxonomyType",
            "Vocabulary"
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
        "schemaType": null,
        "lastCheck": "2021-07-21T18:00:03",
        "checkIsRunning": false,
        "timeTaken": 4741,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "e042e78e-8b0c-6c85-121f-f1824c9ea0a3",
        "serviceExampleMessage": "Postcode Search failed. When tested using /services?proximity=100&postcode=PR5+6AW\nAge Test failed. When tested using /services?minimum_age=0&maximum_age=0",
        "isSearchEnabled": true,
        "searchEnabledMessage": "[{\"TestName\":\"Text Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Age Test\",\"Success\":false,\"ErrorMessage\":\"Age Test failed. When tested using /services?minimum_age=0&maximum_age=0\"},{\"TestName\":\"Postcode Search\",\"Success\":false,\"ErrorMessage\":\"Postcode Search failed. When tested using /services?proximity=100&postcode=PR5+6AW\"},{\"TestName\":\"Taxonomy Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Time Search Test\",\"Success\":true,\"ErrorMessage\":null}]",
        "searchResults": [
            {
                "testName": "Text Test",
                "success": true,
                "errorMessage": null
            },
            {
                "testName": "Age Test",
                "success": false,
                "errorMessage": "Age Test failed. When tested using /services?minimum_age=0&maximum_age=0"
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
        "filters": [
            "ChildChildTaxonomyTerm",
            "ChildTaxonomyTerm",
            "Coverage",
            "Day",
            "EndTime",
            "Keywords",
            "maxAge",
            "minAge",
            "Proximity",
            "StartTime",
            "TaxonomyTerm",
            "TaxonomyType",
            "Vocabulary"
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
        "schemaType": null,
        "lastCheck": "2021-07-21T18:00:03",
        "checkIsRunning": false,
        "timeTaken": 7045,
        "isUp": true,
        "isServicesValid": false,
        "servicesMessage": "Missing search method paginaton metadata at the begining of the JSON payload. Required: \"totalElements\"; \"totalPages\". It is case sensitive, and should be in the following format: {\"totalElements\":nn,\"totalPages\":nn,\"number\":nn,\"size\":nn,\"first\":bb,\"last\":bb\",\"content\":[{},{}]...",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "8eec60e4-ed84-413d-9971-ab5200fedf1a",
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
        "filters": [
            "ChildTaxonomyTerm",
            "Coverage",
            "Day",
            "Keywords",
            "Proximity",
            "TaxonomyTerm",
            "TaxonomyType",
            "Vocabulary"
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
        "schemaType": null,
        "lastCheck": "2021-07-21T18:00:03",
        "checkIsRunning": false,
        "timeTaken": 964,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "6be38184-13d5-fd10-f13a-04ba5b6f7850",
        "serviceExampleMessage": "Postcode Search failed. When tested using /services?proximity=100&postcode=DN20+9JH",
        "isSearchEnabled": true,
        "searchEnabledMessage": "[{\"TestName\":\"Text Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Age Test\",\"Success\":false,\"ErrorMessage\":\"Could not run Age Test test due to lack of data.\"},{\"TestName\":\"Postcode Search\",\"Success\":false,\"ErrorMessage\":\"Postcode Search failed. When tested using /services?proximity=100&postcode=DN20+9JH\"},{\"TestName\":\"Taxonomy Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Time Search Test\",\"Success\":true,\"ErrorMessage\":null}]",
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
                "errorMessage": "Postcode Search failed. When tested using /services?proximity=100&postcode=DN20+9JH"
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
        "filters": [
            "ChildChildTaxonomyTerm",
            "ChildTaxonomyTerm",
            "Coverage",
            "Day",
            "EndTime",
            "Keywords",
            "maxAge",
            "minAge",
            "Proximity",
            "StartTime",
            "TaxonomyTerm",
            "TaxonomyType",
            "Vocabulary"
        ],
        "isCompleteSuccess": true
    },
    {
        "url": "https://api.porism.com/ServiceDirectoryServiceOpenActiveAggregated",
        "label": "OpenActive",
        "summary": "Open source transformation run daily from OpenActive sports and wellbeing activities feeds aggregated by Imin - https://www.imin.co into an instance of the open source directory.",
        "organisationLabel": "OpenActive",
        "organisationUrl": "https://www.openactive.io/",
        "developerLabel": "Imin / ORUK",
        "developerUrl": "https://github.com/OpenReferralUK/human-services/tree/master/Utilities/OpenActiveFireHose",
        "servicePathOverride": "",
        "schemaType": null,
        "lastCheck": "2021-07-21T18:00:03",
        "checkIsRunning": false,
        "timeTaken": 395433,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "a65dfa69-4382-468b-a1cf-787fdfe37696",
        "serviceExampleMessage": "Postcode Search failed. When tested using /services?proximity=100&postcode=IP31+1RU",
        "isSearchEnabled": true,
        "searchEnabledMessage": "[{\"TestName\":\"Text Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Age Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Postcode Search\",\"Success\":false,\"ErrorMessage\":\"Postcode Search failed. When tested using /services?proximity=100&postcode=IP31+1RU\"},{\"TestName\":\"Taxonomy Test\",\"Success\":true,\"ErrorMessage\":null},{\"TestName\":\"Time Search Test\",\"Success\":true,\"ErrorMessage\":null}]",
        "searchResults": [
            {
                "testName": "Text Test",
                "success": true,
                "errorMessage": null
            },
            {
                "testName": "Age Test",
                "success": true,
                "errorMessage": null
            },
            {
                "testName": "Postcode Search",
                "success": false,
                "errorMessage": "Postcode Search failed. When tested using /services?proximity=100&postcode=IP31+1RU"
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
        "filters": [],
        "isCompleteSuccess": true
    }
];

mockData.sort((a, b) => (a.organisationLabel || '').localeCompare(b.organisationLabel || ''));

export default mockData;