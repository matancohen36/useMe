import { gigService } from '../../services/gigService'

// Action Dispatcher
export function loadGigs(filterBy) {
  return async dispatch => {
    const gigs = await gigService.query(filterBy)
    dispatch({ type: 'SET_GIGS', gigs })
  }
}

export function getById(gigId) {
  return async dispatch => {
    const gig = await gigService.getById(gigId)
    dispatch({ type: 'SET_GIG', gig })
  }
}
export function removeGig(gigId) {
  return async dispatch => {
    try {
      await gigService.remove(gigId)
      dispatch({ type: 'REMOVE_GIG', gigId })
    } catch (err) {
      console.log('ERROR!');
    }
  }
}

export function addGig(gig) {
  return async dispatch => {
    try {
      const savedGig = await gigService.save(gig)
      dispatch({ type: 'ADD_GIG', gig: savedGig })
    } catch (err) {
      console.log('ERROR!');
    }
  }
}
export function updateGig(gig) {
  return async dispatch => {
    try {
      const savedGig = await gigService.save(gig)
      dispatch({ type: 'UPDATE_GIG', gig: savedGig })
    } catch (err) {
      console.log('ERROR!');
    }
  }
}