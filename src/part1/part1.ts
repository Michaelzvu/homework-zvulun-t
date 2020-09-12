import { mission } from '../shared/data';

const getIsolatedAgents = (missions: Array<mission>) => {
  const notIsolatedAgents = new Set();
  const isolatedAgents: Map<string, mission> = missions.reduce<Map<string, mission>>((accu, mission) => {
    const agent = mission.agent;
    if (accu.has(agent)) {
      const tempMisssion: mission = accu.get(agent) as mission;
      if (tempMisssion.country !== mission.country) {
        accu.delete(agent);
        notIsolatedAgents.add(agent);
      }
    } else if (!notIsolatedAgents.has(agent)) {
      accu.set(agent, mission);
    }
    return accu;
  }, new Map());
  return isolatedAgents;
};

export const getMostIsolatedCountry = (missions: Array<mission>) => {
  if (!missions.length) return []
  let mostIsolatedCountries: Array<string> = [];
  let highestDegree = 0;
  const isolatedAgents = getIsolatedAgents(missions);

  const countryToIsolatedAgents = new Map();
  isolatedAgents.forEach((mission: mission, agent: string) => {
    const country = mission.country;
    let agentsCounter = 0;
    if (countryToIsolatedAgents.has(country)) {
      const agents: Array<string> = countryToIsolatedAgents.get(country);
      agents.push(agent);
      countryToIsolatedAgents.set(country, agents);
      agentsCounter = agents.length;
    } else {
      countryToIsolatedAgents.set(country, [agent]);
      agentsCounter = 1;
    }
    if (highestDegree < agentsCounter) {
      highestDegree = agentsCounter;
    }
  });

  countryToIsolatedAgents.forEach((agents: Array<string>, country: string) => {
    if (agents.length === highestDegree) {
      mostIsolatedCountries.push(country);
    }
  });

  return mostIsolatedCountries;
};
