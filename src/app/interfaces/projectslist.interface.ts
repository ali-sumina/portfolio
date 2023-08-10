export interface Projects {
    data: {
        attributes: {
            projects: {
                data: [{
                    attributes: {
                        ProjectTitle: string;
                        ProjectDescription: string;
                        ProjectLink: string;
                        ProjectImage: {
                            data: {
                                attributes: {
                                    formats:{
                                        medium: {
                                            url: string;
                                        }
                                    }
            
                                }
                            }
                        }
                    }
                }]
            }
            
        }
    }
    
}