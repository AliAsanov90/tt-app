import { calculateTotalWeight } from '../utils'

export default {
  totalPlacedObjectsWeight: ({ placedObjects }) => {
    return calculateTotalWeight(placedObjects)
  },

  totalRandomlyPlacedObjectsWeight: ({ randomlyPlacedObjects }) => {
    return calculateTotalWeight(randomlyPlacedObjects)
  }

  // totalRandomlyPlacedObjectsSum
  // boardBendingAngle
  // isBendingAngleWithinLimits
}
