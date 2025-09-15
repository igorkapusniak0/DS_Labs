import {Friend, Colleague} from './myTypes'
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

function addColleague(cs: Colleague[] ,name: string, department: string, email: string){
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

console.log(older(friends[0]));
console.log(allOlder(friends));
console.log(highestExtension(colleagues.current));
addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));


