// Alan is known for referring to the temperature of the apple turnover as Hotter than the sun!. According to space.com the temperature of the sun's corona is 2,000,000 degrees Celsius, but we will ignore the science for now.
// Task

// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

// Note: Input will either be a positive integer (or a string for untyped languages).


//Number or string
//if x > 1000 => It's hotter than the sun!! else => Help yourself to a honeycomb Yorkie for the glovebox.
// square num if 100 return string 

function apple(x){
    return Number(x) * Number(x) > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
}


//Codewars
function apple(x){
    return Math.pow(x, 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.' ;
  }



//Codewars
function apple(x){
  
    if (Math.pow(x,2) > 1000) {
      return "It's hotter than the sun!!";
    } else {
      return "Help yourself to a honeycomb Yorkie for the glovebox.";
    
    }
  
  }