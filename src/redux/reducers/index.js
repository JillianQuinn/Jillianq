import { combineReducers } from "redux";

import initialState from "./initialState";
import { prefixes } from "../actions/_constants"

import getAsyncActionReducers from "./asyncActionReducer";

const projectsReducers = getAsyncActionReducers({ 
    actionTypePrefix: prefixes.PROJECTS,
    objectsInitialState: initialState.projects,
    isFetchingInitialState: initialState.isFetchingProjects
});

const experienceReducers = getAsyncActionReducers({ 
    actionTypePrefix: prefixes.EXPERIENCE,
    objectsInitialState: initialState.experience,
    isFetchingInitialState: initialState.isFetchingExperience
});

const coursesReducers = getAsyncActionReducers({ 
    actionTypePrefix: prefixes.COURSES,
    objectsInitialState: initialState.courses,
    isFetchingInitialState: initialState.isFetchingCourses
});


const socialsReducers = getAsyncActionReducers({ 
    actionTypePrefix: prefixes.SOCIALS,
    objectsInitialState: initialState.socials,
    isFetchingInitialState: initialState.isFetchingSocials
});


export default combineReducers({
    projects: projectsReducers.objectsReducer,
    experience: experienceReducers.objectsReducer,
    courses: coursesReducers.objectsReducer,
    socials: socialsReducers.objectsReducer,
    
    isFetchingProjects: projectsReducers.isFetchingReducer,
    isFetchingCourses: coursesReducers.isFetchingReducer,
    isFetchingExperience: experienceReducers.isFetchingReducer,
    isFetchingSocials: socialsReducers.isFetchingReducer,
});