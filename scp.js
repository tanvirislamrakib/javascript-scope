var fd = "rakib"; // global scope
console.log(fd);

function me(){
    console.log(fd)
}
me();

// local scope / functoion scope
function my(){
    var num = 666;
    console.log(num);
}
my();

// block scope
{
    let tumi = "what is your name"
    console.log(tumi);
}