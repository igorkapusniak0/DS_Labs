import {Friend, Colleague, EmailContact, FriendName} from './myTypes'
import {friends, colleagues} from './01-basics.ts'

function older(f: Friend) : string {
	f.age += 1;
	return `${f.name} is now ${f.age}`;
}

function allOlder(f: Friend[]) : string[] {
	let all: string[] = [""]; 
	for (let i = 0; i < f.length; i++){
		f[i].age += 1;
		all[i] = `${f[i].name} is now ${f[i].age};`
	}
	
	return all;
}

function highestExtension(cs: Colleague[]): Colleague {
	const result = cs.sort(
		(c1,c2) => c1.contact.extension - c2.contact.extension
	);

	return result[cs.length - 1];
}

function addColleague(cs: Colleague[], name: string, department: string, email: string){
	const csList = cs.sort(
		(c1,c2) => c1.contact.extension - c2.contact.extension
	);
	const newColleague: Colleague = {
		name: `${name}`,
		department: `${department}`,
		contact: { 
			email: `${email}`,
			extension: csList[cs.length - 1].contact.extension + 1,
		}
	};

	cs.push(newColleague)
}

function sortColleagues(colleagues: Colleague[], sorter: (c1: Colleague, c2: Colleague) => number, max?: number): EmailContact[] {
  
	let end = colleagues.length;
	if (max !== undefined){
		end = max < 2 ? 1 : max;
	}
	const sorted = colleagues.sort(sorter);
  	const fullResult = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  	
	return fullResult.slice(0,end) 
}


function findFriends(fs: Friend[], filter: (friend: Friend) => boolean ) : FriendName[] {
	const result: FriendName[] = fs.filter(filter).map(friend => ({name: friend.name}));
	return result;
}

console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension, 1));
console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length, 1));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length)));

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));

//console.log(older(friends[0]));
//console.log(allOlder(friends));
//console.log(highestExtension(colleagues.current));
//addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
//console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));


