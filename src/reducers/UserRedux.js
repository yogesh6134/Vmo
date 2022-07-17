import {
  SET_DOB,
  SET_GENDER,
  SET_HIGHLIGHT,
  SET_LIFE_JOURNEY,
  SET_PROFESSION,
  SET_PUSH_TOKEN,
  SET_USER_BIO,
  SET_USER_IMAGE,
  SET_USER_INTEREST,
  SET_USER_LOCATION,
  SET_USER_NAME,
  SET_USER_PROFILE,
  SET_USER_CONTACTS,
  SET_REQUESTED_USERS_ID,
  SET_FRIEND_REQUEST_LIST,
  SET_FRIEND_LIST,
  SET_USER_GROUP_CHATS,
  CLEAR_USER_PROFILE,
  SET_SELECTED_ACTIVITY,
  GET_REPORTED_USER,
  GET_REPORTED_USER_LIST,
} from "@actions/Types";

const initialState = {
  userProfile: {
    firstName: "",
    lastName: "",
    highlightData: [],
    dob: "",
    age: "",
    gender: "",
    bio: "",
    image: "",
    professionData: {
      profession: "",
      description: "",
    },
    lifeJourneyData: null,
    userInterest: null,
    contacts: [],
    location: null,
    token: "",
    sentRequests: [],
  },
  progress: 0,
  friendRequests: [],
  friendList: [],
  groupChats: [],
  selectedActivities: [],
  reports: [],
  reportedUserList: [],
};

const userReducer = (state = initialState, action) => {
  const profile = state.userProfile;
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    case SET_USER_NAME:
      const { firstName, lastName } = action.payload;
      profile.firstName = firstName;
      profile.lastName = lastName;

      return {
        ...state,
        userProfile: { ...profile },
      };
    case SET_DOB:
      const { selectedDate, age } = action.payload;
      profile.dob = selectedDate;
      profile.age = age;
      return {
        ...state,
        userProfile: { ...profile },
      };
    case SET_GENDER:
      profile.gender = action.payload;
      return {
        ...state,
        userProfile: { ...profile },
      };
    case SET_PROFESSION:
      const { selected, study, profession } = action.payload;
      profile.professionData.profession = selected;

      if (selected === "Student") {
        profile.professionData.description = study;
      } else if (selected === "Employed") {
        profile.professionData.description = profession;
      } else {
        profile.professionData.description = "";
      }

      return {
        ...state,
        userProfile: { ...profile },
      };

    case SET_LIFE_JOURNEY:
      const journeyList = action.payload;
      const updatedJourneyList = journeyList.filter(
        (journey) => journey.isShow === true
      );
      profile.lifeJourneyData = updatedJourneyList;

      return {
        ...state,
        userProfile: { ...profile },
      };

    case SET_HIGHLIGHT:
      const highlightList = action.payload;
      const updatedHighlightList = highlightList.filter(
        (item) => item.active === true
      );
      profile.highlightData = updatedHighlightList;
      return {
        ...state,
        userProfile: { ...profile },
      };

    case SET_USER_INTEREST:
      const userInterest = action.payload;
      const updatedUserInterest = userInterest.filter(
        (item) => item.isShow === true
      );

      profile.userInterest = updatedUserInterest;

      return {
        ...state,
        userProfile: { ...profile },
      };
    case SET_USER_BIO:
      profile.bio = action.payload;
      return {
        ...state,
        userProfile: { ...profile },
      };
    case SET_USER_LOCATION:
      profile.location = action.payload;

      return {
        ...state,
        userProfile: { ...profile },
      };
    case SET_USER_IMAGE:
      profile.image = action.payload;
      return {
        ...state,
        userProfile: { ...profile },
      };
    case SET_USER_CONTACTS:
      profile.contacts = action.payload;
      return {
        ...state,
        userProfile: { ...profile },
      };
    case SET_PUSH_TOKEN:
      profile.token = action.payload;
      return {
        ...state,
        userProfile: { ...profile },
      };
    case SET_REQUESTED_USERS_ID:
      profile.sentRequests = action.payload;
      return {
        ...state,
        userProfile: { ...profile },
      };
    case SET_FRIEND_REQUEST_LIST:
      return {
        ...state,
        friendRequests: action.payload,
      };
    case SET_FRIEND_LIST:
      return {
        ...state,
        friendList: [...action.payload],
      };
    case SET_USER_GROUP_CHATS:
      return {
        ...state,
        groupChats: [...action.payload],
      };
    case CLEAR_USER_PROFILE:
      return {
        ...state,
        userProfile: {
          firstName: "",
          lastName: "",
          dob: "",
          age: "",
          gender: "",
          bio: "",
          image: "",
          professionData: {
            profession: "",
            description: "",
          },
          lifeJourneyData: null,
          userInterest: null,
          contacts: [],
          location: null,
          token: "",
          sentRequests: [],
        },
        progress: 0,
        friendRequests: [],
        friendList: [],
        groupChats: [],
      };
    case SET_SELECTED_ACTIVITY:
      return {
        ...state,
        selectedActivities: [...action.payload],
      };
    case GET_REPORTED_USER:
      return {
        ...state,
        reports: [...action.payload],
      };
    case GET_REPORTED_USER_LIST:
      return {
        ...state,
        reportedUserList: [...action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;
