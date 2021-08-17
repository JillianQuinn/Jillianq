import { prefixes, actionTypes } from "./_constants"
import getAsyncAction from "./asyncActionUtils"
import apis from "../../api/experience"

export const fetchExperience = getAsyncAction({ actionTypePrefix: prefixes.EXPERIENCE+actionTypes.FETCH, asyncFunc: apis.fetchExperience });