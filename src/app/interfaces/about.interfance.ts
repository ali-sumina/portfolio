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

            skill_set: {
                data: {
                    attributes: {
                        ui_skill: {
                            data: {
                                attributes: {
                                    Skill: [{
                                        SkillText:string
                                    }],

                                    Tool: [{
                                        SkillText: string
                                    }]
                                }
                            }
                        },

                        ux_skill: {
                            data: {
                                attributes: {
                                    Skill: [{
                                        SkillText:string
                                    }],

                                    Tool: [{
                                        SkillText: string
                                    }]
                                }
                            }
                        }

                        web_dev_skill: {
                            data: {
                                attributes: {
                                    Skill: [{
                                        SkillText:string
                                    }],

                                    Tool: [{
                                        SkillText: string
                                    }]
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}