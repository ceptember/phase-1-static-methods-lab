class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]/g, "");
  } 

  static titleize(string){
    let array = string.split(' '); 
    let newArray = []; 
    let lowerWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    newArray.push(array[0].charAt(0).toUpperCase() + array[0].slice(1).toLowerCase())
    array.shift()

    array.forEach( x => {
      if (lowerWords.includes(x.toLowerCase())){
        newArray.push(x.toLowerCase());
      }
      else {
        newArray.push(x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
      }

    })

    return newArray.join(" "); 
  }

}

let newString = Formatter.titleize("wHere THe wilD things are")
//Formatter.capitalize('test')
//newString = Formatter.sanitize('Amy-Lou x-A12 @#$.com')
console.log(newString); 

