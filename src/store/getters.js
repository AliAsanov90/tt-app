import { calculateTotal } from '../utils'
import { MAX_BENDING_ANGLE, MIN_BENDING_ANGLE } from '@/constants'

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
  },

  boardBendingAngle (state, { totalPlacedObjectsMomentum, totalRandomlyPlacedObjectsMomentum }) {
    let angle = 0

    if (!totalPlacedObjectsMomentum) {
      angle = MAX_BENDING_ANGLE
    } else {
      const difference = Math.abs(totalPlacedObjectsMomentum - totalRandomlyPlacedObjectsMomentum)

      angle = totalPlacedObjectsMomentum > totalRandomlyPlacedObjectsMomentum
        ? difference / totalPlacedObjectsMomentum * -50
        : difference / totalRandomlyPlacedObjectsMomentum * 50
    }

    return angle
  },

  isBoardAngleWithinLimits (state, { boardBendingAngle }) {
    return boardBendingAngle > MIN_BENDING_ANGLE &&
      boardBendingAngle < MAX_BENDING_ANGLE
  }
}
