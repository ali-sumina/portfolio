export interface NavPage {
    data: {
        attributes: {
            PhoneNumber: string;
            MyEmail: string;
            LinkedinLink: string;
            BehanceLink: string;
            InstagramLink: string;
            PhoneIcon: {
                data: {
                    attributes: {
                        url: string;
                    }
                }
            };

            EmailIcon: {
                data: {
                    attributes: {
                        url: string;
                    }
                }
            }; 

            InstagramIcon: {
                data: {
                    attributes: {
                        url: string;
                    }
                }
            };

            BehanceIcon: {
                data: {
                    attributes: {
                        url: string;
                    }
                }
            };

            LinkedinIcon: {
                data: {
                    attributes: {
                        url: string;
                    }
                }
            }

            Logo: {
                data: {
                    attributes: {
                        url: string;
                    }
                }

            }

        }
    }
}