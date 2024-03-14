const college = {
    name: 'vnc',
    class: [11, 12],
    events: ['science','bijoy dibos','21 feb'],
    unique:{
        color: 'blue',
        result:{
            gpa: 5,
            merit: 'top'
        }
    }
};
//  college.unique.result.merit = 'top top top most'
// console.log(college.unique.result.merit);
college.events[1]='16 dec';
console.log(college.events[1]);

///////////delete property////////////////////////////////

delete college.class
console.log(college);