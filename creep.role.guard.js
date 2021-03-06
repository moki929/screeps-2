/*
* Creep Role Guard
* dutyPoint: array of 2 integer
*/

const creepRoleOfficer = require("creep.role.officer");
const creepRoleUtils = require("creep.role.utils");

const creepRoleGuard = {
    __proto__: creepRoleOfficer,

    name: "guard",
    pathColor: "#ff0000",
    // reusePath: 100,

    chooseTarget(creep) {
        var target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
        if (!target) {
            target = creep.memory.dutyPoint;
        }
        return target;
    },

    do(creep, target) {
        if (target instanceof Creep) {
            creepRoleUtils.doAttack(creep, target, this.pathColor, this.reusePath);
        } else if (target instanceof RoomPosition) {
            creepRoleUtils.doRest(creep, target, this.reusePath);
        }
    },
};

module.exports = creepRoleGuard;
