function * idGenerator () {
  let i = 1
  while (true) yield i++
}

export const generateId = idGenerator()

export const getRandomNumber = (min, max) => {
  return min + Math.round(Math.random() * max)
}

export const getRandomPosition = (width) => {
  const max = (width / 2) + 1
  const min = 1
  return getRandomNumber(min, max)
}

export const getRandomColor = (min = 0, max = 255) => {
  const r = getRandomNumber(min, max)
  const g = getRandomNumber(min, max)
  const b = getRandomNumber(min, max)

  return `rgb(${r}, ${g}, ${b})`
}

export const calculateTotalWeight = objects => {
  return objects.reduce((total, current) => {
    total += current.weight
    return total
  }, 0)
}
