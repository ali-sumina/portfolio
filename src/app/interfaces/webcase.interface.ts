export interface WebCase {
    data: {
        attributes: {
            overviewText: string,
            challengesText: string,
            keyResText: string,
            timelineText: string,
            CaseName: {
                Heading: string
            }
            Wireframes: null,
            Designs: null,
            VisualSystem: null,
            Sketches: { 
                data: [{
                    attributes: {
                        formats: {
                            medium: {
                                url: string
                            }
                        }
                    }
                }]
            }

        }
    }
}