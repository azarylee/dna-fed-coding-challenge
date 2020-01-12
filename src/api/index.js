export function getData(kind) {
    var data = require('../../static/data.json');
    switch (kind){
        case 'new_arrivals':
            return data[0];
        case 'lists':
            return data[1];
        case 'post':
            return data[2];
        case 'tabs':
            return data[3];
        default:
            return data;                
    }
    
}