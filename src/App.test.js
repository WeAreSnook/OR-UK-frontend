import { render, screen, waitFor, within } from '@testing-library/react';
import { renderHook } from  "@testing-library/react-hooks";
import App from './App';
import { BrowserRouter, Router } from 'react-router-dom'
import { MemoryRouter } from 'react-router-dom'  //uselocation 
import useOukapi  from './helpers/dataFetch';
import { ErrorBoundary } from 'react-error-boundary'
//import { renderWithRouter } from './test-utils';
//import userEvent from '@testing-library/user-event';


global.fetch = require('jest-fetch-mock');


const BASE_URL = process.env.REACT_APP_SITE_BASE_URL;
beforeEach(() => { 
    useOukapi.mockReturnValue([{
        data: [
            {
                "data": [
                    {
                        "id": 1,
                        "link": "/",
                        "label": "Home",
                        "sub_menu": null,
                        "published_at": "2021-03-31T10:00:59.000Z",
                        "created_at": "2021-03-31T09:45:51.000Z",
                        "updated_at": "2021-03-31T10:00:59.000Z",
                        "ShowOnFooter": null
                    },
                    {
                        "id": 2,
                        "link": "/about-standard",
                        "label": "About Open Referral UK",
                        "sub_menu": 1,
                        "published_at": "2021-03-31T10:00:55.000Z",
                        "created_at": "2021-03-31T09:46:16.000Z",
                        "updated_at": "2021-05-04T07:58:28.000Z",
                        "ShowOnFooter": true
                    },
                    {
                        "id": 3,
                        "link": "/how-it-works",
                        "label": "How it works",
                        "sub_menu": 2,
                        "published_at": "2021-03-31T09:51:53.000Z",
                        "created_at": "2021-03-31T09:51:51.000Z",
                        "updated_at": "2021-04-19T09:57:04.000Z",
                        "ShowOnFooter": true
                    },
                    {
                        "id": 4,
                        "link": "/community",
                        "label": "Community",
                        "sub_menu": 3,
                        "published_at": "2021-03-31T10:26:30.000Z",
                        "created_at": "2021-03-31T10:26:22.000Z",
                        "updated_at": "2021-05-03T14:05:55.000Z",
                        "ShowOnFooter": true
                    },
                    {
                        "id": 6,
                        "link": "/contact-us",
                        "label": "Contact us",
                        "sub_menu": 5,
                        "published_at": "2021-03-31T10:27:06.000Z",
                        "created_at": "2021-03-31T10:27:04.000Z",
                        "updated_at": "2021-05-03T14:06:02.000Z",
                        "ShowOnFooter": true
                    }
                ],
                "url": {
                    "key": "menuContent",
                    "url": "https://admin.beta.openreferraluk.org/top-menus"
                }
            },
            {
                "data": {
                    "id": 1,
                    "documentationAndToolsLinkLabel": "https://openreferraluk.org",
                    "copyrightNotice": "© 2019-2021 Open Referral UK [placeholder!]",
                    "published_at": "2021-04-16T20:51:17.000Z",
                    "created_at": "2021-04-16T20:48:03.000Z",
                    "updated_at": "2021-06-09T11:23:33.000Z",
                    "aboutLinks": {
                        "id": 1,
                        "title": "About the standard",
                        "links": [
                            {
                                "id": 24,
                                "TextToDisplay": "Open Referral UK",
                                "url": "/",
                                "isExternal": false
                            },
                            {
                                "id": 26,
                                "TextToDisplay": "Open data standards",
                                "url": "/about-standard",
                                "isExternal": false
                            },
                            {
                                "id": 27,
                                "TextToDisplay": "Why use the standard",
                                "url": "/about-standard",
                                "isExternal": false
                            }
                        ]
                    },
                    "howItWorksLinks": {
                        "id": 2,
                        "title": "How it works",
                        "links": [
                            {
                                "id": 28,
                                "TextToDisplay": "Steps to adopting the standard",
                                "url": "/how-it-works/standard-adoption-steps",
                                "isExternal": false
                            },
                            {
                                "id": 29,
                                "TextToDisplay": "Features of the standard",
                                "url": "/how-it-works/standard-features",
                                "isExternal": false
                            }
                        ]
                    },
                    "communityLinks": {
                        "id": 3,
                        "title": "Community",
                        "links": [
                            {
                                "id": 30,
                                "TextToDisplay": "Organisations adopting the standard",
                                "url": "/standard-community",
                                "isExternal": false
                            },
                            {
                                "id": 31,
                                "TextToDisplay": "Community forum",
                                "url": "https://forum.openreferraluk.org",
                                "isExternal": true
                            },
                            {
                                "id": 32,
                                "TextToDisplay": "Case studies",
                                "url": "/community/case-studies",
                                "isExternal": false
                            },
                            {
                                "id": 122,
                                "TextToDisplay": "Sign up to our newsletter",
                                "url": "http://eepurl.com/hshx-n",
                                "isExternal": false
                            }
                        ]
                    },
                    "governanceBoardSection": {
                        "id": 1,
                        "title": "Governance board",
                        "governanceBoardLogos": [
                            {
                                "id": 69,
                                "link": "https://www.adur-worthing.gov.uk/",
                                "CompanyLogo": {
                                    "id": 17,
                                    "name": "adur worthing.png",
                                    "alternativeText": "",
                                    "caption": "",
                                    "width": 613,
                                    "height": 87,
                                    "formats": {
                                        "thumbnail": {
                                            "name": "thumbnail_adur worthing.png",
                                            "hash": "thumbnail_adur_worthing_05d007358d",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 245,
                                            "height": 35,
                                            "size": 4.67,
                                            "path": null,
                                            "url": "/uploads/thumbnail_adur_worthing_05d007358d.png"
                                        },
                                        "small": {
                                            "name": "small_adur worthing.png",
                                            "hash": "small_adur_worthing_05d007358d",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 500,
                                            "height": 71,
                                            "size": 11.46,
                                            "path": null,
                                            "url": "/uploads/small_adur_worthing_05d007358d.png"
                                        }
                                    },
                                    "hash": "adur_worthing_05d007358d",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "size": 4.39,
                                    "url": "/uploads/adur_worthing_05d007358d.png",
                                    "previewUrl": null,
                                    "provider": "local",
                                    "provider_metadata": null,
                                    "created_at": "2021-04-22T09:19:01.000Z",
                                    "updated_at": "2021-04-22T09:19:01.000Z"
                                }
                            },
                            {
                                "id": 70,
                                "link": "https://www.essex.gov.uk/",
                                "CompanyLogo": {
                                    "id": 18,
                                    "name": "essex.png",
                                    "alternativeText": "",
                                    "caption": "",
                                    "width": 851,
                                    "height": 478,
                                    "formats": {
                                        "thumbnail": {
                                            "name": "thumbnail_essex.png",
                                            "hash": "thumbnail_essex_6b61c4a19e",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 245,
                                            "height": 138,
                                            "size": 12.35,
                                            "path": null,
                                            "url": "/uploads/thumbnail_essex_6b61c4a19e.png"
                                        },
                                        "medium": {
                                            "name": "medium_essex.png",
                                            "hash": "medium_essex_6b61c4a19e",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 750,
                                            "height": 421,
                                            "size": 49.8,
                                            "path": null,
                                            "url": "/uploads/medium_essex_6b61c4a19e.png"
                                        },
                                        "small": {
                                            "name": "small_essex.png",
                                            "hash": "small_essex_6b61c4a19e",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 500,
                                            "height": 281,
                                            "size": 30.08,
                                            "path": null,
                                            "url": "/uploads/small_essex_6b61c4a19e.png"
                                        }
                                    },
                                    "hash": "essex_6b61c4a19e",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "size": 14.23,
                                    "url": "/uploads/essex_6b61c4a19e.png",
                                    "previewUrl": null,
                                    "provider": "local",
                                    "provider_metadata": null,
                                    "created_at": "2021-04-22T09:21:13.000Z",
                                    "updated_at": "2021-05-06T09:22:22.000Z"
                                }
                            },
                            {
                                "id": 27,
                                "link": "https://www.local.gov.uk",
                                "CompanyLogo": {
                                    "id": 709,
                                    "name": "LGA-logo.png",
                                    "alternativeText": "",
                                    "caption": "",
                                    "width": 650,
                                    "height": 386,
                                    "formats": {
                                        "thumbnail": {
                                            "name": "thumbnail_LGA-logo.png",
                                            "hash": "thumbnail_LGA_logo_727e8125f3",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 245,
                                            "height": 145,
                                            "size": 17.33,
                                            "path": null,
                                            "url": "/uploads/thumbnail_LGA_logo_727e8125f3.png"
                                        },
                                        "small": {
                                            "name": "small_LGA-logo.png",
                                            "hash": "small_LGA_logo_727e8125f3",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 500,
                                            "height": 297,
                                            "size": 39.83,
                                            "path": null,
                                            "url": "/uploads/small_LGA_logo_727e8125f3.png"
                                        }
                                    },
                                    "hash": "LGA_logo_727e8125f3",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "size": 12.86,
                                    "url": "/uploads/LGA_logo_727e8125f3.png",
                                    "previewUrl": null,
                                    "provider": "local",
                                    "provider_metadata": null,
                                    "created_at": "2021-04-23T09:24:34.000Z",
                                    "updated_at": "2021-04-23T13:54:51.000Z"
                                }
                            },
                            {
                                "id": 26,
                                "link": "https://localdigital.gov.uk",
                                "CompanyLogo": {
                                    "id": 708,
                                    "name": "mhclg.png",
                                    "alternativeText": "",
                                    "caption": "",
                                    "width": 400,
                                    "height": 220,
                                    "formats": {
                                        "thumbnail": {
                                            "name": "thumbnail_mhclg.png",
                                            "hash": "thumbnail_mhclg_c20bdeab59",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 245,
                                            "height": 135,
                                            "size": 12.63,
                                            "path": null,
                                            "url": "/uploads/thumbnail_mhclg_c20bdeab59.png"
                                        }
                                    },
                                    "hash": "mhclg_c20bdeab59",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "size": 19.47,
                                    "url": "/uploads/mhclg_c20bdeab59.png",
                                    "previewUrl": null,
                                    "provider": "local",
                                    "provider_metadata": null,
                                    "created_at": "2021-04-23T09:23:24.000Z",
                                    "updated_at": "2021-04-23T09:23:24.000Z"
                                }
                            }
                        ]
                    },
                    "getInvolved": {
                        "id": 1,
                        "title": "Get involved",
                        "link": {
                            "id": 33,
                            "TextToDisplay": "Join our community",
                            "url": "https://docs.google.com/forms/d/e/1FAIpQLScZU1lVUDZoruKzT86MV1Ko0v7LTBSA9-Y8fd9a-I73-jv2KA/viewform?usp=sf_link",
                            "isExternal": true
                        }
                    },
                    "contact": {
                        "id": 2,
                        "title": "Contact us",
                        "link": {
                            "id": 34,
                            "TextToDisplay": "Support on adopting the standard",
                            "url": "/contact-us",
                            "isExternal": false
                        }
                    },
                    "technicalFeedbackLink": {
                        "id": 3,
                        "title": "Technical feedback and support",
                        "link": {
                            "id": 35,
                            "TextToDisplay": "Github",
                            "url": "https://github.com/OpenReferralUK/human-services",
                            "isExternal": true
                        }
                    },
                    "privacyPolicyLink": {
                        "id": 37,
                        "TextToDisplay": "Privacy policy",
                        "url": "/privacy-policy",
                        "isExternal": false
                    },
                    "accessibilityStatementLink": null,
                    "footerLogo": {
                        "id": 5,
                        "name": "https://openreferral.org/wp-content/uploads/2018/02/OpenReferral_Logo_Green-4-1.png",
                        "alternativeText": "open_ref_logo",
                        "caption": "",
                        "width": 769,
                        "height": 449,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_logo.png",
                                "hash": "thumbnail_logo_715d186c96",
                                "ext": ".png",
                                "mime": "image/png",
                                "width": 245,
                                "height": 143,
                                "size": 12.18,
                                "path": null,
                                "url": "/uploads/thumbnail_logo_715d186c96.png"
                            },
                            "medium": {
                                "name": "medium_logo.png",
                                "hash": "medium_logo_715d186c96",
                                "ext": ".png",
                                "mime": "image/png",
                                "width": 750,
                                "height": 438,
                                "size": 35.02,
                                "path": null,
                                "url": "/uploads/medium_logo_715d186c96.png"
                            },
                            "small": {
                                "name": "small_logo.png",
                                "hash": "small_logo_715d186c96",
                                "ext": ".png",
                                "mime": "image/png",
                                "width": 500,
                                "height": 292,
                                "size": 23.74,
                                "path": null,
                                "url": "/uploads/small_logo_715d186c96.png"
                            }
                        },
                        "hash": "logo_715d186c96",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 13.32,
                        "url": "/uploads/logo_715d186c96.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "created_at": "2021-03-30T09:39:26.000Z",
                        "updated_at": "2021-03-30T10:41:55.000Z"
                    }
                },
                "url": {
                    "key": "footerContent",
                    "url": "https://admin.beta.openreferraluk.org/footer"
                }
            },
            {
                "data": {
                    "id": 1,
                    "introParagraph": "<h2>Open data standards for community services</h2><p>Local government organisations and services collect large amounts of information and data. This is presented in different formats and often collected multiple times and in inconsistent ways.</p><p>Adopting an <a href=\"https://openreferraluk.org/about-standard#section-2-heading\">open data standard</a> helps to solve this problem.</p>",
                    "BenefitsAndOpportunities": "<h3>What are the benefits?</h3><p>Adopting the Open Referral UK standard for community services data can enable the following benefits for your organisation, area and service users:</p><ul><li>Easy to access, accurate and reliable information on services</li><li>Partner with and share information and knowledge with other local authorities, organisations and stakeholders</li><li>Avoid duplication of information and ‘reinventing the wheel’ for every directory</li><li>Give users of the service what they need and not limited to one organisation - more holistic approach rather than working in silos</li><li>Saves money and resources by capturing data once and means frontline workers and advocates have the necessary information at their fingertips</li></ul><p>See how the standard helps you to realise these benefits, <a href=\"/how-it-works/standard-features\">features of the standard</a></p><p>&nbsp;</p>",
                    "published_at": "2021-04-12T16:31:20.000Z",
                    "created_at": "2021-04-12T16:30:01.000Z",
                    "updated_at": "2021-06-17T14:50:27.000Z",
                    "heroBanner": {
                        "id": 1,
                        "title": "Making it easy to publish, find and use community services data",
                        "body": "Open Referral UK is an open data standard.  A standard establishes a consistent way of publishing and describing information. This means people can get the information they need more quickly and easily, and helps to create joined up local communities and services."
                    },
                    "PullQuote": {
                        "id": 1,
                        "quote": "The services out there can change peoples' lives. But if we don't have accurate and reliable information, then we're working with one hand tied behind our back. We have a limited chance of helping them.",
                        "Attribution": "– Key worker in Blackburn"
                    },
                    "CommunityStatsBox": {
                        "id": 1,
                        "title": "Organisations using Open Referral UK",
                        "OrganisationsIntroText": "",
                        "numbers": {
                            "id": 1,
                            "considering": 6,
                            "adopting": 4,
                            "adopted": 6
                        },
                        "CompanyLogo": [
                            {
                                "id": 3,
                                "link": "https://www.buckinghamshire.gov.uk/",
                                "CompanyLogo": {
                                    "id": 6,
                                    "name": "BC blue landscape logo PNG original 4386x1192px.png",
                                    "alternativeText": "",
                                    "caption": "",
                                    "width": 4386,
                                    "height": 1192,
                                    "formats": {
                                        "thumbnail": {
                                            "name": "thumbnail_BC blue landscape logo PNG original 4386x1192px.png",
                                            "hash": "thumbnail_BC_blue_landscape_logo_PNG_original_4386x1192px_2b52088f80",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 245,
                                            "height": 67,
                                            "size": 13.38,
                                            "path": null,
                                            "url": "/uploads/thumbnail_BC_blue_landscape_logo_PNG_original_4386x1192px_2b52088f80.png"
                                        },
                                        "large": {
                                            "name": "large_BC blue landscape logo PNG original 4386x1192px.png",
                                            "hash": "large_BC_blue_landscape_logo_PNG_original_4386x1192px_2b52088f80",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 1000,
                                            "height": 272,
                                            "size": 77.43,
                                            "path": null,
                                            "url": "/uploads/large_BC_blue_landscape_logo_PNG_original_4386x1192px_2b52088f80.png"
                                        },
                                        "medium": {
                                            "name": "medium_BC blue landscape logo PNG original 4386x1192px.png",
                                            "hash": "medium_BC_blue_landscape_logo_PNG_original_4386x1192px_2b52088f80",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 750,
                                            "height": 204,
                                            "size": 55.65,
                                            "path": null,
                                            "url": "/uploads/medium_BC_blue_landscape_logo_PNG_original_4386x1192px_2b52088f80.png"
                                        },
                                        "small": {
                                            "name": "small_BC blue landscape logo PNG original 4386x1192px.png",
                                            "hash": "small_BC_blue_landscape_logo_PNG_original_4386x1192px_2b52088f80",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 500,
                                            "height": 136,
                                            "size": 33.88,
                                            "path": null,
                                            "url": "/uploads/small_BC_blue_landscape_logo_PNG_original_4386x1192px_2b52088f80.png"
                                        }
                                    },
                                    "hash": "BC_blue_landscape_logo_PNG_original_4386x1192px_2b52088f80",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "size": 116.7,
                                    "url": "/uploads/BC_blue_landscape_logo_PNG_original_4386x1192px_2b52088f80.png",
                                    "previewUrl": null,
                                    "provider": "local",
                                    "provider_metadata": null,
                                    "created_at": "2021-04-15T12:05:31.000Z",
                                    "updated_at": "2021-04-15T12:05:31.000Z"
                                }
                            },
                            {
                                "id": 4,
                                "link": "https://wearefuturegov.com/",
                                "CompanyLogo": {
                                    "id": 7,
                                    "name": "futuregov_logo_rgb.png",
                                    "alternativeText": "",
                                    "caption": "",
                                    "width": 1445,
                                    "height": 247,
                                    "formats": {
                                        "thumbnail": {
                                            "name": "thumbnail_futuregov_logo_rgb.png",
                                            "hash": "thumbnail_futuregov_logo_rgb_8477613d5d",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 245,
                                            "height": 42,
                                            "size": 4.91,
                                            "path": null,
                                            "url": "/uploads/thumbnail_futuregov_logo_rgb_8477613d5d.png"
                                        },
                                        "large": {
                                            "name": "large_futuregov_logo_rgb.png",
                                            "hash": "large_futuregov_logo_rgb_8477613d5d",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 1000,
                                            "height": 171,
                                            "size": 23.68,
                                            "path": null,
                                            "url": "/uploads/large_futuregov_logo_rgb_8477613d5d.png"
                                        },
                                        "medium": {
                                            "name": "medium_futuregov_logo_rgb.png",
                                            "hash": "medium_futuregov_logo_rgb_8477613d5d",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 750,
                                            "height": 128,
                                            "size": 16.37,
                                            "path": null,
                                            "url": "/uploads/medium_futuregov_logo_rgb_8477613d5d.png"
                                        },
                                        "small": {
                                            "name": "small_futuregov_logo_rgb.png",
                                            "hash": "small_futuregov_logo_rgb_8477613d5d",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 500,
                                            "height": 85,
                                            "size": 10.51,
                                            "path": null,
                                            "url": "/uploads/small_futuregov_logo_rgb_8477613d5d.png"
                                        }
                                    },
                                    "hash": "futuregov_logo_rgb_8477613d5d",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "size": 12.13,
                                    "url": "/uploads/futuregov_logo_rgb_8477613d5d.png",
                                    "previewUrl": null,
                                    "provider": "local",
                                    "provider_metadata": null,
                                    "created_at": "2021-04-15T12:06:22.000Z",
                                    "updated_at": "2021-04-15T12:06:22.000Z"
                                }
                            },
                            {
                                "id": 8,
                                "link": "https://www.blackburn.gov.uk/",
                                "CompanyLogo": {
                                    "id": 11,
                                    "name": "blackburn-with-darwen.png",
                                    "alternativeText": "",
                                    "caption": "",
                                    "width": 960,
                                    "height": 212,
                                    "formats": {
                                        "thumbnail": {
                                            "name": "thumbnail_blackburn-with-darwen.png",
                                            "hash": "thumbnail_blackburn_with_darwen_e4622af3a5",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 245,
                                            "height": 54,
                                            "size": 9.6,
                                            "path": null,
                                            "url": "/uploads/thumbnail_blackburn_with_darwen_e4622af3a5.png"
                                        },
                                        "medium": {
                                            "name": "medium_blackburn-with-darwen.png",
                                            "hash": "medium_blackburn_with_darwen_e4622af3a5",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 750,
                                            "height": 166,
                                            "size": 47.26,
                                            "path": null,
                                            "url": "/uploads/medium_blackburn_with_darwen_e4622af3a5.png"
                                        },
                                        "small": {
                                            "name": "small_blackburn-with-darwen.png",
                                            "hash": "small_blackburn_with_darwen_e4622af3a5",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 500,
                                            "height": 110,
                                            "size": 26.99,
                                            "path": null,
                                            "url": "/uploads/small_blackburn_with_darwen_e4622af3a5.png"
                                        }
                                    },
                                    "hash": "blackburn_with_darwen_e4622af3a5",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "size": 17.95,
                                    "url": "/uploads/blackburn_with_darwen_e4622af3a5.png",
                                    "previewUrl": null,
                                    "provider": "local",
                                    "provider_metadata": null,
                                    "created_at": "2021-04-16T12:30:30.000Z",
                                    "updated_at": "2021-04-16T12:30:30.000Z"
                                }
                            },
                            {
                                "id": 9,
                                "link": "https://www.elmbridge.gov.uk/",
                                "CompanyLogo": {
                                    "id": 12,
                                    "name": "elmbridge-web-logo.png",
                                    "alternativeText": "",
                                    "caption": "",
                                    "width": 266,
                                    "height": 79,
                                    "formats": {
                                        "thumbnail": {
                                            "name": "thumbnail_elmbridge-web-logo.png",
                                            "hash": "thumbnail_elmbridge_web_logo_529618c0a4",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 245,
                                            "height": 73,
                                            "size": 26.61,
                                            "path": null,
                                            "url": "/uploads/thumbnail_elmbridge_web_logo_529618c0a4.png"
                                        }
                                    },
                                    "hash": "elmbridge_web_logo_529618c0a4",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "size": 13.22,
                                    "url": "/uploads/elmbridge_web_logo_529618c0a4.png",
                                    "previewUrl": null,
                                    "provider": "local",
                                    "provider_metadata": null,
                                    "created_at": "2021-04-16T12:32:20.000Z",
                                    "updated_at": "2021-04-16T12:32:20.000Z"
                                }
                            },
                            {
                                "id": 12,
                                "link": "https://www.placecube.com/",
                                "CompanyLogo": {
                                    "id": 15,
                                    "name": "Placecube-Horizontal-BLK_4x.png",
                                    "alternativeText": "",
                                    "caption": "",
                                    "width": 1490,
                                    "height": 349,
                                    "formats": {
                                        "thumbnail": {
                                            "name": "thumbnail_Placecube-Horizontal-BLK_4x.png",
                                            "hash": "thumbnail_Placecube_Horizontal_BLK_4x_9aef2d6c98",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 245,
                                            "height": 57,
                                            "size": 4.61,
                                            "path": null,
                                            "url": "/uploads/thumbnail_Placecube_Horizontal_BLK_4x_9aef2d6c98.png"
                                        },
                                        "large": {
                                            "name": "large_Placecube-Horizontal-BLK_4x.png",
                                            "hash": "large_Placecube_Horizontal_BLK_4x_9aef2d6c98",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 1000,
                                            "height": 234,
                                            "size": 23.06,
                                            "path": null,
                                            "url": "/uploads/large_Placecube_Horizontal_BLK_4x_9aef2d6c98.png"
                                        },
                                        "medium": {
                                            "name": "medium_Placecube-Horizontal-BLK_4x.png",
                                            "hash": "medium_Placecube_Horizontal_BLK_4x_9aef2d6c98",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 750,
                                            "height": 176,
                                            "size": 16.23,
                                            "path": null,
                                            "url": "/uploads/medium_Placecube_Horizontal_BLK_4x_9aef2d6c98.png"
                                        },
                                        "small": {
                                            "name": "small_Placecube-Horizontal-BLK_4x.png",
                                            "hash": "small_Placecube_Horizontal_BLK_4x_9aef2d6c98",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 500,
                                            "height": 117,
                                            "size": 10.25,
                                            "path": null,
                                            "url": "/uploads/small_Placecube_Horizontal_BLK_4x_9aef2d6c98.png"
                                        }
                                    },
                                    "hash": "Placecube_Horizontal_BLK_4x_9aef2d6c98",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "size": 14.52,
                                    "url": "/uploads/Placecube_Horizontal_BLK_4x_9aef2d6c98.png",
                                    "previewUrl": null,
                                    "provider": "local",
                                    "provider_metadata": null,
                                    "created_at": "2021-04-16T12:36:33.000Z",
                                    "updated_at": "2021-04-16T12:36:33.000Z"
                                }
                            },
                            {
                                "id": 25,
                                "link": "http://www.publicpartnerships.co.uk/",
                                "CompanyLogo": {
                                    "id": 723,
                                    "name": "test-ppl-logo-pngv2.png",
                                    "alternativeText": "",
                                    "caption": "",
                                    "width": 293,
                                    "height": 62,
                                    "formats": {
                                        "thumbnail": {
                                            "name": "thumbnail_test-ppl-logo-pngv2.png",
                                            "hash": "thumbnail_test_ppl_logo_pngv2_f95107f2eb",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 245,
                                            "height": 52,
                                            "size": 7.13,
                                            "path": null,
                                            "url": "/uploads/thumbnail_test_ppl_logo_pngv2_f95107f2eb.png"
                                        }
                                    },
                                    "hash": "test_ppl_logo_pngv2_f95107f2eb",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "size": 5.01,
                                    "url": "/uploads/test_ppl_logo_pngv2_f95107f2eb.png",
                                    "previewUrl": null,
                                    "provider": "local",
                                    "provider_metadata": null,
                                    "created_at": "2021-04-27T11:21:11.000Z",
                                    "updated_at": "2021-04-27T11:21:11.000Z"
                                }
                            },
                            {
                                "id": 28,
                                "link": "https://www.local.gov.uk/",
                                "CompanyLogo": {
                                    "id": 709,
                                    "name": "LGA-logo.png",
                                    "alternativeText": "",
                                    "caption": "",
                                    "width": 650,
                                    "height": 386,
                                    "formats": {
                                        "thumbnail": {
                                            "name": "thumbnail_LGA-logo.png",
                                            "hash": "thumbnail_LGA_logo_727e8125f3",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 245,
                                            "height": 145,
                                            "size": 17.33,
                                            "path": null,
                                            "url": "/uploads/thumbnail_LGA_logo_727e8125f3.png"
                                        },
                                        "small": {
                                            "name": "small_LGA-logo.png",
                                            "hash": "small_LGA_logo_727e8125f3",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 500,
                                            "height": 297,
                                            "size": 39.83,
                                            "path": null,
                                            "url": "/uploads/small_LGA_logo_727e8125f3.png"
                                        }
                                    },
                                    "hash": "LGA_logo_727e8125f3",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "size": 12.86,
                                    "url": "/uploads/LGA_logo_727e8125f3.png",
                                    "previewUrl": null,
                                    "provider": "local",
                                    "provider_metadata": null,
                                    "created_at": "2021-04-23T09:24:34.000Z",
                                    "updated_at": "2021-04-23T13:54:51.000Z"
                                }
                            },
                            {
                                "id": 29,
                                "link": "https://localdigital.gov.uk/",
                                "CompanyLogo": {
                                    "id": 708,
                                    "name": "mhclg.png",
                                    "alternativeText": "",
                                    "caption": "",
                                    "width": 400,
                                    "height": 220,
                                    "formats": {
                                        "thumbnail": {
                                            "name": "thumbnail_mhclg.png",
                                            "hash": "thumbnail_mhclg_c20bdeab59",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 245,
                                            "height": 135,
                                            "size": 12.63,
                                            "path": null,
                                            "url": "/uploads/thumbnail_mhclg_c20bdeab59.png"
                                        }
                                    },
                                    "hash": "mhclg_c20bdeab59",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "size": 19.47,
                                    "url": "/uploads/mhclg_c20bdeab59.png",
                                    "previewUrl": null,
                                    "provider": "local",
                                    "provider_metadata": null,
                                    "created_at": "2021-04-23T09:23:24.000Z",
                                    "updated_at": "2021-04-23T09:23:24.000Z"
                                }
                            },
                            {
                                "id": 45,
                                "link": "https://www.wellaware.org.uk",
                                "CompanyLogo": {
                                    "id": 722,
                                    "name": "wellaware-logo.png",
                                    "alternativeText": "",
                                    "caption": "",
                                    "width": 400,
                                    "height": 227,
                                    "formats": {
                                        "thumbnail": {
                                            "name": "thumbnail_wellaware-logo.png",
                                            "hash": "thumbnail_wellaware_logo_1089285840",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 245,
                                            "height": 139,
                                            "size": 13.07,
                                            "path": null,
                                            "url": "/uploads/thumbnail_wellaware_logo_1089285840.png"
                                        }
                                    },
                                    "hash": "wellaware_logo_1089285840",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "size": 7.03,
                                    "url": "/uploads/wellaware_logo_1089285840.png",
                                    "previewUrl": null,
                                    "provider": "local",
                                    "provider_metadata": null,
                                    "created_at": "2021-04-27T11:07:54.000Z",
                                    "updated_at": "2021-04-27T11:07:54.000Z"
                                }
                            },
                            {
                                "id": 46,
                                "link": "https://www.vidavia.com/",
                                "CompanyLogo": {
                                    "id": 23,
                                    "name": "vidavia-dark-turqoise-url-h140_0.png",
                                    "alternativeText": "",
                                    "caption": "",
                                    "width": 282,
                                    "height": 140,
                                    "formats": {
                                        "thumbnail": {
                                            "name": "thumbnail_vidavia-dark-turqoise-url-h140_0.png",
                                            "hash": "thumbnail_vidavia_dark_turqoise_url_h140_0_a760d150d4",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 245,
                                            "height": 122,
                                            "size": 22.86,
                                            "path": null,
                                            "url": "/uploads/thumbnail_vidavia_dark_turqoise_url_h140_0_a760d150d4.png"
                                        }
                                    },
                                    "hash": "vidavia_dark_turqoise_url_h140_0_a760d150d4",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "size": 13.41,
                                    "url": "/uploads/vidavia_dark_turqoise_url_h140_0_a760d150d4.png",
                                    "previewUrl": null,
                                    "provider": "local",
                                    "provider_metadata": null,
                                    "created_at": "2021-04-22T10:12:51.000Z",
                                    "updated_at": "2021-04-22T10:12:51.000Z"
                                }
                            },
                            {
                                "id": 47,
                                "link": "http://www.hull.gov.uk/",
                                "CompanyLogo": {
                                    "id": 27,
                                    "name": "hull.jpeg",
                                    "alternativeText": "",
                                    "caption": "",
                                    "width": 250,
                                    "height": 107,
                                    "formats": {
                                        "thumbnail": {
                                            "name": "thumbnail_hull.jpeg",
                                            "hash": "thumbnail_hull_4920e90d18",
                                            "ext": ".jpeg",
                                            "mime": "image/jpeg",
                                            "width": 245,
                                            "height": 105,
                                            "size": 6.53,
                                            "path": null,
                                            "url": "/uploads/thumbnail_hull_4920e90d18.jpeg"
                                        }
                                    },
                                    "hash": "hull_4920e90d18",
                                    "ext": ".jpeg",
                                    "mime": "image/jpeg",
                                    "size": 6.17,
                                    "url": "/uploads/hull_4920e90d18.jpeg",
                                    "previewUrl": null,
                                    "provider": "local",
                                    "provider_metadata": null,
                                    "created_at": "2021-04-22T12:42:54.000Z",
                                    "updated_at": "2021-04-22T12:42:54.000Z"
                                }
                            },
                            {
                                "id": 48,
                                "link": "https://www.healthierlsc.co.uk/",
                                "CompanyLogo": {
                                    "id": 721,
                                    "name": "2017_HLSCFullColourLogo.png",
                                    "alternativeText": "",
                                    "caption": "",
                                    "width": 1415,
                                    "height": 417,
                                    "formats": {
                                        "thumbnail": {
                                            "name": "thumbnail_2017_HLSCFullColourLogo.png",
                                            "hash": "thumbnail_2017_HLSC_Full_Colour_Logo_f3149d1c9f",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 245,
                                            "height": 72,
                                            "size": 15.63,
                                            "path": null,
                                            "url": "/uploads/thumbnail_2017_HLSC_Full_Colour_Logo_f3149d1c9f.png"
                                        },
                                        "large": {
                                            "name": "large_2017_HLSCFullColourLogo.png",
                                            "hash": "large_2017_HLSC_Full_Colour_Logo_f3149d1c9f",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 1000,
                                            "height": 295,
                                            "size": 71.95,
                                            "path": null,
                                            "url": "/uploads/large_2017_HLSC_Full_Colour_Logo_f3149d1c9f.png"
                                        },
                                        "medium": {
                                            "name": "medium_2017_HLSCFullColourLogo.png",
                                            "hash": "medium_2017_HLSC_Full_Colour_Logo_f3149d1c9f",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 750,
                                            "height": 221,
                                            "size": 52.54,
                                            "path": null,
                                            "url": "/uploads/medium_2017_HLSC_Full_Colour_Logo_f3149d1c9f.png"
                                        },
                                        "small": {
                                            "name": "small_2017_HLSCFullColourLogo.png",
                                            "hash": "small_2017_HLSC_Full_Colour_Logo_f3149d1c9f",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 500,
                                            "height": 147,
                                            "size": 34.07,
                                            "path": null,
                                            "url": "/uploads/small_2017_HLSC_Full_Colour_Logo_f3149d1c9f.png"
                                        }
                                    },
                                    "hash": "2017_HLSC_Full_Colour_Logo_f3149d1c9f",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "size": 27.31,
                                    "url": "/uploads/2017_HLSC_Full_Colour_Logo_f3149d1c9f.png",
                                    "previewUrl": null,
                                    "provider": "local",
                                    "provider_metadata": null,
                                    "created_at": "2021-04-27T11:01:13.000Z",
                                    "updated_at": "2021-04-27T11:01:13.000Z"
                                }
                            },
                            {
                                "id": 49,
                                "link": "https://www.docandtee.com/",
                                "CompanyLogo": {
                                    "id": 736,
                                    "name": "doc&tee.jpeg",
                                    "alternativeText": "",
                                    "caption": "",
                                    "width": 2624,
                                    "height": 778,
                                    "formats": {
                                        "thumbnail": {
                                            "name": "thumbnail_doc&tee.jpeg",
                                            "hash": "thumbnail_doc_and_tee_bf3c71d417",
                                            "ext": ".jpeg",
                                            "mime": "image/jpeg",
                                            "width": 245,
                                            "height": 73,
                                            "size": 3.85,
                                            "path": null,
                                            "url": "/uploads/thumbnail_doc_and_tee_bf3c71d417.jpeg"
                                        },
                                        "large": {
                                            "name": "large_doc&tee.jpeg",
                                            "hash": "large_doc_and_tee_bf3c71d417",
                                            "ext": ".jpeg",
                                            "mime": "image/jpeg",
                                            "width": 1000,
                                            "height": 296,
                                            "size": 17.24,
                                            "path": null,
                                            "url": "/uploads/large_doc_and_tee_bf3c71d417.jpeg"
                                        },
                                        "medium": {
                                            "name": "medium_doc&tee.jpeg",
                                            "hash": "medium_doc_and_tee_bf3c71d417",
                                            "ext": ".jpeg",
                                            "mime": "image/jpeg",
                                            "width": 750,
                                            "height": 222,
                                            "size": 12.65,
                                            "path": null,
                                            "url": "/uploads/medium_doc_and_tee_bf3c71d417.jpeg"
                                        },
                                        "small": {
                                            "name": "small_doc&tee.jpeg",
                                            "hash": "small_doc_and_tee_bf3c71d417",
                                            "ext": ".jpeg",
                                            "mime": "image/jpeg",
                                            "width": 500,
                                            "height": 148,
                                            "size": 8.07,
                                            "path": null,
                                            "url": "/uploads/small_doc_and_tee_bf3c71d417.jpeg"
                                        }
                                    },
                                    "hash": "doc_and_tee_bf3c71d417",
                                    "ext": ".jpeg",
                                    "mime": "image/jpeg",
                                    "size": 52.72,
                                    "url": "/uploads/doc_and_tee_bf3c71d417.jpeg",
                                    "previewUrl": null,
                                    "provider": "local",
                                    "provider_metadata": null,
                                    "created_at": "2021-04-29T16:06:08.000Z",
                                    "updated_at": "2021-04-29T16:06:08.000Z"
                                }
                            },
                            {
                                "id": 50,
                                "link": "https://www.bristol.gov.uk/",
                                "CompanyLogo": {
                                    "id": 10,
                                    "name": "Bristol-City-Council-logo.png",
                                    "alternativeText": "",
                                    "caption": "",
                                    "width": 1200,
                                    "height": 1219,
                                    "formats": {
                                        "thumbnail": {
                                            "name": "thumbnail_Bristol-City-Council-logo.png",
                                            "hash": "thumbnail_Bristol_City_Council_logo_ddcd6a845e",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 154,
                                            "height": 156,
                                            "size": 26.42,
                                            "path": null,
                                            "url": "/uploads/thumbnail_Bristol_City_Council_logo_ddcd6a845e.png"
                                        },
                                        "large": {
                                            "name": "large_Bristol-City-Council-logo.png",
                                            "hash": "large_Bristol_City_Council_logo_ddcd6a845e",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 984,
                                            "height": 1000,
                                            "size": 333.49,
                                            "path": null,
                                            "url": "/uploads/large_Bristol_City_Council_logo_ddcd6a845e.png"
                                        },
                                        "medium": {
                                            "name": "medium_Bristol-City-Council-logo.png",
                                            "hash": "medium_Bristol_City_Council_logo_ddcd6a845e",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 738,
                                            "height": 750,
                                            "size": 226.74,
                                            "path": null,
                                            "url": "/uploads/medium_Bristol_City_Council_logo_ddcd6a845e.png"
                                        },
                                        "small": {
                                            "name": "small_Bristol-City-Council-logo.png",
                                            "hash": "small_Bristol_City_Council_logo_ddcd6a845e",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 492,
                                            "height": 500,
                                            "size": 129.09,
                                            "path": null,
                                            "url": "/uploads/small_Bristol_City_Council_logo_ddcd6a845e.png"
                                        }
                                    },
                                    "hash": "Bristol_City_Council_logo_ddcd6a845e",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "size": 153.25,
                                    "url": "/uploads/Bristol_City_Council_logo_ddcd6a845e.png",
                                    "previewUrl": null,
                                    "provider": "local",
                                    "provider_metadata": null,
                                    "created_at": "2021-04-16T12:28:57.000Z",
                                    "updated_at": "2021-04-16T12:28:57.000Z"
                                }
                            },
                            {
                                "id": 72,
                                "link": "https://digitalcoproduction.co.uk",
                                "CompanyLogo": {
                                    "id": 744,
                                    "name": "DC logo full - 1000 px wide.png",
                                    "alternativeText": "",
                                    "caption": "",
                                    "width": 1000,
                                    "height": 244,
                                    "formats": {
                                        "thumbnail": {
                                            "name": "thumbnail_DC logo full - 1000 px wide.png",
                                            "hash": "thumbnail_DC_logo_full_1000_px_wide_5a0266280f",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 245,
                                            "height": 60,
                                            "size": 9.17,
                                            "path": null,
                                            "url": "/uploads/thumbnail_DC_logo_full_1000_px_wide_5a0266280f.png"
                                        },
                                        "medium": {
                                            "name": "medium_DC logo full - 1000 px wide.png",
                                            "hash": "medium_DC_logo_full_1000_px_wide_5a0266280f",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 750,
                                            "height": 183,
                                            "size": 32.61,
                                            "path": null,
                                            "url": "/uploads/medium_DC_logo_full_1000_px_wide_5a0266280f.png"
                                        },
                                        "small": {
                                            "name": "small_DC logo full - 1000 px wide.png",
                                            "hash": "small_DC_logo_full_1000_px_wide_5a0266280f",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "width": 500,
                                            "height": 122,
                                            "size": 20.59,
                                            "path": null,
                                            "url": "/uploads/small_DC_logo_full_1000_px_wide_5a0266280f.png"
                                        }
                                    },
                                    "hash": "DC_logo_full_1000_px_wide_5a0266280f",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "size": 15.38,
                                    "url": "/uploads/DC_logo_full_1000_px_wide_5a0266280f.png",
                                    "previewUrl": null,
                                    "provider": "local",
                                    "provider_metadata": null,
                                    "created_at": "2021-06-17T13:43:38.000Z",
                                    "updated_at": "2021-06-17T13:43:38.000Z"
                                }
                            },
                            {
                                "flexible": "",
                                "id": 1000
                            }
                        ]
                    },
                    "caseStudiesLink": {
                        "id": 78,
                        "TextToDisplay": "Read our case studies",
                        "url": "/community/case-studies",
                        "isExternal": false
                    },
                    "benefitsSection": null,
                    "readNextLinks": [
                        {
                            "id": 2,
                            "TextToDisplay": "Find out more about how the standard works",
                            "url": "/how-it-works",
                            "isExternal": false
                        },
                        {
                            "id": 3,
                            "TextToDisplay": "Information on data structure and tools for the standard. ",
                            "url": "https://developers.openreferraluk.org/",
                            "isExternal": true
                        }
                    ]
                },
                "url": {
                    "key": "homeContent",
                    "url": "https://admin.beta.openreferraluk.org/home-page"
                }
            }
        ],
        isError: false,
        isFetching: false,
         },
          "https://admin.beta.openreferraluk.org/home-page"
      ]);

});

