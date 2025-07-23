interface NavData {
    logo : {
        src?:string;
        alt?:string;
    };
    navMenu:NavItem[];
    btn : {
        href:string;
        label:string;
    }
}
interface NavItem {
    href:string;
    label:string;
}
export default NavData;