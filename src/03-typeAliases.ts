import {ColleagueV2, Friend, Buddy, BuddyList, Administrator,} from "./myTypes";

import { friends } from "./01-basics";

const colleague1: ColleagueV2 = {
  name: "Ralph Graham",
  department: "Engineering",
  contact: {
    email: "rgraham@company.com",
    extension: 121,
  },
};

const colleague2: ColleagueV2 = {
	  name: "Graham Ralph",
	    department: "Engineering",
	      contact: {
		          email: "gralph@company.com",
			      extension: 122,
			        },
};

function makeBuddyList(name: string, buddies: Buddy[], admin?: Administrator): BuddyList {
  return {name, members: buddies, administrator: admin,} as BuddyList;
}

const myFootballBuddies = makeBuddyList("Football team", [colleague1, friends[0], colleague2], colleague1)

const myBandBuddies = makeBuddyList("Band name", [colleague1, friends[1]])

//console.log(myFootballBuddies)
//console.log(myBandBuddies)

function findBuddyContact(list: BuddyList, name: string): string | undefined {
	for (const buddy of list.members) {
    		if (buddy.name === name) {
      			if ("phone" in buddy) {
        			return buddy.phone;
			}
			else {
				return buddy.contact.email;
			}
		}
    		return undefined;
  	}
}

function getBuddyListFriends(list: BuddyList): Friend[] {
	let onlyFriends: Friend[] = [];
	for (const friend of list.members){
		if ("age" in friend){			
			onlyFriends.push(friend);
		}
	}
	return onlyFriends;
}

console.log(getBuddyListFriends(myFootballBuddies));

//console.log("Contact buddy at: ", findBuddyContact(myFootballBuddies, "Ralph Graham"));

