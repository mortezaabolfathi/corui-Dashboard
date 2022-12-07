const TenHours =[];
let i=9
while(i>=0){
    const now=new Date() //21
    const pastTen = now.getHours() - i; //11/12/13/14/15/16/17/18/19/20   ThenHours.push(pastTen)
    TenHours.push(pastTen)
    i--
}
const DateNow = {
    hours:TenHours
}

export default DateNow;