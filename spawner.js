var spawner = {

    run: function(idealHarvesterAmount, idealUpgraderAmount, idealBuilderAmount) {

        breakpoint:

        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

        if(harvesters.length == 0 && Game.spawns['Spawn1'].spawning == null) {
            Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,MOVE], 'Harvester1', {role: 'harvester'});
            break breakpoint;
        }
        if(upgraders.length == 0 && Game.spawns['Spawn1'].spawning == null) {
            Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], 'Upgrader1', {role: 'upgrader'});
            break breakpoint;
        }
        if(builders.length == 0 && Game.spawns['Spawn1'].spawning == null) {
            Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], 'Builder1', {role: 'builder'});
            break breakpoint;
        }
        
        if(harvesters.length < idealHarvesterAmount && Game.spawns['Spawn1'].spawning == null) {
            var newNumber = harvesters.length + 1
            Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,MOVE], 'Harvester' + newNumber, {role: 'harvester'});
            break breakpoint;
        }
        if(upgraders.length < idealUpgraderAmount && Game.spawns['Spawn1'].spawning == null) {
            var newNumber = upgraders.length + 1
            Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], 'Upgrader' + newNumber, {role: 'upgrader'});
            break breakpoint;
        }
        if(builders.length < idealBuilderAmount && Game.spawns['Spawn1'].spawning == null) {
            var newNumber = builders.length + 1
            Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], 'Builder' + newNumber, {role: 'builder'});
            break breakpoint;
        }
    }
}

module.exports = spawner;