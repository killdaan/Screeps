var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

var idealHarvesterAmount = 20

if (Game.spawns['Spawn1'].energy == Game.spawns['Spawn1'].energyCapacity) {
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    if(harvesters.length == 0) {
        Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], 'Harvester1', {role: 'harvester'});
    }
    if(harvesters.length < idealHarvesterAmount) {
        var newNumber = harvesters.length + 1
        Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], 'Harvester' + newNumber, {role: 'harvester'});
    }
}

module.exports.loop = function () {
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}