import { prefixes, actionTypes } from "./_constants"
import getAsyncAction from "./asyncActionUtils"
import apis from "../../api/courses"

export const fetchCourses = getAsyncAction({ actionTypePrefix: prefixes.COURSES+actionTypes.FETCH, asyncFunc: apis.fetchCourses });