const challange = ['Website', 'MobileApp', 'WebApp', 'Games'];
const device = ['Mobile Phone', 'Pc', 'Tablet', 'Calculator'];
const leng = ['JS', 'CSS', 'HTML', 'Sketch'];

const num = Math.floor(Math.random()*4)

let all = () => {
    console.log(`You Should Build a ${challange[num]}, with ${device[num]}, in ${leng[num]} leangue.`)
}
all()