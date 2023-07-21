import { HtmlParser, TagContentType } from "@angular/compiler";

export interface CaseStudy {
    data: {
        attributes: {
            overviewText: string,
            problemText: string,
            keyResText: string,
            timelineText: string,
            userflowText: string,
            userflowName: string,
            userflowList: string,
            userresearchText: string,
            prototypeLink: string,
            infoArchText: string,
            learningsText: string,
            futureIdeasText: string,
            embedVisualSys: string,
            listTitle: string

            research1Title: {
                Heading2: string;
            },
            
            research2Title: {
                Heading2: string;
            }, 

            // hypothesisesTitle: []

            infoArchTitle: string,

            imgCJM: {
                data: {
                    attributes: {
                                url: string
                            }
                        }
                    }

            hypothesisesText: [
                {
                    bulletPoint: string
                },
                
                {
                    bulletPoint: string
                },
                
                {
                    bulletPoint: string

                }
            ]

            embedPersona: {
                data: {
                    attributes: { 
                                url: string
                            }
                        }
                    }
            
            embedSketches: {
                data: {
                    attributes: {
                                url: string;
                            }
                        }
                    }


            embedWireframes: {
                data: [
                    {
                    attributes: {
                                url: string,
                            }
                        }
                    ]

            
                }

            embedMockups: {
                    data: [{
                        attributes: { 
                                    url: string
                                }
                            },
                            {
                                attributes: { 
                                            url: string
                                        }
                                    }
                        ]
                        }
            }

     } }
            
