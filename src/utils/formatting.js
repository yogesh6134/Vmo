import { InterestList } from "@mock/interestList";
import { LifeJourneyList } from "@mock/lifeJourneyList";

export const formatUserJourney = (journeyData) => {
  const filteredJourney = LifeJourneyList.filter((item) =>
    journeyData.includes(item.label)
  );
  return filteredJourney.map((item, index) => {
    if (journeyData.some((i) => i === item.label)) {
      return {
        id: index,
        name: item.name,
        label: item.label,
        isShow: journeyData.some((i) => i === item.label),
      };
    }
  });
};

export const formatUserInterest = (interestData) => {
  const filteredInterest = InterestList.filter((item) =>
    interestData.includes(item.label)
  );

  return filteredInterest.map((item, index) => {
    return {
      id: index,
      name: item.name,
      label: item.label,
      isShow: interestData.some((i) => i === item.label),
    };
  });
};

export const formatGroupMembers = (memberList) => {
  let updatedList = [];
  Object.keys(memberList).forEach((key) => {
    updatedList.push({
      id: key,
      avatar: memberList[key]?.["Image"],
      name: memberList[key]?.["First Name"],
      profession: memberList[key]?.["Profession"],
    });
  });

  return updatedList;
};

export const formatGroupName = (name) => {
  if (!name) return "";

  const updatedName = name.split(" ");

  const actualGroupName = updatedName[0] + " " + updatedName[1];

  return actualGroupName;
};
