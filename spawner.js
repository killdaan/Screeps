var spawner = {

    run: function(idealHarvesterAmount, idealUpgraderAmount, idealBuilderAmount) {

        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

        if(harvesters.length == 0 && Game.spawns['Spawn1'].spawning == null) {
            Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,MOVE], 'Harvester1', {role: 'harvester'});
            return spawner.run;
        }
        if(upgraders.length == 0 && Game.spawns['Spawn1'].spawning == null) {
            Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], 'Upgrader1', {role: 'upgrader'});
            return spawner.run;
        }
        if(builders.length == 0 && Game.spawns['Spawn1'].spawning == null) {
            Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], 'Builder1', {role: 'builder'});
            return spawner.run;
        }
        
        if(harvesters.length < idealHarvesterAmount && Game.spawns['Spawn1'].spawning == null && harvesters.length <= upgraders.length && harvesters.length <= builders.length) {
            var newNumber = harvesters.length + 1
            Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,MOVE], 'Harvester' + newNumber, {role: 'harvester'});
            return spawner.run;
        }
        if(upgraders.length < idealUpgraderAmount && Game.spawns['Spawn1'].spawning == null && upgraders.length <= harvesters.length && upgraders.length <= builders.length) {
            var newNumber = upgraders.length + 1
            Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], 'Upgrader' + newNumber, {role: 'upgrader'});
            return spawner.run;
        }
        if(builders.length < idealBuilderAmount && Game.spawns['Spawn1'].spawning == null && builders.length <= harvesters.length && builders.length <= upgraders.length) {
            var newNumber = builders.length + 1
            Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], 'Builder' + newNumber, {role: 'builder'});
            return spawner.run;
        }
    }
}

module.exports = spawner;