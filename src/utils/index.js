function * idGenerator () {
  let i = 1
  while (true) yield i++
}

export const generateId = idGenerator()

export const getRandomNumber = (min, max) => {
  return min + Math.round(Math.random() * max)
}

export const getRandomPosition = (width) => {
  const max = (width / 2) - 1
  const min = 1
  return getRandomNumber(min, max)
}

export const getRandomColor = () => {
  const max = 200 // avoid getting light colors
  const r = getRandomNumber(0, max)
  const g = getRandomNumber(0, max)
  const b = getRandomNumber(0, max)

  return `rgb(${r}, ${g}, ${b})`
}

export const calculateTotal = numbersArr => {
  return numbersArr.reduce((total, current) => {
    total += current
    return total
  }, 0)
}
