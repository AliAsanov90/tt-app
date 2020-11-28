import { calculateTotal, parseNumber } from '@/utils'

import {
  MAX_BENDING_ANGLE,
  MIN_BENDING_ANGLE,
  BOARD_FACTOR,
  BOARD_CENTER,
  MAX_MOMENTUM_DIFFERENCE
} from '@/constants'

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
    const momentums = placedObjects.map(obj => {
      const objDistanceFromCenter = (BOARD_CENTER - obj.position) / BOARD_FACTOR
      return obj.weight * objDistanceFromCenter
    })

    const totalMomentums = calculateTotal(momentums)
    return parseNumber(totalMomentums, 1)
  },

  totalRandomlyPlacedObjectsMomentum: ({ randomlyPlacedObjects }) => {
    const momentums = randomlyPlacedObjects.map(obj => {
      const objDistanceFromCenter = (10 + obj.position) / BOARD_FACTOR
      return obj.weight * objDistanceFromCenter
    })

    const totalMomentums = calculateTotal(momentums)
    return parseNumber(totalMomentums, 1)
  },

  objectsMomentumDifference: (state, { totalPlacedObjectsMomentum, totalRandomlyPlacedObjectsMomentum }) => {
    return Math.abs(totalPlacedObjectsMomentum - totalRandomlyPlacedObjectsMomentum)
  },

  isMomentumDiffWithinLimit: (state, { objectsMomentumDifference }) => {
    return objectsMomentumDifference < MAX_MOMENTUM_DIFFERENCE
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
