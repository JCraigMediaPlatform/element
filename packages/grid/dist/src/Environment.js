"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MetricIdentifier_1 = require("./MetricIdentifier");
const WorkRoot_1 = require("./WorkRoot");
const findRoot = require("find-root");
const path = require("path");
function initFromEnvironment(env = process.env) {
    let root;
    if (env.NODE_ENV !== 'production') {
        devDefaults(env);
        root = path.join(findRoot(__dirname), 'dev-data');
    }
    else {
        root = '/data';
    }
    const workRoot = new WorkRoot_1.default(root);
    const metricIdentifier = MetricIdentifier_1.newMetricIdentifierFromObject({
        floodID: Number(env.FLOOD_SEQUENCE_ID),
        accountID: Number(env.FLOOD_ACCOUNT_ID),
        projectID: Number(env.FLOOD_PROJECT_ID),
        gridID: Number(env.FLOOD_GRID_SEQUENCE_ID),
        nodeID: Number(env.FLOOD_GRID_NODE_SEQUENCE_ID),
        region: env.FLOOD_GRID_REGION,
    });
    const num = (v) => {
        if (v === undefined || v.trim() == '') {
            return -1;
        }
        const n = Number(v);
        if (Number.isNaN(n)) {
            return -1;
        }
        return n;
    };
    return {
        metricIdentifier,
        sumpHost: env.FLOOD_SUMP_HOST,
        sumpPort: Number(env.FLOOD_SUMP_PORT),
        workRoot,
        threadID: num(env.THREAD_ID),
        testIterations: num(env.FLOOD_TEST_ITERATIONS),
        testDuration: num(env.FLOOD_TEST_DURATION),
    };
}
exports.initFromEnvironment = initFromEnvironment;
function devDefaults(env) {
    // dev only
    env.FLOOD_SEQUENCE_ID = env.FLOOD_SEQUENCE_ID || '1';
    env.FLOOD_ACCOUNT_ID = env.FLOOD_ACCOUNT_ID || '1';
    env.FLOOD_PROJECT_ID = env.FLOOD_PROJECT_ID || '1';
    env.FLOOD_GRID_REGION = env.FLOOD_GRID_REGION || 'devland';
    env.FLOOD_GRID_SEQUENCE_ID = env.FLOOD_GRID_SEQUENCE_ID || '1';
    env.FLOOD_GRID_NODE_SEQUENCE_ID = env.FLOOD_GRID_NODE_SEQUENCE_ID || '1';
    env.FLOOD_SUMP_HOST = env.FLOOD_SUMP_HOST || 'localhost';
    env.FLOOD_SUMP_PORT = env.FLOOD_SUMP_PORT || '35663';
    env.FLOOD_TEST_ITERATIONS = env.FLOOD_TEST_ITERATIONS || '-1';
    env.FLOOD_TEST_DURATION = env.FLOOD_TEST_DURATION || '-1';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW52aXJvbm1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvRW52aXJvbm1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5REFBa0U7QUFFbEUseUNBQWlDO0FBQ2pDLHNDQUFxQztBQUNyQyw2QkFBNEI7QUFNNUIsNkJBQW9DLE1BQWtCLE9BQU8sQ0FBQyxHQUFHO0lBQ2hFLElBQUksSUFBWSxDQUFBO0lBQ2hCLElBQUksR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZLEVBQUU7UUFDbEMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQTtLQUNqRDtTQUFNO1FBQ04sSUFBSSxHQUFHLE9BQU8sQ0FBQTtLQUNkO0lBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxrQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBRW5DLE1BQU0sZ0JBQWdCLEdBQUcsZ0RBQTZCLENBQUM7UUFDdEQsT0FBTyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7UUFDdEMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7UUFDdkMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7UUFDdkMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7UUFDMUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUM7UUFDL0MsTUFBTSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUI7S0FDN0IsQ0FBQyxDQUFBO0lBRUYsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFxQixFQUFVLEVBQUU7UUFDN0MsSUFBSSxDQUFDLEtBQUssU0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDdEMsT0FBTyxDQUFDLENBQUMsQ0FBQTtTQUNUO1FBRUQsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ25CLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwQixPQUFPLENBQUMsQ0FBQyxDQUFBO1NBQ1Q7UUFFRCxPQUFPLENBQUMsQ0FBQTtJQUNULENBQUMsQ0FBQTtJQUVELE9BQU87UUFDTixnQkFBZ0I7UUFDaEIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxlQUFlO1FBQzdCLFFBQVEsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztRQUNyQyxRQUFRO1FBQ1IsUUFBUSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQzVCLGNBQWMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDO1FBQzlDLFlBQVksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0tBQzFDLENBQUE7QUFDRixDQUFDO0FBMUNELGtEQTBDQztBQUVELHFCQUFxQixHQUFlO0lBQ25DLFdBQVc7SUFDWCxHQUFHLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLGlCQUFpQixJQUFJLEdBQUcsQ0FBQTtJQUNwRCxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixJQUFJLEdBQUcsQ0FBQTtJQUNsRCxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixJQUFJLEdBQUcsQ0FBQTtJQUNsRCxHQUFHLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLGlCQUFpQixJQUFJLFNBQVMsQ0FBQTtJQUMxRCxHQUFHLENBQUMsc0JBQXNCLEdBQUcsR0FBRyxDQUFDLHNCQUFzQixJQUFJLEdBQUcsQ0FBQTtJQUM5RCxHQUFHLENBQUMsMkJBQTJCLEdBQUcsR0FBRyxDQUFDLDJCQUEyQixJQUFJLEdBQUcsQ0FBQTtJQUV4RSxHQUFHLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxlQUFlLElBQUksV0FBVyxDQUFBO0lBQ3hELEdBQUcsQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUE7SUFFcEQsR0FBRyxDQUFDLHFCQUFxQixHQUFHLEdBQUcsQ0FBQyxxQkFBcUIsSUFBSSxJQUFJLENBQUE7SUFDN0QsR0FBRyxDQUFDLG1CQUFtQixHQUFHLEdBQUcsQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUE7QUFDMUQsQ0FBQyJ9