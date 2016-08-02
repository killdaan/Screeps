var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

var spawner = require('spawner');

var idealHarvesterAmount = 20
var idealUpgraderAmount = 20
var idealBuilderAmount = 20

module.exports.loop = function () {

    if (Game.spawns['Spawn1'].energy == Game.spawns['Spawn1'].energyCapacity) {
        spawner.run(creep);
    }

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