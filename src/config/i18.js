import langconfig from './config.json'

const i18=({keyword},placeholder='',value)=>{
    const lang=localStorage.getItem("lang");
    
    // return langconfig[lang][keyword];
    const text =langconfig[lang][keyword];
    if(placeholder && value){
        return text.replace(placeholder ,value);

    }

    return text;


}
export default i18;