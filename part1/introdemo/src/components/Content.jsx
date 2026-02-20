import Parts from './Parts'
const Content = ({ course }) => {
    return (
        <ul>
         {course.parts.map(part => <Parts course={part} key={part.id} />)}
         </ul>
    )

}

export default Content