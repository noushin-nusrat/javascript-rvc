const address = 'bandorbon';
const part = address.slice(0, 6);
// console.log(part);

const sentence = 'i am a good and hardworking girl';
// console.log(sentence);
// console.log(sentence.split(' '));
// console.log(sentence.split('a'));

const friendStr = 'fahim,rahim,kahim,cahim,dahim,lahim';
console.log(friendStr.split(','));
const realFriend = ['fahim', 'rahim', 'kahim', 'cahim', 'dahim', 'lahim'];
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));