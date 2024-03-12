const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)

    const result=document.querySelector('#results');

    if(height === ''|| height<0 || isNaN(height)){
        result.innerHTML= `please give a valid height ${height}`
    }
    if(weight === ''|| weight<0 || isNaN(weight)){
    result.innerHTML= `please give a valid height ${weight}`
    }
    else{
        const weightguide=document.querySelector('#weight-guide');
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        result.innerHTML=`<span>${bmi}</span>`

      if(bmi > 24.9){
          weightguide.innerHTML=`<span>over-weight your bmi is ${bmi}</span>`
      }else if(bmi < 18.6){
        weightguide.innerHTML=`<span>under weight your bmi is ${bmi}</span>`
      }
      else{
        weightguide.innerHTML=`<span>normal range 18.6-24.9 your bmi is ${bmi} </span>`
      }
    }
})