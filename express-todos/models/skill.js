// const skills = [
// 	{id: 125223, todo: 'Feed Dogs', done: true},
// 	{id: 127904, todo: 'Learn Express', done: false},
// 	{id: 139608, todo: 'Buy Milk', done: false}
//   ];




const skills = [
  { id: 001, skill: "HTML", rank: 2 },
  { id: 002, skill: "CSS", rank: 3 },
  { id: 003, skill: "JAVASCRIPT", rank: 2 },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};


function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find(skill => skill.id === parseInt(id));
}


function create(skill) {
	// Add the id
	skill.id = Date.now() % 1000000;
	// New todos wouldn't be done :)
	skill.rank = false;
	skills.push(skill);
  }

  function deleteOne(id) {
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
    }
  