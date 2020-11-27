import { calculateTotal } from '../utils'

export default {
  totalPlacedObjectsWeight: ({ placedObjects }) => {
    const weights = placedObjects.map(obj => obj.weight)
    return calculateTotal(weights)
  },

  totalRandomlyPlacedObjectsWeight: ({ randomlyPlacedObjects }) => {
    const weights = randomlyPlacedObjects.map(obj => obj.weight)
    return calculateTotal(weights)
  },

  totalPlacedObjectsMomentum: ({ placedObjects }) => {
    const momentums = placedObjects.map(obj => obj.weight * obj.position)
    return calculateTotal(momentums)
  },

  totalRandomlyPlacedObjectsMomentum: ({ randomlyPlacedObjects }) => {
    const momentums = randomlyPlacedObjects.map(obj => obj.weight * obj.position)
    return calculateTotal(momentums)
  }

  // boardBendingAngle
  // isBendingAngleWithinLimits
}
