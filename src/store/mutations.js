import { getRandomNumber, getRandomPosition, getRandomColor, generateId } from '@/utils'
import { MIN_OBJECT_WEIGHT, MAX_OBJECT_WEIGHT, SHAPES, BOARD_WIDTH, SCALE_FACTOR } from '@/constants'

export default {
  // addPlacedObject

  createObject: ({ fallingObjects, randomlyPlacedObjects }, randomlyPlaced = false) => {
    const shape = SHAPES[getRandomNumber(0, 2)]
    const weight = getRandomNumber(MIN_OBJECT_WEIGHT, MAX_OBJECT_WEIGHT - 1)
    const color = getRandomColor()
    const position = getRandomPosition(BOARD_WIDTH)
    const id = generateId.next().value
    const scale = 1 + (SCALE_FACTOR * weight)
    const parsedScale = parseFloat(scale.toFixed(2))

    const object = { shape, weight, position, color, id, scale: parsedScale }

    randomlyPlaced ? randomlyPlacedObjects.push(object) : fallingObjects.push(object)
  }
}
