interface HeroData {
    title:string;
    description?:string;
    cta :ctaItem[ ]
}
interface ctaItem {
            href?:string;
            label?:string;
}
export default HeroData;