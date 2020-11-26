import { getRandomNumber, getRandomPosition, getRandomColor, generateId } from '@/utils'
import { MIN_OBJECT_WEIGHT, MAX_OBJECT_WEIGHT, SHAPES, BOARD_WIDTH } from '@/constants'

export default {
  // addPlacedObject
  // addRandomlyPlacedObject

  createObject: ({ fallingObjects, randomlyPlacedObjects }, randomlyPlaced = false) => {
    // getRandomPosition

    const shape = SHAPES[getRandomNumber(0, 2)]
    const weight = getRandomNumber(MIN_OBJECT_WEIGHT, MAX_OBJECT_WEIGHT + 1)
    const color = getRandomColor()
    const position = getRandomPosition(BOARD_WIDTH)
    const id = generateId.next().value

    const object = { shape, weight, position, color, id }
    console.log(object)

    randomlyPlaced ? randomlyPlacedObjects.push(object) : fallingObjects.push(object)
  }
}
