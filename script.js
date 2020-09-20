

let john = {
    name: 'John',
    score: 80,
};
let bill = {
    name: 'Bill',
    score: 77
};
let david = {
    name: 'David',
    score: 68,
};
let rayn = {
    name: 'Rayn',
    score: 88,
};
let nick = {
    name: 'Nick',
    score: 95,
};

const studs = [];
studs.push(john, bill, david, rayn, nick);


for (i = 0; i < studs.length; i++) {
        if (studs[i] < 60) {
            studs[i][' assessment'] = 'F';
        } else if (studs[i]['score'] < 70) {
           studs[i][' assessment'] = 'D';
        } else if (studs[i]['score'] < 80) {
            studs[i][' assessment'] = 'C';
        } else if (studs[i]['score'] < 90) {
            studs[i][' assessment'] = 'B';
        } else if (studs[i]['score'] < 100) {
            studs[i][' assessment'] = 'A';
        } 
         console.log(studs[i]);
    }
let sum = 0;
for (let k = 0; k < studs.length; k++) {

   
    sum = sum + studs[k]['score']; 
     console.log(sum); 
} 
let averageValue = sum / studs.length ;
console.log(Math.ceil(averageValue));
if (averageValue < 60) {
    averageValue = 'F';
} else if (averageValue < 70) {
    averageValue = 'D';
} else if (averageValue < 80) {
    averageValue = 'C';
} else if (averageValue < 90) {
    averageValue = 'B';
} else if (averageValue < 100) {
    averageValue = 'A';
} 
console.log(averageValue);



let summary = 0;
for (let n = 0; n <= 1000; n++) {
    if ( n % 5 === 0 || n % 3 === 0 ) {
        summary += n;
    console.log(summary);
    }
}

let str = '';
for (let j = 0; j < 5; j++) {
	str = str + '*';
	console.log(str);
}