const log = (param) => console.log(param);

log("working today........");

 const govHolidays = {
       
      "Jan": "Republic day",
      "date": "26",
      "Day": "1 Day",
       "January": "Pongal",
       "dates": "14 & 15",
        "Days":"2 Days",
}
 
const totalValues = Object.values(govHolidays);
log(totalValues);
 
totalValues.forEach((Jan,date,day) =>{
 console.log(`
              Jan: ${Jan}
              Index:${date}
              Arrvalue:${day}
      
 `);


});

for(let i=0; i<totalValues.length; i++){
      console.log(totalValues[i]);
};

for(k in govHolidays){
      console.log(`
           Keys:${k}
           Values:${govHolidays[k]}

      `);
};
const month ="January february March"
for(val of month){
      console.log(val);
};

const Resume ={
     "Name":"J.Abdulla",
      "Father's Name": "M.Jaffer Ali",
      "Age" : "26",
      "Qualification":  "DCE",
      "Marital Status": "Unmarried",
      "Work Experience": "1 year in Domestic voice process & 2 year in Internationa voice",
      "Intrest": "Music, Gym , Playing , Coding",
      "Mobile Number": "00000000"

}
const resumeValue = Object.values(Resume);
const resumeKey = Object.keys(Resume);

for(let i=0; i<resumeKey.length; i++){
      console.log(resumeKey[i] ,':',resumeValue[i])
};





