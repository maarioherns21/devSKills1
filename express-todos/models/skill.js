
const skills = [
  { id: 05121, skill: "HTML", rank: 2 },
  { id: 12512, skill: "CSS", rank: 3 },
  { id: 57112, skill: "JAVASCRIPT", rank: 2 },
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
  