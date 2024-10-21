function tri (arr){
    // si le tableau et 1 ou - il terone le resulat tel quel 
    if (arr.length <= 1) {
        return arr;
    }
    //choisit le dernier élément du tableau comme élément pivot
    let element = arr[arr.length-1];
    //vont contenir les éléments plus petits et plus grands
    let gauche =[];
    let droit = [];

    for (let i=0 ;i <arr.length-1; i++){
        //vont contenir les éléments plus petits et plus grands on le mets dans le taleau gauche
        if (arr [i] < element){
            gauche.push(arr[i]);
        }else{
            // sinon on le mets au tableau droits 
            droit.push(arr[i]);
        }
    } 
    // on combiene entre les 2 taleau on le mets au mileu 
    return [...tri (gauche),element,...tri (droit)];

    }
    let tableau = [5, 0, 11, 1, 13, 6, 8];
console.log(tri(tableau));