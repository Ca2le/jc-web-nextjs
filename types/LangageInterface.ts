    export interface ILangage {
        nav_services: string;
        nav_showroom: string;
        nav_contact: string;
        home_h_1: string;
        home_h_2: readonly string[];
        home_h_3: string;
        readmore_txt: string;
        about_h: string;
        about_text: string;
        about_card_1_h: string;
        about_card_1_txt: string;
        about_card_2_h: string;
        about_card_2_txt: string;
        about_card_3_h: string;
        about_card_3_txt: string;
        showroom_h: string;
        showroom_projects: readonly {
            title: string;
            subcategory: string;
            description: string;
            status: string;
            img_cover_hex: string;
            img: string
        }[]
        showroom_text: string;
        showroom_link_text: string;
        foot_h: string;
        copy_mail: string;
        fa_link: string;
        li_link: string;
        foot_copyright: string;
    }
