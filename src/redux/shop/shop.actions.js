import {  
    FETCH_COLLECTIONS_FAILURE, 
    FETCH_COLLECTIONS_START, 
    FETCH_COLLECTIONS_SUCCESS
   } from "../types";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

export const fetchCollectionsSuccess = (collectionsMap) => {
    return {
        type: FETCH_COLLECTIONS_SUCCESS,
        payload:collectionsMap
    }
}

export const fetchCollectionsStart = () => {
    return {
        type: FETCH_COLLECTIONS_START,
    }
}

export const fetchCollectionsFailure = (errorMessage) => {
    return {
        type: FETCH_COLLECTIONS_FAILURE,
        payload:errorMessage
    }
}

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionsStart())
        collectionRef.get().then(snapshot => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
          dispatch(fetchCollectionsSuccess(collectionsMap))
        })
        .catch(err => dispatch(fetchCollectionsFailure(err.message)))
    }
}