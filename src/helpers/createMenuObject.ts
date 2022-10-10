type menuOptions = '' | 'all' | 'dog' | 'cat'| 'fish';

export const createMenuObject = (activeMenu:menuOptions)=>{
    let returnMenu = {
        all: false , 
        dog: false , 
        cat: false , 
        fish: false
    };

    if(activeMenu !== ''){
        returnMenu[activeMenu] = true;
    }
    
    return returnMenu;
}