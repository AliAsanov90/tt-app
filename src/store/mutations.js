import {
  getRandomNumber,
  getRandomColor,
  generateId,
  parseNumber
} from '@/utils'

import {
  MIN_OBJECT_WEIGHT,
  MAX_OBJECT_WEIGHT,
  SHAPES,
  SCALE_FACTOR,
  MAX_FALLING_INTERVAL,
  MIN_FALLING_INTERVAL
} from '@/constants'

export default {

  createObject ({ fallingObjects, randomlyPlacedObjects }, randomlyPlaced = false) {
    const shape = SHAPES[getRandomNumber(0, 2)]
    const weight = getRandomNumber(MIN_OBJECT_WEIGHT, MAX_OBJECT_WEIGHT - 1)
    const color = getRandomColor()
    const position = getRandomNumber(0, 40)
    const top = 0
    const id = generateId.next().value
    const scale = 1 + (SCALE_FACTOR * weight)
    const parsedScale = parseNumber(scale, 2)

    const object = { shape, weight, position, top, color, id, scale: parsedScale }

    randomlyPlaced ? randomlyPlacedObjects.push(object) : fallingObjects.push(object)
  },

  toggleGamePlay (state) {
    state.isGamePaused = !state.isGamePaused
  },

  toggleModal (state) {
    state.isModalOpen = !state.isModalOpen
  },

  addPlacedObject (state, object = {}) {
    state.placedObjects.push(object)
  },

  updateFallingInterval (state, reset = false) {
    if (reset) {
      state.fallingInterval = MAX_FALLING_INTERVAL
    } else if (state.fallingInterval > MIN_FALLING_INTERVAL) {
      state.fallingInterval--
    }
  },

  moveObject ({ fallingObjects }, { moveLeft, width }) {
    const object = fallingObjects[0]
    console.log('true')

    const canMoveLeft = object.position - 1 >= 0
    const canMoveRight = object.position + width + 1 <= 45

    if (moveLeft) canMoveLeft && object.position--
    else canMoveRight && object.position++
  },

  emptyObjectsArrays (state) {
    state.fallingObjects = []
    state.placedObjects = []
    state.randomlyPlacedObjects = []
  }
}
