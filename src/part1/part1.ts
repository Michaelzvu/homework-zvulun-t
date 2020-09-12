import { mission } from '../shared/data';

export const getMostIsolatedCountry = (missions: Array<mission>) => {
  if (!missions.length) return []
  let mostIsolatedCountries: Array<string> = [];
  let highestDegree = 0;

  const notIsolatedAgents = new Set();
  const isolatedAgents: Map<string, mission> = missions.reduce<any>((accu, mission: mission) => {
    const agent = mission.agent;
    if (accu.has(agent)) {
      const tempMisssion: mission = accu.get(agent);
      if (tempMisssion.country !== mission.country) {
        accu.delete(agent);
        notIsolatedAgents.add(agent);
      }
    } else if (!notIsolatedAgents.has(agent)) {
      accu.set(agent, mission);
    }
  }, new Map());

  const countryToIsolatedAgents = new Map();
  isolatedAgents.forEach((mission: mission, agent: string) => {
    const country = mission.country;
    if (countryToIsolatedAgents.has(country)) {
      const agents: Array<string> = countryToIsolatedAgents.get(country);
      countryToIsolatedAgents.set(country, agents.push(agent));

      if (highestDegree < agents.length) {
        highestDegree = agents.length;
      }
    } else {
      countryToIsolatedAgents.set(country, [agent]);
      if (highestDegree < 1) highestDegree = 1;
    }
  });

  countryToIsolatedAgents.forEach((agents: Array<string>, country: string) => {
    if (agents.length === highestDegree) {
      mostIsolatedCountries.push(country);
    }
  });

  return mostIsolatedCountries;
};