afterAll(() => {
    fetch.resetMocks();
})

jest.mock("./helpers/dataFetch");

const mainMenu = [
  {
      "id": 1,
      "link": "/",
      "label": "Home",
      "sub_menu": null,
      "published_at": "2021-03-31T10:00:59.000Z",
      "created_at": "2021-03-31T09:45:51.000Z",
      "updated_at": "2021-03-31T10:00:59.000Z",
      "ShowOnFooter": null
  },
  {
      "id": 2,
      "link": "/about-standard",
      "label": "About Open Referral UK",
      "sub_menu": 1,
      "published_at": "2021-03-31T10:00:55.000Z",
      "created_at": "2021-03-31T09:46:16.000Z",
      "updated_at": "2021-05-04T07:58:28.000Z",
      "ShowOnFooter": true
  },
  {
      "id": 3,
      "link": "/how-it-works",
      "label": "How it works",
      "sub_menu": 2,
      "published_at": "2021-03-31T09:51:53.000Z",
      "created_at": "2021-03-31T09:51:51.000Z",
      "updated_at": "2021-04-19T09:57:04.000Z",
      "ShowOnFooter": true
  },
  {
      "id": 4,
      "link": "/community",
      "label": "Community",
      "sub_menu": 3,
      "published_at": "2021-03-31T10:26:30.000Z",
      "created_at": "2021-03-31T10:26:22.000Z",
      "updated_at": "2021-05-03T14:05:55.000Z",
      "ShowOnFooter": true
  },
  {
      "id": 6,
      "link": "/contact-us",
      "label": "Contact us",
      "sub_menu": 5,
      "published_at": "2021-03-31T10:27:06.000Z",
      "created_at": "2021-03-31T10:27:04.000Z",
      "updated_at": "2021-05-03T14:06:02.000Z",
      "ShowOnFooter": true
  }
]

