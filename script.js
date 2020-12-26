
let btnDate = document.getElementById('btnDate');
btnDate.addEventListener("click",function(e){

  	let cdate = new Date();
	console.log(cdate);
	let tempDate  = document.getElementById('newDate').value;
	let newDate = new Date(tempDate);

	if(newDate <= cdate )
    {
     let agesel = document.getElementById('ages');
   let monthsel = document.getElementById('months');
   let daysel = document.getElementById('days');

   let monl = document.getElementById('monthsl');
   let dayl = document.getElementById('daysl');
 
   let cm = cdate.getMonth() + 1;
   let cd = cdate.getDate();
   let bm = newDate.getMonth() + 1;
   let bd = newDate.getDate();

 	const secd = (cdate-newDate)/1000;
    const day = (secd/(24*60*60));
  const ages = Math.floor(day/365.25);
  const months = Math.floor((day % 365.25)/30);
  const days = Math.floor((day % 365.25) % 30);

  let am;
  let ad;
  am = bm - cm;
  ad = bd - cd;
  if ( am <= 0 ) 
  {
  	   am = am + 12;
  	   if (ad < 0) {
  	   	am -= 1;
  	   	ad = ad + 30;
  	   }
  }
  else
  {
  	if (ad < 0) {
  		am -= 1;
  		ad = ad + 30;
  	}
  }
 

	agesel.innerHTML = ages;
    monthsel.innerHTML = months;
    daysel.innerHTML = days;


    monl.innerHTML = am; 
    dayl.innerHTML = ad;

	
}
else{
	alert("Date is larger than today's date.");
}

});





