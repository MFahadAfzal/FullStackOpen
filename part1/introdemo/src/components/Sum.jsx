const Sum = ({ course }) => {
    const initialValue = 0;
    const sumWithInitial = course.parts.reduce(
  (accumulator, currentValue) => accumulator + currentValue.exercises,
  initialValue,);
  return <strong>total of {sumWithInitial} exercises</strong>
}

export default Sum