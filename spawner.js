var spawner = {

    run: function(idealHarvesterAmount, idealUpgraderAmount, idealBuilderAmount) {

        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

        if(harvesters.length == 0) {
            Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,MOVE], 'Harvester1', {role: 'harvester'});
        }
        if(upgraders.length == 0) {
            Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], 'Upgrader1', {role: 'upgrader'});
        }
        if(builders.length == 0) {
            Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], 'Builder1', {role: 'builder'});
        }
        
        if(harvesters.length < idealHarvesterAmount) {
            var newNumber = harvesters.length + 1
            Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,MOVE], 'Harvester' + newNumber, {role: 'harvester'});
        }
        if(upgraders.length < idealUpgraderAmount) {
            var newNumber = upgraders.length + 1
            Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], 'Upgrader' + newNumber, {role: 'upgrader'});
        }
        if(builders.length < idealBuilderAmount) {
            var newNumber = builders.length + 1
            Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], 'Builder' + newNumber, {role: 'builder'});
        }
    }
}

module.exports = spawner;