describe('loading state is rendered', () => {
    let data;
    let menuItems

    beforeEach(() => {
        data =  {
            "id": 1,
            "introParagraph": "<h2>Open data standards for community services</h2><p>Local government organisations and services collect large amounts of information and data. This is presented in different formats and often collected multiple times and in inconsistent ways.</p><p>Adopting an <a href=\"https://openreferraluk.org/about-standard#section-2-heading\">open data standard</a> helps to solve this problem.</p>",
            "BenefitsAndOpportunities": "<h3>What are the benefits?</h3><p>Adopting the Open Referral UK standard for community services data can enable the following benefits for your organisation, area and service users:</p><ul><li>Easy to access, accurate and reliable information on services</li><li>Partner with and share information and knowledge with other local authorities, organisations and stakeholders</li><li>Avoid duplication of information and ‘reinventing the wheel’ for every directory</li><li>Give users of the service what they need and not limited to one organisation - more holistic approach rather than working in silos</li><li>Saves money and resources by capturing data once and means frontline workers and advocates have the necessary information at their fingertips</li></ul><p>See how the standard helps you to realise these benefits, <a href=\"/how-it-works/standard-features\">features of the standard</a></p><p>&nbsp;</p>",
            "published_at": "2021-04-12T16:31:20.000Z",
            "created_at": "2021-04-12T16:30:01.000Z",
            "updated_at": "2021-06-17T14:50:27.000Z",
            "heroBanner": {
                "id": 1,
                "title": "Making it easy to publish, find and use community services data",
                "body": "Open Referral UK is an open data standard.  A standard establishes a consistent way of publishing and describing information. This means people can get the information they need more quickly and easily, and helps to create joined up local communities and services."
            },
            "PullQuote": {
                "id": 1,
                "quote": "The services out there can change peoples' lives. But if we don't have accurate and reliable information, then we're working with one hand tied behind our back. We have a limited chance of helping them.",
                "Attribution": "– Key worker in Blackburn"
            },
            "CommunityStatsBox": {
                "id": 1,
                "title": "Organisations using Open Referral UK",
                "OrganisationsIntroText": "",
                "numbers": {
                    "id": 1,
                    "considering": 6,
                    "adopting": 4,
                    "adopted": 6
                },
                "CompanyLogo": [
                    {
                        "id": 3,
                        "link": "https://www.buckinghamshire.gov.uk/",
                        "CompanyLogo": {
                            "id": 6,
                            "name": "BC blue landscape logo PNG original 4386x1192px.png",
                            "alternativeText": "",
                            "caption": "",
                            "width": 4386,
                            "height": 1192,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_BC blue landscape logo PNG original 4386x1192px.png",
                                    "hash": "thumbnail_BC_blue_landscape_logo_PNG_original_4386x1192px_2b52088f80",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 245,
                                    "height": 67,
                                    "size": 13.38,
                                    "path": null,
                                    "url": "/uploads/thumbnail_BC_blue_landscape_logo_PNG_original_4386x1192px_2b52088f80.png"
                                },
                                "large": {
                                    "name": "large_BC blue landscape logo PNG original 4386x1192px.png",
                                    "hash": "large_BC_blue_landscape_logo_PNG_original_4386x1192px_2b52088f80",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 1000,
                                    "height": 272,
                                    "size": 77.43,
                                    "path": null,
                                    "url": "/uploads/large_BC_blue_landscape_logo_PNG_original_4386x1192px_2b52088f80.png"
                                },
                                "medium": {
                                    "name": "medium_BC blue landscape logo PNG original 4386x1192px.png",
                                    "hash": "medium_BC_blue_landscape_logo_PNG_original_4386x1192px_2b52088f80",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 750,
                                    "height": 204,
                                    "size": 55.65,
                                    "path": null,
                                    "url": "/uploads/medium_BC_blue_landscape_logo_PNG_original_4386x1192px_2b52088f80.png"
                                },
                                "small": {
                                    "name": "small_BC blue landscape logo PNG original 4386x1192px.png",
                                    "hash": "small_BC_blue_landscape_logo_PNG_original_4386x1192px_2b52088f80",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 500,
                                    "height": 136,
                                    "size": 33.88,
                                    "path": null,
                                    "url": "/uploads/small_BC_blue_landscape_logo_PNG_original_4386x1192px_2b52088f80.png"
                                }
                            },
                            "hash": "BC_blue_landscape_logo_PNG_original_4386x1192px_2b52088f80",
                            "ext": ".png",
                            "mime": "image/png",
                            "size": 116.7,
                            "url": "/uploads/BC_blue_landscape_logo_PNG_original_4386x1192px_2b52088f80.png",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "created_at": "2021-04-15T12:05:31.000Z",
                            "updated_at": "2021-04-15T12:05:31.000Z"
                        }
                    },
                    {
                        "id": 4,
                        "link": "https://wearefuturegov.com/",
                        "CompanyLogo": {
                            "id": 7,
                            "name": "futuregov_logo_rgb.png",
                            "alternativeText": "",
                            "caption": "",
                            "width": 1445,
                            "height": 247,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_futuregov_logo_rgb.png",
                                    "hash": "thumbnail_futuregov_logo_rgb_8477613d5d",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 245,
                                    "height": 42,
                                    "size": 4.91,
                                    "path": null,
                                    "url": "/uploads/thumbnail_futuregov_logo_rgb_8477613d5d.png"
                                },
                                "large": {
                                    "name": "large_futuregov_logo_rgb.png",
                                    "hash": "large_futuregov_logo_rgb_8477613d5d",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 1000,
                                    "height": 171,
                                    "size": 23.68,
                                    "path": null,
                                    "url": "/uploads/large_futuregov_logo_rgb_8477613d5d.png"
                                },
                                "medium": {
                                    "name": "medium_futuregov_logo_rgb.png",
                                    "hash": "medium_futuregov_logo_rgb_8477613d5d",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 750,
                                    "height": 128,
                                    "size": 16.37,
                                    "path": null,
                                    "url": "/uploads/medium_futuregov_logo_rgb_8477613d5d.png"
                                },
                                "small": {
                                    "name": "small_futuregov_logo_rgb.png",
                                    "hash": "small_futuregov_logo_rgb_8477613d5d",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 500,
                                    "height": 85,
                                    "size": 10.51,
                                    "path": null,
                                    "url": "/uploads/small_futuregov_logo_rgb_8477613d5d.png"
                                }
                            },
                            "hash": "futuregov_logo_rgb_8477613d5d",
                            "ext": ".png",
                            "mime": "image/png",
                            "size": 12.13,
                            "url": "/uploads/futuregov_logo_rgb_8477613d5d.png",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "created_at": "2021-04-15T12:06:22.000Z",
                            "updated_at": "2021-04-15T12:06:22.000Z"
                        }
                    },
                    {
                        "id": 8,
                        "link": "https://www.blackburn.gov.uk/",
                        "CompanyLogo": {
                            "id": 11,
                            "name": "blackburn-with-darwen.png",
                            "alternativeText": "",
                            "caption": "",
                            "width": 960,
                            "height": 212,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_blackburn-with-darwen.png",
                                    "hash": "thumbnail_blackburn_with_darwen_e4622af3a5",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 245,
                                    "height": 54,
                                    "size": 9.6,
                                    "path": null,
                                    "url": "/uploads/thumbnail_blackburn_with_darwen_e4622af3a5.png"
                                },
                                "medium": {
                                    "name": "medium_blackburn-with-darwen.png",
                                    "hash": "medium_blackburn_with_darwen_e4622af3a5",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 750,
                                    "height": 166,
                                    "size": 47.26,
                                    "path": null,
                                    "url": "/uploads/medium_blackburn_with_darwen_e4622af3a5.png"
                                },
                                "small": {
                                    "name": "small_blackburn-with-darwen.png",
                                    "hash": "small_blackburn_with_darwen_e4622af3a5",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 500,
                                    "height": 110,
                                    "size": 26.99,
                                    "path": null,
                                    "url": "/uploads/small_blackburn_with_darwen_e4622af3a5.png"
                                }
                            },
                            "hash": "blackburn_with_darwen_e4622af3a5",
                            "ext": ".png",
                            "mime": "image/png",
                            "size": 17.95,
                            "url": "/uploads/blackburn_with_darwen_e4622af3a5.png",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "created_at": "2021-04-16T12:30:30.000Z",
                            "updated_at": "2021-04-16T12:30:30.000Z"
                        }
                    },
                    {
                        "id": 9,
                        "link": "https://www.elmbridge.gov.uk/",
                        "CompanyLogo": {
                            "id": 12,
                            "name": "elmbridge-web-logo.png",
                            "alternativeText": "",
                            "caption": "",
                            "width": 266,
                            "height": 79,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_elmbridge-web-logo.png",
                                    "hash": "thumbnail_elmbridge_web_logo_529618c0a4",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 245,
                                    "height": 73,
                                    "size": 26.61,
                                    "path": null,
                                    "url": "/uploads/thumbnail_elmbridge_web_logo_529618c0a4.png"
                                }
                            },
                            "hash": "elmbridge_web_logo_529618c0a4",
                            "ext": ".png",
                            "mime": "image/png",
                            "size": 13.22,
                            "url": "/uploads/elmbridge_web_logo_529618c0a4.png",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "created_at": "2021-04-16T12:32:20.000Z",
                            "updated_at": "2021-04-16T12:32:20.000Z"
                        }
                    },
                    {
                        "id": 12,
                        "link": "https://www.placecube.com/",
                        "CompanyLogo": {
                            "id": 15,
                            "name": "Placecube-Horizontal-BLK_4x.png",
                            "alternativeText": "",
                            "caption": "",
                            "width": 1490,
                            "height": 349,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_Placecube-Horizontal-BLK_4x.png",
                                    "hash": "thumbnail_Placecube_Horizontal_BLK_4x_9aef2d6c98",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 245,
                                    "height": 57,
                                    "size": 4.61,
                                    "path": null,
                                    "url": "/uploads/thumbnail_Placecube_Horizontal_BLK_4x_9aef2d6c98.png"
                                },
                                "large": {
                                    "name": "large_Placecube-Horizontal-BLK_4x.png",
                                    "hash": "large_Placecube_Horizontal_BLK_4x_9aef2d6c98",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 1000,
                                    "height": 234,
                                    "size": 23.06,
                                    "path": null,
                                    "url": "/uploads/large_Placecube_Horizontal_BLK_4x_9aef2d6c98.png"
                                },
                                "medium": {
                                    "name": "medium_Placecube-Horizontal-BLK_4x.png",
                                    "hash": "medium_Placecube_Horizontal_BLK_4x_9aef2d6c98",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 750,
                                    "height": 176,
                                    "size": 16.23,
                                    "path": null,
                                    "url": "/uploads/medium_Placecube_Horizontal_BLK_4x_9aef2d6c98.png"
                                },
                                "small": {
                                    "name": "small_Placecube-Horizontal-BLK_4x.png",
                                    "hash": "small_Placecube_Horizontal_BLK_4x_9aef2d6c98",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 500,
                                    "height": 117,
                                    "size": 10.25,
                                    "path": null,
                                    "url": "/uploads/small_Placecube_Horizontal_BLK_4x_9aef2d6c98.png"
                                }
                            },
                            "hash": "Placecube_Horizontal_BLK_4x_9aef2d6c98",
                            "ext": ".png",
                            "mime": "image/png",
                            "size": 14.52,
                            "url": "/uploads/Placecube_Horizontal_BLK_4x_9aef2d6c98.png",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "created_at": "2021-04-16T12:36:33.000Z",
                            "updated_at": "2021-04-16T12:36:33.000Z"
                        }
                    },
                    {
                        "id": 25,
                        "link": "http://www.publicpartnerships.co.uk/",
                        "CompanyLogo": {
                            "id": 723,
                            "name": "test-ppl-logo-pngv2.png",
                            "alternativeText": "",
                            "caption": "",
                            "width": 293,
                            "height": 62,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_test-ppl-logo-pngv2.png",
                                    "hash": "thumbnail_test_ppl_logo_pngv2_f95107f2eb",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 245,
                                    "height": 52,
                                    "size": 7.13,
                                    "path": null,
                                    "url": "/uploads/thumbnail_test_ppl_logo_pngv2_f95107f2eb.png"
                                }
                            },
                            "hash": "test_ppl_logo_pngv2_f95107f2eb",
                            "ext": ".png",
                            "mime": "image/png",
                            "size": 5.01,
                            "url": "/uploads/test_ppl_logo_pngv2_f95107f2eb.png",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "created_at": "2021-04-27T11:21:11.000Z",
                            "updated_at": "2021-04-27T11:21:11.000Z"
                        }
                    },
                    {
                        "id": 28,
                        "link": "https://www.local.gov.uk/",
                        "CompanyLogo": {
                            "id": 709,
                            "name": "LGA-logo.png",
                            "alternativeText": "",
                            "caption": "",
                            "width": 650,
                            "height": 386,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_LGA-logo.png",
                                    "hash": "thumbnail_LGA_logo_727e8125f3",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 245,
                                    "height": 145,
                                    "size": 17.33,
                                    "path": null,
                                    "url": "/uploads/thumbnail_LGA_logo_727e8125f3.png"
                                },
                                "small": {
                                    "name": "small_LGA-logo.png",
                                    "hash": "small_LGA_logo_727e8125f3",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 500,
                                    "height": 297,
                                    "size": 39.83,
                                    "path": null,
                                    "url": "/uploads/small_LGA_logo_727e8125f3.png"
                                }
                            },
                            "hash": "LGA_logo_727e8125f3",
                            "ext": ".png",
                            "mime": "image/png",
                            "size": 12.86,
                            "url": "/uploads/LGA_logo_727e8125f3.png",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "created_at": "2021-04-23T09:24:34.000Z",
                            "updated_at": "2021-04-23T13:54:51.000Z"
                        }
                    },
                    {
                        "id": 29,
                        "link": "https://localdigital.gov.uk/",
                        "CompanyLogo": {
                            "id": 708,
                            "name": "mhclg.png",
                            "alternativeText": "",
                            "caption": "",
                            "width": 400,
                            "height": 220,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_mhclg.png",
                                    "hash": "thumbnail_mhclg_c20bdeab59",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 245,
                                    "height": 135,
                                    "size": 12.63,
                                    "path": null,
                                    "url": "/uploads/thumbnail_mhclg_c20bdeab59.png"
                                }
                            },
                            "hash": "mhclg_c20bdeab59",
                            "ext": ".png",
                            "mime": "image/png",
                            "size": 19.47,
                            "url": "/uploads/mhclg_c20bdeab59.png",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "created_at": "2021-04-23T09:23:24.000Z",
                            "updated_at": "2021-04-23T09:23:24.000Z"
                        }
                    },
                    {
                        "id": 45,
                        "link": "https://www.wellaware.org.uk",
                        "CompanyLogo": {
                            "id": 722,
                            "name": "wellaware-logo.png",
                            "alternativeText": "",
                            "caption": "",
                            "width": 400,
                            "height": 227,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_wellaware-logo.png",
                                    "hash": "thumbnail_wellaware_logo_1089285840",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 245,
                                    "height": 139,
                                    "size": 13.07,
                                    "path": null,
                                    "url": "/uploads/thumbnail_wellaware_logo_1089285840.png"
                                }
                            },
                            "hash": "wellaware_logo_1089285840",
                            "ext": ".png",
                            "mime": "image/png",
                            "size": 7.03,
                            "url": "/uploads/wellaware_logo_1089285840.png",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "created_at": "2021-04-27T11:07:54.000Z",
                            "updated_at": "2021-04-27T11:07:54.000Z"
                        }
                    },
                    {
                        "id": 46,
                        "link": "https://www.vidavia.com/",
                        "CompanyLogo": {
                            "id": 23,
                            "name": "vidavia-dark-turqoise-url-h140_0.png",
                            "alternativeText": "",
                            "caption": "",
                            "width": 282,
                            "height": 140,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_vidavia-dark-turqoise-url-h140_0.png",
                                    "hash": "thumbnail_vidavia_dark_turqoise_url_h140_0_a760d150d4",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 245,
                                    "height": 122,
                                    "size": 22.86,
                                    "path": null,
                                    "url": "/uploads/thumbnail_vidavia_dark_turqoise_url_h140_0_a760d150d4.png"
                                }
                            },
                            "hash": "vidavia_dark_turqoise_url_h140_0_a760d150d4",
                            "ext": ".png",
                            "mime": "image/png",
                            "size": 13.41,
                            "url": "/uploads/vidavia_dark_turqoise_url_h140_0_a760d150d4.png",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "created_at": "2021-04-22T10:12:51.000Z",
                            "updated_at": "2021-04-22T10:12:51.000Z"
                        }
                    },
                    {
                        "id": 47,
                        "link": "http://www.hull.gov.uk/",
                        "CompanyLogo": {
                            "id": 27,
                            "name": "hull.jpeg",
                            "alternativeText": "",
                            "caption": "",
                            "width": 250,
                            "height": 107,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_hull.jpeg",
                                    "hash": "thumbnail_hull_4920e90d18",
                                    "ext": ".jpeg",
                                    "mime": "image/jpeg",
                                    "width": 245,
                                    "height": 105,
                                    "size": 6.53,
                                    "path": null,
                                    "url": "/uploads/thumbnail_hull_4920e90d18.jpeg"
                                }
                            },
                            "hash": "hull_4920e90d18",
                            "ext": ".jpeg",
                            "mime": "image/jpeg",
                            "size": 6.17,
                            "url": "/uploads/hull_4920e90d18.jpeg",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "created_at": "2021-04-22T12:42:54.000Z",
                            "updated_at": "2021-04-22T12:42:54.000Z"
                        }
                    },
                    {
                        "id": 48,
                        "link": "https://www.healthierlsc.co.uk/",
                        "CompanyLogo": {
                            "id": 721,
                            "name": "2017_HLSCFullColourLogo.png",
                            "alternativeText": "",
                            "caption": "",
                            "width": 1415,
                            "height": 417,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_2017_HLSCFullColourLogo.png",
                                    "hash": "thumbnail_2017_HLSC_Full_Colour_Logo_f3149d1c9f",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 245,
                                    "height": 72,
                                    "size": 15.63,
                                    "path": null,
                                    "url": "/uploads/thumbnail_2017_HLSC_Full_Colour_Logo_f3149d1c9f.png"
                                },
                                "large": {
                                    "name": "large_2017_HLSCFullColourLogo.png",
                                    "hash": "large_2017_HLSC_Full_Colour_Logo_f3149d1c9f",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 1000,
                                    "height": 295,
                                    "size": 71.95,
                                    "path": null,
                                    "url": "/uploads/large_2017_HLSC_Full_Colour_Logo_f3149d1c9f.png"
                                },
                                "medium": {
                                    "name": "medium_2017_HLSCFullColourLogo.png",
                                    "hash": "medium_2017_HLSC_Full_Colour_Logo_f3149d1c9f",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 750,
                                    "height": 221,
                                    "size": 52.54,
                                    "path": null,
                                    "url": "/uploads/medium_2017_HLSC_Full_Colour_Logo_f3149d1c9f.png"
                                },
                                "small": {
                                    "name": "small_2017_HLSCFullColourLogo.png",
                                    "hash": "small_2017_HLSC_Full_Colour_Logo_f3149d1c9f",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 500,
                                    "height": 147,
                                    "size": 34.07,
                                    "path": null,
                                    "url": "/uploads/small_2017_HLSC_Full_Colour_Logo_f3149d1c9f.png"
                                }
                            },
                            "hash": "2017_HLSC_Full_Colour_Logo_f3149d1c9f",
                            "ext": ".png",
                            "mime": "image/png",
                            "size": 27.31,
                            "url": "/uploads/2017_HLSC_Full_Colour_Logo_f3149d1c9f.png",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "created_at": "2021-04-27T11:01:13.000Z",
                            "updated_at": "2021-04-27T11:01:13.000Z"
                        }
                    },
                    {
                        "id": 49,
                        "link": "https://www.docandtee.com/",
                        "CompanyLogo": {
                            "id": 736,
                            "name": "doc&tee.jpeg",
                            "alternativeText": "",
                            "caption": "",
                            "width": 2624,
                            "height": 778,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_doc&tee.jpeg",
                                    "hash": "thumbnail_doc_and_tee_bf3c71d417",
                                    "ext": ".jpeg",
                                    "mime": "image/jpeg",
                                    "width": 245,
                                    "height": 73,
                                    "size": 3.85,
                                    "path": null,
                                    "url": "/uploads/thumbnail_doc_and_tee_bf3c71d417.jpeg"
                                },
                                "large": {
                                    "name": "large_doc&tee.jpeg",
                                    "hash": "large_doc_and_tee_bf3c71d417",
                                    "ext": ".jpeg",
                                    "mime": "image/jpeg",
                                    "width": 1000,
                                    "height": 296,
                                    "size": 17.24,
                                    "path": null,
                                    "url": "/uploads/large_doc_and_tee_bf3c71d417.jpeg"
                                },
                                "medium": {
                                    "name": "medium_doc&tee.jpeg",
                                    "hash": "medium_doc_and_tee_bf3c71d417",
                                    "ext": ".jpeg",
                                    "mime": "image/jpeg",
                                    "width": 750,
                                    "height": 222,
                                    "size": 12.65,
                                    "path": null,
                                    "url": "/uploads/medium_doc_and_tee_bf3c71d417.jpeg"
                                },
                                "small": {
                                    "name": "small_doc&tee.jpeg",
                                    "hash": "small_doc_and_tee_bf3c71d417",
                                    "ext": ".jpeg",
                                    "mime": "image/jpeg",
                                    "width": 500,
                                    "height": 148,
                                    "size": 8.07,
                                    "path": null,
                                    "url": "/uploads/small_doc_and_tee_bf3c71d417.jpeg"
                                }
                            },
                            "hash": "doc_and_tee_bf3c71d417",
                            "ext": ".jpeg",
                            "mime": "image/jpeg",
                            "size": 52.72,
                            "url": "/uploads/doc_and_tee_bf3c71d417.jpeg",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "created_at": "2021-04-29T16:06:08.000Z",
                            "updated_at": "2021-04-29T16:06:08.000Z"
                        }
                    },
                    {
                        "id": 50,
                        "link": "https://www.bristol.gov.uk/",
                        "CompanyLogo": {
                            "id": 10,
                            "name": "Bristol-City-Council-logo.png",
                            "alternativeText": "",
                            "caption": "",
                            "width": 1200,
                            "height": 1219,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_Bristol-City-Council-logo.png",
                                    "hash": "thumbnail_Bristol_City_Council_logo_ddcd6a845e",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 154,
                                    "height": 156,
                                    "size": 26.42,
                                    "path": null,
                                    "url": "/uploads/thumbnail_Bristol_City_Council_logo_ddcd6a845e.png"
                                },
                                "large": {
                                    "name": "large_Bristol-City-Council-logo.png",
                                    "hash": "large_Bristol_City_Council_logo_ddcd6a845e",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 984,
                                    "height": 1000,
                                    "size": 333.49,
                                    "path": null,
                                    "url": "/uploads/large_Bristol_City_Council_logo_ddcd6a845e.png"
                                },
                                "medium": {
                                    "name": "medium_Bristol-City-Council-logo.png",
                                    "hash": "medium_Bristol_City_Council_logo_ddcd6a845e",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 738,
                                    "height": 750,
                                    "size": 226.74,
                                    "path": null,
                                    "url": "/uploads/medium_Bristol_City_Council_logo_ddcd6a845e.png"
                                },
                                "small": {
                                    "name": "small_Bristol-City-Council-logo.png",
                                    "hash": "small_Bristol_City_Council_logo_ddcd6a845e",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 492,
                                    "height": 500,
                                    "size": 129.09,
                                    "path": null,
                                    "url": "/uploads/small_Bristol_City_Council_logo_ddcd6a845e.png"
                                }
                            },
                            "hash": "Bristol_City_Council_logo_ddcd6a845e",
                            "ext": ".png",
                            "mime": "image/png",
                            "size": 153.25,
                            "url": "/uploads/Bristol_City_Council_logo_ddcd6a845e.png",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "created_at": "2021-04-16T12:28:57.000Z",
                            "updated_at": "2021-04-16T12:28:57.000Z"
                        }
                    },
                    {
                        "id": 72,
                        "link": "https://digitalcoproduction.co.uk",
                        "CompanyLogo": {
                            "id": 744,
                            "name": "DC logo full - 1000 px wide.png",
                            "alternativeText": "",
                            "caption": "",
                            "width": 1000,
                            "height": 244,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_DC logo full - 1000 px wide.png",
                                    "hash": "thumbnail_DC_logo_full_1000_px_wide_5a0266280f",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 245,
                                    "height": 60,
                                    "size": 9.17,
                                    "path": null,
                                    "url": "/uploads/thumbnail_DC_logo_full_1000_px_wide_5a0266280f.png"
                                },
                                "medium": {
                                    "name": "medium_DC logo full - 1000 px wide.png",
                                    "hash": "medium_DC_logo_full_1000_px_wide_5a0266280f",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 750,
                                    "height": 183,
                                    "size": 32.61,
                                    "path": null,
                                    "url": "/uploads/medium_DC_logo_full_1000_px_wide_5a0266280f.png"
                                },
                                "small": {
                                    "name": "small_DC logo full - 1000 px wide.png",
                                    "hash": "small_DC_logo_full_1000_px_wide_5a0266280f",
                                    "ext": ".png",
                                    "mime": "image/png",
                                    "width": 500,
                                    "height": 122,
                                    "size": 20.59,
                                    "path": null,
                                    "url": "/uploads/small_DC_logo_full_1000_px_wide_5a0266280f.png"
                                }
                            },
                            "hash": "DC_logo_full_1000_px_wide_5a0266280f",
                            "ext": ".png",
                            "mime": "image/png",
                            "size": 15.38,
                            "url": "/uploads/DC_logo_full_1000_px_wide_5a0266280f.png",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "created_at": "2021-06-17T13:43:38.000Z",
                            "updated_at": "2021-06-17T13:43:38.000Z"
                        }
                    },
                    {
                        "flexible": "",
                        "id": 1000
                    }
                ]
            },
            "caseStudiesLink": {
                "id": 78,
                "TextToDisplay": "Read our case studies",
                "url": "/community/case-studies",
                "isExternal": false
            },
            "benefitsSection": null,
            "readNextLinks": [
                {
                    "id": 2,
                    "TextToDisplay": "Find out more about how the standard works",
                    "url": "/how-it-works",
                    "isExternal": false
                },
                {
                    "id": 3,
                    "TextToDisplay": "Information on data structure and tools for the standard. ",
                    "url": "https://developers.openreferraluk.org/",
                    "isExternal": true
                }
            ]
          };
        menuItems = [
            {
                "id": 1,
                "link": "/",
                "label": "Home",
                "sub_menu": null,
                "published_at": "2021-03-31T10:00:59.000Z",
                "created_at": "2021-03-31T09:45:51.000Z",
                "updated_at": "2021-03-31T10:00:59.000Z",
                "ShowOnFooter": null
            },
            {
                "id": 2,
                "link": "/about-standard",
                "label": "About Open Referral UK",
                "sub_menu": 1,
                "published_at": "2021-03-31T10:00:55.000Z",
                "created_at": "2021-03-31T09:46:16.000Z",
                "updated_at": "2021-05-04T07:58:28.000Z",
                "ShowOnFooter": true
            },
            {
                "id": 3,
                "link": "/how-it-works",
                "label": "How it works",
                "sub_menu": 2,
                "published_at": "2021-03-31T09:51:53.000Z",
                "created_at": "2021-03-31T09:51:51.000Z",
                "updated_at": "2021-04-19T09:57:04.000Z",
                "ShowOnFooter": true
            },
            {
                "id": 4,
                "link": "/community",
                "label": "Community",
                "sub_menu": 3,
                "published_at": "2021-03-31T10:26:30.000Z",
                "created_at": "2021-03-31T10:26:22.000Z",
                "updated_at": "2021-05-03T14:05:55.000Z",
                "ShowOnFooter": true
            },
            {
                "id": 6,
                "link": "/contact-us",
                "label": "Contact us",
                "sub_menu": 5,
                "published_at": "2021-03-31T10:27:06.000Z",
                "created_at": "2021-03-31T10:27:04.000Z",
                "updated_at": "2021-05-03T14:06:02.000Z",
                "ShowOnFooter": true
            }
          ];
    })

    test("when fetching is true", async () => {
        
        useOukapi.mockReturnValue([{
            data: [],
            isFetching: true,
            isError: false,
           }, "https://admin.beta.openreferraluk.org/home-page"
          ]);
          const { result } = renderHook(() => useOukapi([{"key": "menuContent", "url": "https://admin.beta.openreferraluk.org/top-menus"}, {"key": "footerContent", "url": "https://admin.beta.openreferraluk.org/footer"}, {"key": "homeContent", "url": "https://admin.beta.openreferraluk.org/home-page"}]));
        render(<App />, { wrapper: MemoryRouter });
        expect(result.current).toStrictEqual([{
           data: [],
           isFetching: true,
             isError: false
           },
            'https://admin.beta.openreferraluk.org/home-page'
        ]);
       const loadingElement = await screen.findByText('Loading...');
        expect(loadingElement).toBeInTheDocument();  

    });
});
    
   
    describe('show error page on error', () => {
       
            let err = null;
    
              function Fallback({error}) {
                  err = error;
                  return <p>An error was thrown</p>
              }

       

        test("when no data and isError is false it should show an error", async () => {
        
            useOukapi.mockReturnValue([{
                data: [],
                isFetching: false,
                isError: false,
               }, "https://admin.beta.openreferraluk.org/home-page"
              ]);
              
    
              render (
                  <ErrorBoundary FallbackComponent={Fallback}>
                  <App /></ErrorBoundary>
                ,  { wrapper: MemoryRouter }
              );
              await waitFor(() => screen.getByText('An error was thrown'));
            expect(err).toEqual(Error("Data load failure"))
    
        });


        test("when data length is 0", async () => {
        
            useOukapi.mockReturnValue([{
                data: [],
                isFetching: false,
                isError: true,
               }, "https://admin.beta.openreferraluk.org/home-page"
              ]);
    
              render (
                  <ErrorBoundary FallbackComponent={Fallback}>
                  
                  <App /></ErrorBoundary>
                ,  { wrapper: MemoryRouter }
              );
              await waitFor(() => screen.getByText('An error was thrown'));
            expect(err).toEqual(Error("Data load failure"))
    
        });

        test("error is rendered when data is []", async () => {
        
            useOukapi.mockReturnValue([{
                data: [],
                isFetching: false,
                isError: false,
               }, "https://admin.beta.openreferraluk.org/footer"
              ]);
    
            render(<ErrorBoundary FallbackComponent={Fallback}>
            <App /></ErrorBoundary>, { wrapper: MemoryRouter });
            expect(useOukapi).toHaveBeenCalledTimes(3);
            expect(useOukapi).toBeCalledWith([{"key": "menuContent", "url": "https://admin.beta.openreferraluk.org/top-menus"}, {"key": "footerContent", "url": "https://admin.beta.openreferraluk.org/footer"}, {"key": "homeContent", "url": "https://admin.beta.openreferraluk.org/home-page"}]);
            await waitFor(() => screen.getByText('An error was thrown'));
            expect(err).toEqual(Error("Data load failure"))
    
        });
    
        test("when isError is true", async () => {
            
            useOukapi.mockReturnValue([{
                data: {},
                isFetching: false,
                isError: true,
               }, "https://admin.beta.openreferraluk.org/home-page"
              ]);
              let err = null;
    
              function Fallback({error}) {
                  err = error;
                  return <p>An error was thrown</p>
              }
    
              render (
                  <ErrorBoundary FallbackComponent={Fallback}>
                  <App /></ErrorBoundary>
                ,  { wrapper: MemoryRouter }
              );
              await waitFor(() => screen.getByText('An error was thrown'));
            expect(err).toEqual(Error("Data load failure"))
    
        });

        test ('should show an error on failure', async() => {
            useOukapi.mockReturnValue([{
                data: {},
                isFetching: false,
                isError: true,
               }, "https://admin.beta.openreferraluk.org/home-page"
              ]);
    
    
              const fallbackRender = jest.fn(() => 'Unable to load the requested page click here to try again. If the problem persists please contact the site administrator at hello@openreferraluk.org');
                 render (
                    <ErrorBoundary fallbackRender={fallbackRender}>
                    <App /></ErrorBoundary>
                  ,  { wrapper: MemoryRouter }
                )
                
                const boundaryElement = await screen.findByText('Unable to load the requested page click here to try again.', {exact: false});
                //expect(fetchLandingPageContent).toHaveBeenCalled();
                expect(boundaryElement).toBeInTheDocument();
                expect(fallbackRender).toHaveBeenCalled();
                
        });
    
    });

    describe("renders header correctly", () => {

        let banner;

        beforeEach(() => {
            render(<App  />, { wrapper: MemoryRouter })
            banner = screen.getByRole("banner");
        });
    
        test("Has logo", async() => {     
            expect(within(banner).getByAltText("Open Referral UK")).toBeInTheDocument();
        });

        test("Has link", async() => {     
            expect(within(banner).getByAltText("Open Referral UK").closest('a').href).toBe("http://localhost/");
        });

        test("Component renders link to https://developers.openreferraluk.org/", () => {
        expect(within(banner).getAllByText("For developers").length).toEqual(2);
        expect(within(banner).getAllByText("For developers")[0].href).toBe(`https://developers.openreferraluk.org/`);
        expect(within(banner).getAllByText("For developers")[1].href).toBe(`https://developers.openreferraluk.org/`);
     });

    });        
    
   
