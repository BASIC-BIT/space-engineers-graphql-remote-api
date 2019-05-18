import { getDB } from '../broker/database';
import { getGraphQL }from '../broker/graphQL';

const db = getDB();
const graphQL = getGraphQL();

let instance;

class StatisticReporter {
  start() {
    this.interval = setInterval(this.report.bind(this), 30000);
    this.report();
  }

  stop() {
    if(this.interval) {
      clearInterval(this.interval);
    }
  }

  async report() {
    console.log(await graphQL.query(`{ping}`));
  }
}


function getStatisticStore() {
  if (instance) {
    return instance;
  } else {
    instance = new StatisticReporter();

    return instance;
  }
}

export { getStatisticStore };
