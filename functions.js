1.
function arithmetic(a,b)
{
    add=a+b
    sub=a-b
    mul=a*b
    div=a/b
    console.log(add)
    console.log(sub)
    console.log(mul)
    console.log(div)
    
}
arithmetic(5,6)

2.

function square(a)
{
    squ=a*a
    
   console.log(squ)
}
square(4)



3.


function max(a,b)
{
    highest=a>b?a:b
    console.log(highest)
}
max(5,8)



4.
function calculateInterest(amount, rate, years) {
    const totalInterest = (amount * rate * years) / 100;
    return totalInterest;
  }
  const amount = 1000;      
  const rate = 5;          
  const years = 2;         
  
  const interest = calculateInterest(amount, rate, years);
  console.log(`Total Interest: $${interest}`);
  