describe("renders navigation correctly", () => {

    let navigation;

    beforeEach(() => {
        render(<App  />, { wrapper: MemoryRouter })
        navigation = screen.getByRole("navigation");
    })
    
    test("Component renders navigation links", () => {
            const navigation = screen.getByRole("navigation");
            expect(within(navigation).getByText("Home")).toBeInTheDocument();
            expect(within(navigation).getByText("About Open Referral UK")).toBeInTheDocument();
            expect(within(navigation).getByText("How it works")).toBeInTheDocument();
            expect(within(navigation).getByText("Community")).toBeInTheDocument();
            expect(within(navigation).getByText("Contact us")).toBeInTheDocument();
    });  

    test("Component renders link to /", () => {       
        expect(screen.getByText("Home").href).toBe(`${BASE_URL}/`);
    });

    test("Component renders link to /about-standard", () => {
        expect(screen.getByText("About Open Referral UK").href).toBe(`${BASE_URL}/about-standard`);
    });

    test("Component renders link to /how-it-works", () => {
       expect(within(navigation).getByText("How it works").href).toBe(`${BASE_URL}/how-it-works`);
    });

    test("Component renders link to /community", () => {
        expect(within(navigation).getByText("Community").href).toBe(`${BASE_URL}/community`);
     });

     test("Component renders link to https://developers.openreferraluk.org/", () => {
        expect(within(navigation).getByText("For developers").href).toBe(`https://developers.openreferraluk.org/`);
     });
    
});

describe("renders page body correctly", () => {

    test("renders only one h1 on page", () => {
        render(<App  />, { wrapper: MemoryRouter })
        expect(screen.getAllByRole("heading", { level: 1}).length).toEqual(1);
    });
    
}); 


