export interface About {
    data: {
        attributes: {
            AboutMe: string;
            MyHeadshot: {
                data: {
                    attributes: {
                        formats: {
                            medium:{
                                url: string
                            }
                        }
                    }
                }
            }

            work_experiences: {
                data: [{
                    attributes: {
                        Position: string;
                        WorkTime: string;
                        WorkPlace: string;
                    }
                }]
            }

            educations: {
                data: [{
                    attributes: {
                        EduLevel: string;
                        University: string;
                        EduYears: string;
                    }
                }]
            }

            // Add Skills Here
        }
    }
}